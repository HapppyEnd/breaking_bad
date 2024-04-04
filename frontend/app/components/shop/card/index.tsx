'use client';
import { Card } from "react-bootstrap";
import styles from "./index.module.css";

export default function ShopCard(props: any) {
    return (
        <Card id={ styles.card }>
            <Card.Img variant="top" src={props.children.image} 
                width={180} height={100}/>
            <Card.Body>
                <Card.Title>{ props.children.title }</Card.Title>
                <Card.Text className="text-truncate"> 
                    { props.children.description}
                </Card.Text>
                <Card.Text>
                    Цена: {props.children.price}р.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}