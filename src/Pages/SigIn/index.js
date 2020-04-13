import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '@unform/web';
import Input from '../../Components/Input';
import { toast } from 'react-toastify';
import { Content } from './styles';

import { sigInRequest } from '../../store/modules/auth/actions';

export default function SigIn() {
  const { loading } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { email, password } = data;

    if (!email || !password) {
      toast.error('Entre com um usuario e uma senha');
      return;
    }

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

        {loading ? (
          <button disabled type="submit">
            Carregando...
          </button>
        ) : (
          <button type="submit">Fazer login</button>
        )}
      </Form>
    </Content>
  );
}
