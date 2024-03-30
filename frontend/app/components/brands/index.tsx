import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css";

export default function Brands() {
    return (
        <section id={ styles.brands }>
            <Container>
                <Row>
                    <Col id={ styles.quote } xs={12} md={5} lg={4} className="my-5 text-center">
                        Стоит только поверить, что вы можете – и вы уже 
                        на полпути к цели.
                        Вторые полпути это выбор правильной химии.
                    </Col>
                    <Col className="my-5">
                        <Row>
                            <Col className="h4 text-center">
                                Мы пердалагем химию брэндов:
                            </Col>
                        </Row>
                        <Row className="text-center pt-20">
                            <Col xs={6}>
                                <h3>
                                    <b>Grass</b>
                                </h3>
                            </Col>
                            <Col xs={6}>
                                <h3>
                                    <b>Prosept</b>
                                </h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}