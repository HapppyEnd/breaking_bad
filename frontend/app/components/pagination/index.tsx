'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './index.module.css';

function Paginations(props:any) {
  const limit = props.limit
  const [active, setActive] = useState(1)

  useEffect(() => {
    setActive(props.page)
  }, [])

  const pagesCount = Math.ceil(props.count / limit)
  const pages = [...Array(pagesCount)].map(function (item, index) {
    return index + 1
  })

  return (
    <Container>
      <Row>
        <Col>
        <div className='w-fit mx-auto'>
          {pages.map((index) => (
            <Link 
              key={index}
              href={`/shop?limit=${
                limit}&offset=${
                (index - 1) * limit}&page=${
                index}`}
              onClick={() => setActive(index)}>
              <span className={styles.button} id={index == active ? styles.act: ''}>{index}</span>
            </Link>
          ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Paginations;