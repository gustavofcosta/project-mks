import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import cartModalReducer from './features/cartModal/cartModalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartModal: cartModalReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch