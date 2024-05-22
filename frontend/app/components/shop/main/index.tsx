"use client";
import { Container, Row, Col } from "react-bootstrap";
import Category from "@/app/components/categories";
import Sorted from "@/app/components/sorted";
import ShopCard from "@/app/components/shop/card";
import { useRouter } from "next/navigation";

export default function MainShop(props: any) {
    const router = useRouter()
    const {products} = props
    return (
        <Container className="pt-32">
            <Row className="min-h-screen">
                <Col md={4} lg={3}>
                    <Category state={0}/>
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
                        {products?.results.map((card: Card) => (
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
