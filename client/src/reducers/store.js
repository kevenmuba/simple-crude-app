// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './index'; // Adjust the path as necessary

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* additional middleware if needed */),
});

export default store;