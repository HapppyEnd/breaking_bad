'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './index.module.css';

function Paginations(
  { limit, count, page: initialPage }:
  { limit: number, count: number, page: number }) {
    
    const [active, setActive] = useState(initialPage || 1);
    const [pag, setPag] = useState<(number | string)[]>([])
    const totalPages = Math.ceil(count / limit);
  
  useEffect(() => {
    setActive(initialPage);
    generatePaginationNumbers()
  }, [initialPage]);
  
  
  const handlePageChange = (newPage: number) => {
    if (typeof newPage === 'number') {
      setActive(newPage);
      generatePaginationNumbers();
    }
  };
  
  const generatePaginationNumbers = () => {   
    const paginationItems: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(i);
      }
    } else {
      const numberActive = Number(active)
      const startPage = Math.max(1, numberActive - 2);
      const endPage = Math.min(totalPages, numberActive + 2);
 
      if (startPage > 1) {
        paginationItems.push(1);
        if (startPage > 2) {
          paginationItems.push('...');
        }
      }
      
      console.log('endPage', endPage)
      for (let i = startPage; i <= endPage; i++) {
        paginationItems.push(i);
      }
      
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          paginationItems.push('...');
        }
        paginationItems.push(totalPages);
      }
    }
    setPag(paginationItems)
  };
  
  
  return (
    <Container>
      <Row>
        <Col>
          <div className='w-fit mx-auto'>
            {pag.map((item, index) => (
              typeof item === 'number' ? (
                <Link
                key={index}
                href={
                  `/shop?limit=${limit}&offset=${(item - 1) * limit}&page=${item}`}
                  passHref
                  >
                  <span
                    className={item == active ? styles.act : styles.button}
                    onClick={() => handlePageChange(item)
                    }>
                    {item}
                  </span>
                </Link>
              ) : (
                <span key={index} className={styles.button}>
                  {item}
                </span>
              )
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Paginations;