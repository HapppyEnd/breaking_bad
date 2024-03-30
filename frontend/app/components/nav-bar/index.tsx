'use client';
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./index.module.css";

export default function NavBAr() {
    return (
        <Navbar bg="light" expand="sm" id={styles.navbar} className="shadow-md">
            <Container>
                <Nav className="me-auto">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/images/logo.png"
                            height="5"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="m-auto mt-1">
                        <Nav.Link href="/shop" className="m-auto">
                            <span className="font-bold tracking-wide leading-5">Магазин</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/shopping-cart">
                        <img
                            src="/images/navbar/shoping-bag.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top ms-3"
                            alt="React Bootstrap logo"
                        />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}