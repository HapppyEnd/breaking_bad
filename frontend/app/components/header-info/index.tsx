import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css"
import RedirectToShop from "./button";

export default function HeaderInfo() {
    return (
        <Container className="mt-72 md:mt-96">
            <Row>
                <Col>
                    <span className="h1" id={styles.headerH1}>
                        Профессиональная химия для уборки
                    </span>
                </Col>
            </Row>
            <Row>
                <Col className="pt-8">
                    <span id={styles.headerSale}>
                        При заказе от 3000р. скидка 20%. Закажи сейчас
                    </span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RedirectToShop />
                </Col>
            </Row>
        </Container>
    )
}