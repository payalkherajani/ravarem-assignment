import { Fragment, useState } from "react";
import type { Product } from "../../features/products/types";
import { useAppDispatch, useAppSelector } from "../../app/reduxHooks";
import { selectFilteredProducts } from "../../features/products/productSelector";
import ProductCard from "../ProductList/ProductCard";
import ProductDetailsModal from "../ProductList/ProductDetails";
import SendConnectModal from "./SendConnectModal";
import { Col, Modal } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { createOrder } from "../../features/orders/OrderSlice";

function SendProductPage() {

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [detailsOpen, setDetailsOpen] = useState(false)
    const [connectOpen, setConnectOpen] = useState(false)

    const dispatch = useAppDispatch()

    const products = useAppSelector(selectFilteredProducts)

    const handleConfirm = (values: any) => {
        if (!selectedProduct) return

        dispatch(
            createOrder({
                productId: selectedProduct.id,
                productName: selectedProduct.name,
                price: selectedProduct.price,

                recipientEmail: values.email,
                recipientName: values.name,
                recipientCompany: values.company,

                address: {
                    line1: values.address1,
                    line2: values.address2,
                    country: values.country,
                    city: values.city,
                    state: values.state,
                    zip: values.zip,
                },
            })
        )

        setConnectOpen(false)
        setSelectedProduct(null)

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
                        Order Sent Successfully
                    </h2>

                    <p style={{ fontSize: 16, color: '#595959' }}>
                        Your order has been successfully created
                    </p>
                </div>
            ),
        })
    }

    return (
        <>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                {products && (
                    products.map((product) => {
                        return (
                            <Col xs={24} sm={12} md={8} lg={6} key={product.id} >
                                <ProductCard product={product} setConnectOpen={setConnectOpen} setDetailsOpen={setDetailsOpen} setSelectedProduct={setSelectedProduct} />
                            </Col>
                        )
                    })
                )}
            </div>

            {
                selectedProduct && (
                    <ProductDetailsModal
                        open={detailsOpen}
                        product={selectedProduct!}
                        onClose={() => setDetailsOpen(false)}
                        onSend={() => {
                            setDetailsOpen(false)
                            setConnectOpen(true)
                        }}
                    />
                )
            }

            {
                connectOpen && selectedProduct && (
                    <SendConnectModal open={connectOpen} product={selectedProduct} onBack={() => {
                        setConnectOpen(false)
                        setDetailsOpen(true)
                    }} onConfirm={handleConfirm} />
                )
            }

        </>

    );
}

export default SendProductPage;

function uuid() {
    throw new Error("Function not implemented.");
}
