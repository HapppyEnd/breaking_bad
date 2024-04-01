import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/header";
import ShopCard from "./components/shop/card";
import Brands from "./components/brands";
import { products } from "@/app/db";
import {GoToPage} from "./components/header-info/button";

export default async function Home() {
  return (
    <>
      <Header />
      <Container className="py-20">
        <div className="h2 w-72 m-auto text-center">Топ-3 товаров:</div>
        <Row className="mt-5">
          {products.map((card) => (
            <Col xs={12} md={8} lg={6} xl={4} key={card.id} className="m-auto pb-12">
              <GoToPage url={`/shop/${card.id}`}>
                <ShopCard className="text-truncate">{card}</ShopCard>
              </GoToPage>
            </Col>
          ))}
        </Row>
      </Container>
      <Brands />
    </>
  );
}
