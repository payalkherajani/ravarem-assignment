import { Button, Form, Input, Modal, Card, Typography, Row, Col } from 'antd'
import type { Product } from '../../features/products/types'

const { Title, Text } = Typography

interface Props {
  open: boolean
  product: Product
  onBack: () => void
  onConfirm: (values: any) => void
}

const SendConnectModal = ({ open, product, onBack, onConfirm }: Props) => {
  const [form] = Form.useForm()

  return (
    <Modal open={open} width={1000} footer={null} onCancel={onBack}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <Title level={4} style={{ marginBottom: 4 }}>
          Send Gift
        </Title>
        <Text type="secondary">
          Send a gift instantly to your recipient through filling out the details in the connect
        </Text>
      </div>

      <Form form={form} layout="vertical" onFinish={onConfirm}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 24 }}>
          {/* LEFT – Selected Item */}
          <Card title="Selected Item">
            <div
              style={{
                background: '#D9F0D0',
                borderRadius: 8,
                padding: 16,
                marginBottom: 12,
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', borderRadius: 6 }}
              />
            </div>

            <Text strong>{product.name}</Text>
            <div style={{ color: '#3BA000', fontWeight: 600 }}>
              ${product.price}
            </div>
          </Card>

          {/* RIGHT – Form */}
          <div>
            {/* Recipient Details */}
            <Card title="Recipient Details" style={{ marginBottom: 16 }}>
              <Form.Item
                label="Recipient Email"
                name="recipientEmail"
                rules={[{ required: true }, { type: 'email' }]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>

              <Form.Item
                label="Recipient Name"
                name="recipientName"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter Name" />
              </Form.Item>

              <Form.Item
                label="Recipient Company"
                name="recipientCompany"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter Company" />
              </Form.Item>
            </Card>

            {/* Address Details */}
            <Card title="Address Details">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Address Line 1"
                    name={['address', 'line1']}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Enter Address" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Address Line 2"
                    name={['address', 'line2']}
                  >
                    <Input placeholder="Enter Address" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Country"
                    name={['address', 'country']}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Country Name" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Zip Code"
                    name={['address', 'zip']}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Enter Code" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="City"
                    name={['address', 'city']}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="City Name" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="State"
                    name={['address', 'state']}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="State Name" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 24,
          }}
        >
          <Button onClick={onBack}>← Back</Button>
          <Button type="primary" onClick={() => form.submit()}>
            Confirm Order
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default SendConnectModal
