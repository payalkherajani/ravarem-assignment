import { Routes, Route, Navigate } from 'react-router-dom'
import ProductListPage from '../pages/ProductList/ProductListPage'
import SendProductPage from '../pages/SendProduct/SendProductPage'
import AppLayout from '../components/layout/AppLayout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/orders" element={<SendProductPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes