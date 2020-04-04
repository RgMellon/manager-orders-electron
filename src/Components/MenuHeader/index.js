import React from 'react';

import {
  Container,
  RightSide,
  LeftSide,
  MessageIsOpen,
  ButtonOpen,
} from './styles';

import { FaExclamationTriangle } from 'react-icons/fa';

export default function MenuHeader() {
  return (
    <Container>
      <RightSide>
        <img
          src="https://i.pinimg.com/originals/64/0b/58/640b58b1ec865b11313bf8f0a2080cad.png"
          alt="icon"
        />

        <p> Santa Paão</p>
      </RightSide>

      <LeftSide>
        <ButtonOpen>Abrir loja</ButtonOpen>
        <MessageIsOpen>
          <FaExclamationTriangle color="#fff" />
          <p> Loja está fechada </p>
        </MessageIsOpen>
      </LeftSide>
    </Container>
  );
}
