import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, ListMenu } from './styles';
import { FaFileAlt, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';

import history from '../../services/history';

import { signOut } from '../../store/modules/auth/actions';

export default function VerticalMenu() {
  const dispatch = useDispatch();

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
