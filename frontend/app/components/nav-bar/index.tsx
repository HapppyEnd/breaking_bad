'use client';
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Badge } from "@nextui-org/badge";

export default function NavBAr() {
    const router = useRouter()
    const count = useSelector((state: any) => state.backet)
    // console.log(count.backet.backet)

    return (
        <Navbar bg="light" expand="sm" id={styles.navbar} className="shadow-md">
            <Container>
                <Nav className="me-auto">
                    <Link href="/">
                        <img
                            alt=""
                            src="/images/logo.png"
                            height="5"
                            className="d-inline-block align-top"
                        />{' '}
                    </Link>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="m-auto mt-1">
                        <Link href="/shop" className="m-auto no-underline font-bold text-black">
                            <span className="tracking-wide leading-5">Магазин</span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Badge content={count.backet} color="danger">
                        <Link href="/shopping-cart">
                            <img
                                src="/images/navbar/shoping-bag.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top ms-3"
                                alt="shoping bag icons"
                            />
                        </Link>
                    </Badge>
                </Nav>
            </Container>
        </Navbar>
    );
}