import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import cartmodalReducer from './features/cartModal/cartModalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartModal: cartmodalReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch