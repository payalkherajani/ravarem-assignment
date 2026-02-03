import {
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
  Row,
  Col,
  Card,
  Upload,
  Button,
} from 'antd'
import { CheckCircleFilled, InboxOutlined } from '@ant-design/icons'
import { useAppDispatch } from '../../app/reduxHooks'
import { addProduct } from '../../features/products/productSlice'
import type { Product } from '../../features/products/types'
import { v4 as uuid } from 'uuid'

interface Props {
  open: boolean
  onClose: () => void
}

const { Dragger } = Upload

const AddProductModal = ({ open, onClose }: Props) => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  const onSubmit = (values: any) => {
    const newProduct: Product = {
      id: uuid().slice(0, 6),
      name: values.name,
      description: values.description,
      category: values.category,
      price: values.price,
      status: 'active',
      image: 'https://picsum.photos/200',
      vendor: 'Birdbox',
    }

    dispatch(addProduct(newProduct))

    Modal.success({
      centered: true,
      icon: null, 
      footer: null, 
      width: 600,
      closable: true,
      content: (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <CheckCircleFilled
          style={{
            fontSize: 96,
            color: '#52c41a',
            marginBottom: 24,
          }}
        />

        <h2 style={{ marginBottom: 8 }}>
          Product added Successfully
        </h2>

        <p style={{ fontSize: 16, color: '#595959' }}>
          Your request has been completed
        </p>
      </div>
    ),
    })

    form.resetFields()
    onClose()
  }

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={1200}
      title="Add Product"
    >
      <p style={{ marginBottom: 24 }}>
        Provide product details, images, and pricing to make your product available on the platform
      </p>

      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
      >
        <Row gutter={24}>
          <Col span={14}>
            <Card title="General Information">
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Product Name" />
              </Form.Item>

              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true }]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Add Description..."
                />
              </Form.Item>

              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select"
                  options={[
                    { value: 'electronics', label: 'Electronics' },
                    { value: 'fashion', label: 'Fashion' },
                  ]}
                />
              </Form.Item>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Processing Time"
                    name="processingTime"
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Enter Time" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true }]}
                  >
                    <InputNumber
                      style={{ width: '100%' }}
                      min={0}
                      placeholder="$ Enter Price"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={10}>
            <Card title="Product Media">
              <Form.Item
                label="Product Photos"
                required
              >
                <Dragger
                  multiple={false}
                  beforeUpload={() => false}
                  style={{ padding: 24 }}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p>
                    Drop your images, or{' '}
                    <span style={{ color: '#8b5cf6' }}>
                      Click to Browse
                    </span>
                  </p>
                  <p style={{ color: '#888' }}>
                    1600 × 1200 (4:3) recommended, up to 10MB
                  </p>
                </Dragger>
              </Form.Item>
            </Card>
          </Col>
        </Row>

        <Row justify="end" style={{ marginTop: 24 }}>
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button type="primary" onClick={() => form.submit()}>
            Add Product
          </Button>
        </Row>
      </Form>
    </Modal>
  )
}

export default AddProductModal
