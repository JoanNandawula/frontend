// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';

// You can add reducers here as your app grows
const store = configureStore({
  reducer: {
    // example: cart: cartReducer,
  },
});

export default store;
