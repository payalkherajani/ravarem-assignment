import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { Product } from './types'

interface ProductState {
  list: Product[],
}

const initialState: ProductState = {
  list: [
  {
    id: 'P-001',
    name: 'Running Shoes',
    description: 'Lightweight shoes for daily running',
    category: 'Footwear',
    price: 3499,
    status: 'active',
    image: 'https://picsum.photos/200',
    vendor: 'Nike',
  },
  {
    id: 'P-002',
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones',
    category: 'Electronics',
    price: 5999,
    status: 'active',
    image: 'https://picsum.photos/200',
    vendor: 'Sony',
  },
  {
    id: 'P-003',
    name: 'Badminton Shoes',
    description: 'Comfortable shoes for indoor sports',
    category: 'Footwear',
    price: 2999,
    status: 'inactive',
    image: 'https://picsum.photos/200',
    vendor: 'Nike',
  },
  {
    id: 'P-004',
    name: 'Smart Watch',
    description: 'Fitness tracking smart watch',
    category: 'Wearables',
    price: 7999,
    status: 'active',
    image: 'https://picsum.photos/200',
    vendor: 'Samsung',
  },
  {
    id: 'P-005',
    name: 'Laptop Backpack',
    description: 'Water-resistant backpack for laptops',
    category: 'Accessories',
    price: 1999,
    status: 'active',
    image: 'https://picsum.photos/200',
    vendor: 'American Tourister',
  },
  {
    id: 'P-006',
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with deep bass',
    category: 'Electronics',
    price: 2499,
    status: 'inactive',
    image: 'https://picsum.photos/200',
    vendor: 'JBL',
  },
  {
    id: 'P-007',
    name: 'Yoga Mat',
    description: 'Non-slip yoga and exercise mat',
    category: 'Fitness',
    price: 999,
    status: 'active',
    image: 'https://picsum.photos/200',
    vendor: 'Decathlon',
  },
  {
    id: 'P-008',
    name: 'Formal Shirt',
    description: 'Slim fit cotton formal shirt',
    category: 'Clothing',
    price: 1499,
    status: 'active',
    image: 'https://picsum.photos/200',
    vendor: 'Arrow',
  },
  {
    id: 'P-009',
    name: 'Gaming Mouse',
    description: 'High precision RGB gaming mouse',
    category: 'Electronics',
    price: 1799,
    status: 'inactive',
    image: 'https://picsum.photos/200',
    vendor: 'Logitech',
  },
  {
    id: 'P-010',
    name: 'Water Bottle',
    description: 'Insulated stainless steel bottle',
    category: 'Accessories',
    price: 899,
    status: 'active',
    image: 'https://picsum.photos/200',
    vendor: 'Milton',
  },
]
,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.list.push(action.payload)
    },
    setProducts(state, action: PayloadAction<any[]>) {
      state.list = action.payload
    },
  },
})

export const { addProduct, setProducts } = productSlice.actions
export default productSlice.reducer
