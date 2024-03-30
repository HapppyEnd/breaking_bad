import { Col, Container, Row } from "react-bootstrap";
import { category } from "@/app/db";

export default function Category() {
    return (
        <Container className="bg-emerald-100 p-3">
            <Row>
                <span className="text-xl font-black tracking-widest text-left ps-5">
                    Категории
                </span>
            </Row>
            <Row>
                <Col>
                    {category.map(e => (
                        <Row key={e} className="px-16 py-1 text-base font-medium tracking-widest">
                            {e}
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}