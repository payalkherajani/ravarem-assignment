export type ProductStatus = 'active' | 'inactive'

export interface Product {
  id: string
  name: string
  description: string
  category: string
  price: number
  status: ProductStatus
  image: string
  vendor: string
}