import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ListMenu } from './styles';
import { FaFileAlt, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';

import history from '../../services/history';

import { signOut } from '../../store/modules/auth/actions';

// import socketio from 'socket.io-client';

export default function VerticalMenu() {
  // const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  // const socket = useMemo(() => {
  //   if (profile) {
  //     return socketio('https://pedypet.com', {
  //       query: {
  //         loja_login_id: profile.id,
  //         loja_id: profile.loja_id,
  //       },
  //     });
  //   }
  // }, [profile]);

  // useEffect(() => {
  //   if (profile) {
  //     socket.on('orders', order => {
  //       // vou na api, faco uma requisicao que me traz todas as order aberta
  //       // chumbo na tela
  //     });
  //   }
  // }, [socket]);

  function handleRedirect(path) {
    history.push(path);
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <ListMenu>
        <li
          onClick={() => {
            handleRedirect('/dashboard');
          }}
        >
          <FaFileAlt size={20} color="#fff" />
          <p> Pedidos </p>
        </li>

        <li
          onClick={() => {
            handleRedirect('/news');
          }}
        >
          <FaNewspaper size={20} color="#fff" />
          <p> Novidades </p>
        </li>

        <button onClick={handleLogout}>
          <FaSignOutAlt size={20} color="#fff" />
          <p> Sair </p>
        </button>
      </ListMenu>
    </Container>
  );
}
