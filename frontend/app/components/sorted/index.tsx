import Dropdown from 'react-bootstrap/Dropdown';
import styles from "./index.module.css";
import { useState } from 'react';

export default function Sorted() {
    const lst = [
        {
            id: 1,
            name: "featured",
            title: "Рекомендуемые",
        },
        {
            id: 2,
            name: "lowAZ",
            title: "от А до Я",
        },
        {
            id: 3,
            name: "highAZ",
            title: "от Я до А",
        },
        {
            id:4,
            name: "lowPrice",
            title: "Цена по возрастанию",
        },
        {
            id: 5,
            name: "highPrice",
            title: "Цена по убыванию",
        },
    ];
    const [sortedBy, setSortedBy] = useState("Рекомендуемые");
    return (
        <Dropdown className="w-1/2">
            <Dropdown.Toggle variant="success" id={styles.sorted}>
                {sortedBy}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                { lst.map((sorted) => (
                    <Dropdown.Item 
                        key={sorted.id} 
                        onClick={_ => setSortedBy(sorted.title)}
                    >
                        { sorted.title }
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}
