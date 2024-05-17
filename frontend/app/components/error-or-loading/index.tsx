import Link from "next/link";
import { Container } from "react-bootstrap";

export default function ErrorOrLoading(
    props: { message: string, showLink?: boolean }) {
    return (
        <Container className='py-48 text-center'>
            <div>
                <h3>
                    {props.message}
                </h3>
            </div>
            <div>
                {props.showLink && <Link href='/'>На главную</Link>}
            </div>
        </Container>
    )
}