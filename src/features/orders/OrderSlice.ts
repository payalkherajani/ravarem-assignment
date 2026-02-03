import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

export interface Order {
  id: string
  productId: string
  productName: string
  price: number
  recipientEmail: string
  recipientName: string
  recipientCompany?: string
  address: {
    line1: string
    line2?: string
    country: string
    city: string
    state: string
    zip: string
  }
}

interface OrderState {
  list: Order[]
}

const initialState: OrderState = {
  list: [],
}

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrder(state, action: PayloadAction<Omit<Order, 'id'>>) {
      state.list.push({
        id: uuid(),
        ...action.payload,
      })
    },
  },
})

export const { createOrder } = orderSlice.actions
export default orderSlice.reducer
