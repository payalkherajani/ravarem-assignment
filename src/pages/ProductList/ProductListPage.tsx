import { Row, Col, Typography, Select } from 'antd'
import ProductFilters from './ProductFilters'
import ProductTable from './ProductTable'

const { Title } = Typography

const ProductListPage = () => {
  return (
    <>
      <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
        <Title level={3} style={{ margin: 0 }}>
          Product List
        </Title>

        <Select
          defaultValue="all"
          style={{ width: 180 }}
          options={[
            { value: 'all', label: 'All Categories' },
            { value: 'electronics', label: 'Electronics' },
            { value: 'fashion', label: 'Fashion' },
          ]}
        />
      </Row>

      <ProductFilters />
      <ProductTable />
    </>
  )
}

export default ProductListPage
