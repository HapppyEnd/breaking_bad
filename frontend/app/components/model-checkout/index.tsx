"use client";
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalCheckout(props: any) {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Оформление заказа
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='m-auto'>
          <h3>Заполните поля</h3>
          <Form.Label htmlFor="inputPassword5">
            Телефон
            <span className='text-red-900'>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Введите номер телефона
          </Form.Text>
          <div></div>
          <Form.Label htmlFor="inputPassword5" className='mt-1'>
            Имя
            <span className='text-red-900'>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Введите Ваше имя
          </Form.Text>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Оформить</Button>
      </Modal.Footer>
    </Modal >
    </>
  );
}
