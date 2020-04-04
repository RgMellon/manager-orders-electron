import React from 'react';
import { useDispatch } from 'react-redux';

import { Form } from '@unform/web';
import Input from '../../Components/Input';

import { Content } from './styles';

import { sigInRequest } from '../../store/modules/auth/actions';

export default function SigIn() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { email, password } = data;
    dispatch(sigInRequest(email, password));
  }

  return (
    <Content>
      <img
        src="https://www2.uaufi.com/wp-content/uploads/2018/06/logo-site2.png"
        alt=""
      />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Fazer login</button>
      </Form>
    </Content>
  );
}
