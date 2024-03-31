"use client";
import { Button } from "react-bootstrap";
import styles from "../index.module.css"
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function RedirectToShop() {
    const router = useRouter()
    return (
        <Button
            onClick={_ => router.push("/shop")}
            id={styles.buttonRedirectShop}
            className="pt-3">
            Купить сейчас
        </Button>
    )
}

export function GoToPage(props: {url: string, children: ReactNode}) {
    const router = useRouter()
    return (
        <>
            <span onClick={() => router.push(props.url)}>
                {props.children}
            </span>
        </>
    )
}