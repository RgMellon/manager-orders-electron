import React from 'react';

import { Container, ListMenu } from './styles';

import { FaFileAlt, FaNewspaper } from 'react-icons/fa';

import history from '../../services/history';

export default function VerticalMenu() {
  function handleRedirect(path) {
    history.push(path);
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

        {/* <li>
          <FaFileAlt size={20} color="#fff" />
          <p> Pedidos </p>
        </li> */}
      </ListMenu>
    </Container>
  );
}
