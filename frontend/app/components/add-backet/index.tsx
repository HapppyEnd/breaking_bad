"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css";


export default function AddBacket(props: any) {
    const saveToBucket = (e: Number) => {
        if (localStorage.getItem("products") == null) {
            localStorage.setItem("products", JSON.stringify([
                {
                    id: e,
                    obj: {
                        image: props.children.imageUrl,
                        title: props.children.title,
                        price: props.children.price,
                    },
                    count: 1
                },
            ]))
        }
        else {
            let a = JSON.parse(localStorage.getItem("products")!)
            console.log(a)
            const product = a.find((product: any) => product.id == e)
            if (product) {
                product["count"] += 1
            }
            else {
                a.push(
                    {
                        id: e,
                        obj: {
                            image: props.children.imageUrl,
                            title: props.children.title,
                            price: props.children.price,
                        },
                        count: 1
                    },
                )
            }
            localStorage.setItem("products", JSON.stringify(a))
        }
        console.log(localStorage.getItem("products"))
    }
    return (
        <Container fluid id={styles.add_to_backet}>
            <Row>
                <Col className="flex items-end">
                    <div id={styles.add_to_backet_price} className="pt-3">
                        <span className="text-nowrap min-w-48">Цена сегодня:&nbsp;&nbsp;</span>
                        <span className="line-through text-3xl text-slate-300">
                            {props.children.price}
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span className="text-3xl">
                            {props.children.price * 0.8}р.
                        </span>
                    </div>
                    <button
                        id={styles.add_button}
                        onClick={ _ => saveToBucket(props.children.id)}
                    >В КОРЗИНУ</button>
                </Col>
            </Row>
        </Container>
    );
}