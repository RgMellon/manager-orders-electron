import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form } from '@unform/web';
import Input from '../../Components/Input';
import { toast } from 'react-toastify';
import { Content } from './styles';

import { sigInRequest } from '../../store/modules/auth/actions';

export default function SigIn() {
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  function handleSubmit(data) {
    const { email, password } = data;
    setLoad(true);

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
        <Input
          name="email"
          value="adm@uaufi.com"
          type="email"
          placeholder="Seu email"
        />
        <Input
          name="password"
          value="Uaufiadm2018"
          type="password"
          placeholder="Sua senha"
        />

        {load ? (
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
