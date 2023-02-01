import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICardProducts } from '../../../typings';


const url = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'

export const getProductsItems = createAsyncThunk(
  'products/getProductsItems', async () => {
    try {
      const { data } = await axios(url);

      return data.products;

    } catch (error) {
      return console.log(error);
    }
  }
)

interface IPropsInitialstate {
  listProducts: ICardProducts[],
  cartProducts: ICardProducts[],
  amount: number,
  total: number,
  isLoading: boolean,
}

const initialState: IPropsInitialstate = {
  listProducts: [],
  cartProducts: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      let idExists = state.cartProducts.find((item) => item.id === itemId) 

      if(idExists) {
        idExists.amount = idExists.amount + 1
      } else {
        const product: any = state.listProducts.find((item) => item.id === itemId)
        product.amount = 1
        state.cartProducts.push(product)
      }


    },
    removeItem: (state, action) => {  
      const itemId = action.payload;
      state.cartProducts = state.cartProducts.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      
      const cartProducts = state.cartProducts.find((item) => item.id === payload.id);
      
      cartProducts &&  (cartProducts.amount = cartProducts.amount + 1);
      
    },
    decrease: (state, { payload }) => {
      const cartProducts = state.cartProducts.find((item) => item.id === payload.id);
      
      cartProducts &&  (cartProducts.amount = cartProducts.amount - 1);
    
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartProducts.forEach((item) => {
        let price = parseFloat(item.price)
        amount += item.amount;
        total += item.amount * price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsItems.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getProductsItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listProducts = action.payload;
    })
    builder.addCase(getProductsItems.rejected, (state) => {
      state.isLoading = false;
    })
  }
})

export const { addCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;