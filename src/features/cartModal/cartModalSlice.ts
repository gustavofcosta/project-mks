import { createSlice } from '@reduxjs/toolkit';

interface IPropsInitialstate {
  isOpen: boolean,
}

const initialState:IPropsInitialstate = {
  isOpen: false,
};

const CartModalSlice = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
    openCartModal: (state) => {     
      state.isOpen = true;
    },
    closeCartModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openCartModal, closeCartModal } = CartModalSlice.actions;

export default CartModalSlice.reducer;
