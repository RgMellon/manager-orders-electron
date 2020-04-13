import React, { useEffect, useState } from 'react';

import {
  Container,
  RightSide,
  LeftSide,
  MessageIsOpen,
  ButtonOpen,
} from './styles';

import { useSelector } from 'react-redux';

import { FaExclamationTriangle } from 'react-icons/fa';

import api from '../../services/api';

export default function MenuHeader() {
  const { name, logo } = useSelector(state => state.user.profile);
  const [isOnLine, setIsOnline] = useState(false);

  useEffect(() => {
    async function handleGetOnline() {
      const response = await api.get('/api/ward/store/online');

      const { online } = response.data;

      setIsOnline(online);
    }

    handleGetOnline();
  }, []);

  async function handleIsOnline() {
    const response = await api.put('/api/ward/store/online');

    const { online } = response.data;

    setIsOnline(online);
  }

  return (
    <Container>
      <RightSide>
        <img src={logo} alt="icon" />

        <p>{name}</p>
      </RightSide>

      <LeftSide>
        {!isOnLine ? (
          <ButtonOpen bkg="#d6d6d6" onClick={handleIsOnline}>
            Abrir loja
          </ButtonOpen>
        ) : (
          <ButtonOpen bkg="#fd3d35" onClick={handleIsOnline}>
            Fechar loja
          </ButtonOpen>
        )}

        <MessageIsOpen bkg={isOnLine ? '#009c98' : '#fd3d35'}>
          <FaExclamationTriangle color="#fff" />
          {isOnLine ? <p> LOJA ABERTA</p> : <p> LOJA FECHADA </p>}
        </MessageIsOpen>
      </LeftSide>
    </Container>
  );
}
