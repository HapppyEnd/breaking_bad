'use client';
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import getAllProducts from "@/app/action/get-products";
import ErrorOrLoading from "../error-or-loading";
import Link from "next/link";
import createAddressBarOptions from "@/app/action/creates-address-bar-options";

interface Category {
    results: {
        id: number;
        title: string
    }[];
}

export default function Category(props: {state: number}) {
    const [categories, setCategories] = useState<Category | null>(null)
    const [loading, setLoading] = useState(false)

    const fetchCategories = async () => {
        setLoading(true)
        const response = await getAllProducts('category', '', undefined)
        setCategories(response)
        setLoading(false)
    }

    
    useEffect(() => {
        fetchCategories();
    }, []);

    if (loading) {
        return <ErrorOrLoading message={'Loading....'} />
    }

    if (!categories) {
        return <ErrorOrLoading message={'Error....'} showLink={true} />
    }

    return (
        <Container className="bg-emerald-100 p-3">
            <Row>
                <h2 className="text-xl font-black tracking-widest text-left ps-5">
                    Категории
                </h2>
            </Row>
            <Row>
                <Col>
                    {categories?.results.map((category: { id: number, title: string }) => (
                        <Row
                            key={category.id}
                            className="px-16 py-1 text-base font-medium tracking-widest">
                            <Link href={`shop/?${createAddressBarOptions('category')}category=${category.id}`}>
                                {category.title}
                            </Link>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}