import Dropdown from 'react-bootstrap/Dropdown';
import styles from "./index.module.css";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Sorted() {
    const lst = [
        {
            id: 1,
            name: "featured",
            title: "Рекомендуемые",
            url: "",
        },
        {
            id: 2,
            name: "lowAZ",
            title: "от А до Я",
            url: "ordering=title",
        },
        {
            id: 3,
            name: "highAZ",
            title: "от Я до А",
            url: "ordering=-title",
        },
        {
            id:4,
            name: "lowPrice",
            title: "Цена по возрастанию",
            url: "ordering=price",
        },
        {
            id: 5,
            name: "highPrice",
            title: "Цена по убыванию",
            url: "ordering=-price",
        },
    ];
    const [sortedBy, setSortedBy] = useState("Рекомендуемые");
    const router = useRouter()

    const handlerURL = (param: number) => {
        const sortingInfo = lst.find(e => e.id === param)
        setSortedBy(sortingInfo?.title || 'Рекомендуемые')
        router.push(`/shop?${sortingInfo?.url}`)
    }

    return (
        <Dropdown className="w-1/2">
            <Dropdown.Toggle variant="success" id={styles.sorted}>
                {sortedBy}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                { lst.map((sorted) => (
                    <Dropdown.Item 
                        key={sorted.id} 
                        onClick={_ => handlerURL(sorted.id)}
                    >
                        { sorted.title }
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}
