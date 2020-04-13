import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  RightSide,
  LeftSide,
  MessageIsOpen,
  ButtonOpen,
} from './styles';

import { FaExclamationTriangle } from 'react-icons/fa';

import api from '../../services/api';

import { setIsOnline } from '../../store/modules/online/actions';

export default function MenuHeader() {
  const dispatch = useDispatch();
  const { name, logo } = useSelector(state => state.user.profile);
  const { isOnline } = useSelector(state => state.online);

  useEffect(() => {
    async function handleGetOnline() {
      const response = await api.get('/api/ward/store/online');

      const { online } = response.data;

      dispatch(setIsOnline(online));
    }

    handleGetOnline();
  }, []);

  async function handleIsOnline() {
    const response = await api.put('/api/ward/store/online');

    const { online } = response.data;

    dispatch(setIsOnline(online));
  }

  return (
    <Container>
      <RightSide>
        <img src={logo} alt="icon" />

        <p>{name}</p>
      </RightSide>

      <LeftSide>
        {!isOnline ? (
          <ButtonOpen bkg="#d6d6d6" onClick={handleIsOnline}>
            Abrir loja
          </ButtonOpen>
        ) : (
          <ButtonOpen bkg="#fd3d35" onClick={handleIsOnline}>
            Fechar loja
          </ButtonOpen>
        )}

        <MessageIsOpen bkg={isOnline ? '#009c98' : '#fd3d35'}>
          <FaExclamationTriangle color="#fff" />
          {isOnline ? <p> LOJA ABERTA</p> : <p> LOJA FECHADA </p>}
        </MessageIsOpen>
      </LeftSide>
    </Container>
  );
}
