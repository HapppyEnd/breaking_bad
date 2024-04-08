"use client";
import { useEffect, useState } from "react";
import { Col, Container, Row, Table, Image, Button } from "react-bootstrap";
import totalPrice, { deleteProduct } from "@/app/action/total-price";
import styles from "@/app/components/header-info/index.module.css";
import Link from "next/link";
import style from "./page.module.css";
import ModalCheckout from "../components/model-checkout";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "@/lib/features/backetSlice";

export default function ShoppingCart() {
    const [order, setOrder] = useState<[Order] | []>([])
    const [modalShow, setModalShow] = useState(false)

    const count = useSelector((state: any) => state.backet)
    const dispatch = useDispatch()
    console.log(count)

    const deleteFromBacket = (id: number) => {
        setOrder(deleteProduct(id))
        dispatch(setState(order.length - 1))
        console.log("del")
    }

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            setOrder(JSON.parse(localStorage.getItem("products")!))
        }
    }, [])

    return (
        <Container className="pt-24 min-h-f-min">
            <Row className="align-middle text-center mt-3">
                <Col>
                    <h3>Shopping Cart</h3>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Table striped hover className="align-middle text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Товар</th>
                            <th>Кол-во</th>
                            <th>Цена</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {order?.map(({ id, obj, count }) => (
                            <tr key={id}>
                                <td className="min-w-40vw"><Image src={obj.image} width={"40vw"} className="min-w-12" /></td>
                                <td className="text-start">
                                    <Link href={`/shop/${id}`} id={style.product_title}>
                                        {obj.title}
                                    </Link>
                                </td>
                                <td>{count}</td>
                                <td>{obj.price * count}</td>
                                <td>
                                    <button
                                        id={style.btn_delete}
                                        onClick={
                                            () => deleteFromBacket(id)}>
                                        Удалить
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
            <Row className="justify-end mt-5">
                <Col xs={6} md={5} lg={4} xl={3}>
                    <div><h2>Итого: {totalPrice(order)}</h2></div>
                    <div></div>
                    <Row className="justify-center mt-1">
                        <Col xs={10} md={8} lg={6}>
                            <Button
                                onClick={_ => setModalShow(true)}
                                id={styles.buttonRedirectShop}
                                className="mt-1 me-0">
                                Заказать
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ModalCheckout show={modalShow} order={order} set={setOrder} onHide={() => setModalShow(false)} />
        </Container>
    )
}