import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/products/productSlice'
import orderReducer from '../features/orders/OrderSlice'
import filterReducer from '../features/filters/filterSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    orders: orderReducer,
    filters: filterReducer,
  },
})

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch