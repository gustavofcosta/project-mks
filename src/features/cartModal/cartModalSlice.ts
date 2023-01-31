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
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = CartModalSlice.actions;

export default CartModalSlice.reducer;
