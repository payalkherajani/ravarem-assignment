import { Button, Modal, Card, Space, Typography } from 'antd'
import type { Product } from '../../features/products/types'

const { Title, Text, Paragraph } = Typography

interface Props {
  open: boolean
  product: Product
  onClose: () => void
  onSend: () => void
}

const ProductDetailsModal = ({ open, product, onClose, onSend }: Props) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={1000}
      closeIcon
    >
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <Title level={4} style={{ marginBottom: 4 }}>
          Item Details
        </Title>
        <Text type="secondary">
          Review product information, pricing, and specifications and other details below.
        </Text>
      </div>

      {/* Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 32 }}>
        {/* Left column */}
        <div>
          {/* Main Image */}
          <div
            style={{
              background: '#d9f0d0',
              borderRadius: 12,
              padding: 16,
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', borderRadius: 8 }}
            />
          </div>

          {/* Thumbnails */}
          <Space style={{ marginTop: 12 }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: 70,
                  height: 70,
                  background: '#d9f0d0',
                  borderRadius: 8,
                }}
              />
            ))}
          </Space>

          {/* Vendor */}
          <Card size="small" style={{ marginTop: 16 }}>
            <Text type="secondary">Vendor Name</Text>
            <div style={{ fontWeight: 500 }}>{product.vendor}</div>
          </Card>
        </div>

        {/* Right column */}
        <div>
          <Title level={4} style={{ marginBottom: 4 }}>
            {product.name}
          </Title>

          <Text style={{ color: '#3BA000', fontSize: 18, fontWeight: 600 }}>
            ${product.price}
          </Text>

          <Title level={5} style={{ marginTop: 16 }}>
            Description
          </Title>

          <Paragraph type="secondary">
            {product.description}
          </Paragraph>

          {/* Options */}
          <Card style={{ marginTop: 16 }}>
            <Title level={5}>Product Options Available</Title>

            <Text strong>Select Colors</Text>
            <Space style={{ marginTop: 8 }}>
              <Button>Green</Button>
              <Button>Yellow</Button>
              <Button type="primary" ghost>
                Red
              </Button>
            </Space>

            <div style={{ marginTop: 16 }}>
              <Text strong>Select Size</Text>
              <Space style={{ marginTop: 8 }}>
                <Button>US-7</Button>
                <Button type="primary" ghost>
                  US-8
                </Button>
                <Button>US-9</Button>
              </Space>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 12,
          marginTop: 32,
        }}
      >
        <Button onClick={onClose}>Back</Button>
        <Button type="primary" onClick={onSend}>
          Send Item
        </Button>
      </div>
    </Modal>
  )
}

export default ProductDetailsModal
