"use client";
import { Col, Container, Row, Image } from "react-bootstrap";
import styles from "./page.module.css";
import AddBacket from "@/app/components/add-backet";
import getAllProducts from "@/app/action/get-products";

export default async function CardId(props: any) {
    const product = await getAllProducts('products', props.params.id, { params: {}, searchParams: {}})
    return (
        <Container fluid className="pt-24 min-h-screen">
            <Row>
                <Col md id={styles.imgCard}>
                    <Image
                        src={product?.image}
                        className="h-full m-auto" />
                </Col>
                <Col className="shadow-xl p-4">
                    <Row>
                        <span className="font-semibold text-6xl py-12">
                            {product?.title}
                        </span>
                    </Row>
                    <Row>
                        <ul>
                            {product?.advantages.map(
                                    (advantage: Array<string>, index: number) => (
                                <li key={index} id={styles.liContent}>
                                    {advantage}
                                </li>

                            ))}
                        </ul>
                    </Row>
                    <Row>
                        <span className="font-semibold text-2xl py-12">
                            Цена: {Math.ceil(product?.price)} р.
                        </span>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Container fluid>
                    <Row className="py-12">
                        <Col md={8} className="m-auto">
                            <span className="font-semibold text-xl">
                                {product?.description}
                            </span>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <AddBacket>
                {product}
            </AddBacket>
        </Container>
    );
}