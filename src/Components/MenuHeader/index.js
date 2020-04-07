import React from 'react';

import {
  Container,
  RightSide,
  LeftSide,
  MessageIsOpen,
  ButtonOpen,
} from './styles';

import { useSelector } from 'react-redux';

import { FaExclamationTriangle } from 'react-icons/fa';

export default function MenuHeader() {
  const { name, logo } = useSelector(state => state.user.profile);
  return (
    <Container>
      <RightSide>
        <img src={logo} alt="icon" />

        <p>{name}</p>
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
