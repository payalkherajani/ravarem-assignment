import { Button, Card } from "antd";
import type { Product } from "../../features/products/types";
import { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import { Typography } from 'antd'

const { Text, Title } = Typography

interface Props {
    product: Product
    setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>
    setConnectOpen: React.Dispatch<React.SetStateAction<boolean>>
    setDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function ProductCard({ product, setConnectOpen, setSelectedProduct, setDetailsOpen }: Props) {

    const [hovered, setHovered] = useState(false)
    return (
        <Card
            hoverable
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            styles={{
                body: { padding: 0 },
            }}
            style={{
                borderRadius: 16,
                overflow: 'hidden',

            }}
            className="product-card"
        >
            <div
                style={{
                    height: 200,
                    background: '#D9F0D3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ maxWidth: '85%', maxHeight: '85%' }}
                />
            </div>

            <div style={{ padding: 16 }}>
                <Title level={5} style={{ marginBottom: 4 }}>
                    {product.name}
                </Title>

                <Text strong style={{ color: '#3BA000', fontSize: 18 }}>
                    ${product.price}
                </Text>

                <div style={{ marginTop: 12 }}>
                    <Text type="secondary">Vendor</Text>
                    <div style={{ fontWeight: 500 }}>{product.vendor}</div>
                </div>

                {hovered && (
                    <Button
                        block
                        icon={<SendOutlined />}
                        className="send-btn"
                        style={{ marginTop: 16 }}
                        onClick={() => {
                            setSelectedProduct(product)
                            setDetailsOpen(true)
                        }}
                    >
                        Send Item
                    </Button>
                )}
            </div>

        </Card>

    );
}

export default ProductCard;