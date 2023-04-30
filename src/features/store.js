import { configureStore } from '@reduxjs/toolkit'
import { authApi, productApi, categoriesApi } from './api'
import { appSlice } from './slice/appSlice'
export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productApi.middleware,
      categoriesApi.middleware,
    ),
})
