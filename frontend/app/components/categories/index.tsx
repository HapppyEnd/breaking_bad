'use client';
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import getAllProducts from "@/app/action/get-products";
import ErrorOrLoading from "../error-or-loading";
import Link from "next/link";
import { useRouter } from "next/router";

interface Category {
    results: {
        id: number;
        title: string
    } [];
}

export default function Category() {
    const [categories, setCategories] = useState<Category | null>(null)
    const [loading, setLoading] = useState(false)

    let searchParams = ''

    for (const [key, value] of Array.from(new URLSearchParams(window.location.search))) {
        if (key !== 'category') {
            searchParams += `${key}=${value}&`
        }
    }

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true)
            console.log('fetchCategories=')
            const response = await getAllProducts('categories', '', undefined)
            console.log('fetchCategories=', response)
            setCategories(response)
            setLoading(false)
        }
        fetchCategories();
    }, [searchParams]);

    if (loading) {
        return <ErrorOrLoading message={'Loading....'} />
    }

    if (!categories) {
        return <ErrorOrLoading message={'Error....'} showLink={true} />
    }

    return (
        <Container className="bg-emerald-100 p-3">
            <Row>
                <span className="text-xl font-black tracking-widest text-left ps-5">
                    Категории
                </span>
            </Row>
            <Row>
                <Col>
                    {categories?.results.map((category: { id: number, title: string }) => (
                        <Row
                            key={category.id}
                            className="px-16 py-1 text-base font-medium tracking-widest">
                            <Link href={`shop/?${searchParams}category=${category.id}`}>
                                {category.title}
                            </Link>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}