"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { setState } from "@/lib/features/backetSlice";
import { useState } from "react";

export default function AddBacket(props: any) {
    const dispatch = useDispatch()
    const saveToBucket = (e: Number) => {
        const orderProduct = {
            id: e,
            obj: {
                image: props.children.imageUrl,
                title: props.children.title,
                price: props.children.price,
            },
            count: 1
        }
        if (localStorage.getItem("products") == null) {
            localStorage.setItem("products", JSON.stringify([orderProduct]))
            dispatch(setState(1))
        }
        else {
            let a = JSON.parse(localStorage.getItem("products")!)
            const product = a.find((product: any) => product.id == e)
            if (product) {
                product["count"] += 1
            }
            else {
                a.push(orderProduct)
                dispatch(setState(a.length))
            }
            localStorage.setItem("products", JSON.stringify(a))
        }
    }
    return (
        <Container fluid id={styles.add_to_backet}>
            <Row>
                <Col className="flex items-end">
                    <div id={styles.add_to_backet_price} className="pt-3">
                        <span className="text-nowrap min-w-48">Цена сегодня:&nbsp;&nbsp;</span>
                        <span className="line-through text-3xl text-slate-300">
                            {Math.ceil(props.children.price)}
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span className="text-3xl">
                            {Math.ceil(props.children.price * 0.8)}р.
                        </span>
                    </div>
                    <button
                        id={styles.add_button}
                        onClick={_ => saveToBucket(props.children.id)}
                    >В КОРЗИНУ</button>
                </Col>
            </Row>
        </Container>
    );
}