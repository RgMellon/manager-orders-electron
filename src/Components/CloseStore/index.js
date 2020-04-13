import React from 'react';

import { Container } from './styles';

import close from './close.svg';

export default function CloseStore() {
  return (
    <Container>
      <img src={close} alt="img-empty" />
      <h1> Sua loja está fechada </h1>
      <p> Para receber pedidos, clique em abrir loja, no botão menu acima !</p>
    </Container>
  );
}
