"use client";
import { Container, Row, Col } from "react-bootstrap";
import Category from "../components/categories";
import Sorted from "../components/sorted";
// import { products } from "../db";
import ShopCard from "../components/shop/card";
import { useRouter } from "next/navigation";
import getAllProducts from "../action/get-products";

export default async function Shop() {
    const router = useRouter()
    const products = await getAllProducts()
    return (
        <Container className="pt-32">
            <Row className="min-h-screen">
                <Col md={4} lg={3}>
                    <Category />
                </Col>
                <Col md={8} lg={9} className="ps-5 pt-3">
                    <Row>
                        <Col xs="auto" md="auto" className="px-0 pt-1.5">
                            Сортировать по
                        </Col>
                        <Col xs="auto" md="auto" className="px-0">
                            <Sorted />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        {products.map((card) => (
                            <Col xs={12} md={8} lg={6} xl={4} 
                            key={card.id} className="m-auto pb-12"
                            onClick={() => router.push(`/shop/${card.id}`)}>
                                <ShopCard>{card}</ShopCard>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
