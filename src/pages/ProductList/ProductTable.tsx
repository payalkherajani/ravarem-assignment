import { Table, Tag, Avatar, Dropdown, Pagination, type PaginationProps } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import { useAppSelector } from '../../app/reduxHooks'
import type { ColumnsType } from 'antd/es/table'
import { selectFilteredProducts } from '../../features/products/productSelector'
import { useMemo, useState } from 'react'

const DEFAULT_PAGE_SIZE = 8
const ProductTable = () => {
  const products = useAppSelector(selectFilteredProducts)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)

  const columns: ColumnsType<any> = [
    {
      dataIndex: 'name',
      render: (_, record) => (
        <div style={{ display: 'flex', gap: 12 }}>
          <Avatar shape="square" size={48} src={record.image} />
          <div>
            <div style={{ fontWeight: 500 }}>{record.name}</div>
            <div style={{ color: 'green' }}>${record.price}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Product ID',
      dataIndex: 'id',
      width: 150,
    },
    {
      dataIndex: 'status',
      render: (status) => (
        <Tag color="green">{status}</Tag>
      ),
      width: 120,
    },
    {
      render: () => (
        <Dropdown
          menu={{
            items: [
              { key: 'edit', label: 'Edit' },
              { key: 'delete', label: 'Delete' },
            ],
          }}
        >
          <MoreOutlined style={{ cursor: 'pointer' }} />
        </Dropdown>
      ),
      width: 50,
    },
  ]

  /* 🔹 Slice products for current page */
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    return products.slice(start, end)
  }, [products, currentPage, pageSize])

  return (
    <>
      <Table
        columns={columns}
        dataSource={paginatedProducts}
        rowKey="id"
        pagination={false}
      />

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 16,
        }}
      >
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={products.length}
          showSizeChanger
          pageSizeOptions={[8, 16, 24]}
          onChange={(page, size) => {
            setCurrentPage(page)
            setPageSize(size)
          }}
        />

        <div>Total ({products.length}) Products</div>
      </div>
    </>
  )
}

export default ProductTable
