import {
  Tabs,
  Input,
  Button,
  Space,
  Dropdown,
  Badge,
  type MenuProps,
} from 'antd'
import {
  FilterOutlined,
  PlusOutlined,
  SortAscendingOutlined,
} from '@ant-design/icons'
import { useAppDispatch } from '../../app/reduxHooks'
import { setSearch, setSortBy, setStatus, type StatusFilter } from '../../features/filters/filterSlice'
import { useState } from 'react'
import AddProductModal from './AddProductModal'
import { useSelector } from 'react-redux'
import { selectFilteredProducts } from '../../features/products/productSelector'

const ProductFilters = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false) 
    const sortMenu: MenuProps['items'] = [
    {
      key: 'name_asc',
      label: 'Name (A → Z)',
      onClick: () => dispatch(setSortBy('name_asc')),
    },
    {
      key: 'name_desc',
      label: 'Name (Z → A)',
      onClick: () => dispatch(setSortBy('name_desc')),
    },
    {
      key: 'price_asc',
      label: 'Price (Low → High)',
      onClick: () => dispatch(setSortBy('price_asc')),
    },
    {
      key: 'price_desc',
      label: 'Price (High → Low)',
      onClick: () => dispatch(setSortBy('price_desc')),
    },
  ]
  const products = useSelector(selectFilteredProducts)

  const getFilteredProducts = (status: 'active' | 'inactive') => {
    return products.filter((p) => p.status === status).length
  }
  

  return (
    <>
      {/* Status Tabs */}
      <Tabs
        defaultActiveKey="All"
        onChange={(key) => dispatch(setStatus(key as StatusFilter))}
        type="card"
        items={[
          { key: 'all', label: <Badge>All ({products.length})</Badge> },
          { key: 'active', label: <Badge>Active ({getFilteredProducts('active')})</Badge> },
          { key: 'inactive', label: <Badge>Inactive ({getFilteredProducts('inactive')})</Badge> },
        ]}
      />

      {/* Action Bar */}
      <Space
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 16,
          flexWrap: 'wrap'
        }}
      >
        <Space>
          <Input.Search
            placeholder="Search Product"
            style={{ width: 260 }}
            allowClear
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />

          <Button icon={<FilterOutlined />} />

          <Dropdown
            menu={{
              items: [{ key: '1', label: 'Delete Selected' }],
            }}
          >
            <Button>Bulk Action</Button>
          </Dropdown>
        </Space>

        <Space>
           <Dropdown menu={{ items: sortMenu }}>
            <Button icon={<SortAscendingOutlined />}>
              Sort
            </Button>
          </Dropdown>
          <Button>Support</Button>
          <Button type="primary" icon={<PlusOutlined />}  onClick={() => setOpen(true)}>
            Add Product
          </Button>
        </Space>
      </Space>
     <AddProductModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default ProductFilters
