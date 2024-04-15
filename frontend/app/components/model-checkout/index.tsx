"use client";
import createOrder from '@/app/action/create-order';
import { setState } from '@/lib/features/backetSlice';
import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';

export default function ModalCheckout(props: any) {
  const {set, order, ...other} = props
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [nameHelp, setNameHelp] = useState(true)
  const [phoneHelp, setPhoneHelp] = useState(true)
  const dispatch = useDispatch()

  const checkout = () => {
    const error = createOrder(name, phone, order)
    console.log(error)
    if (error) {
      error.then(e => {
        if (e.phone_number) {
          setPhoneHelp(false)
        }
        if (e.name) {
          setNameHelp(false)
          console.log('name')
        }
      })
    } else {
      props.onHide()
      setPhone("")
      setName("")
      localStorage.clear()
      dispatch(setState(0))
      props.set([])
    }
  }

  return (
    <>
      <Modal
        {...other}
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
          <Form>
          <Form.Label htmlFor="inputPassword5">
            Телефон
            <span className='text-red-900'>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
          <Form.Text id="passwordHelpBlock" muted>
            {phoneHelp 
              ? 'Введите номер телефона' 
              : <span className='text-red-600'>
                  Введен не корректнный номер
                </span>} 
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
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Text id="passwordHelpBlock" muted>
            {phoneHelp 
              ? 'Введите имя' 
              : <span className='text-red-600'>
                  Введено не корректнное имя
                </span>
            } 
          </Form.Text>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={checkout}>Оформить</Button>
      </Modal.Footer>
    </Modal >
    </>
  );
}
