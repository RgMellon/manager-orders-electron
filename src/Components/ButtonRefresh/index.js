import React from 'react';

import { Container } from './styles';

import { FaRedo } from 'react-icons/fa';

import { getOrders } from '../../store/modules/orders/actions';

import { useDispatch } from 'react-redux';

export default function ButtonRefresh() {
  const dispatch = useDispatch();

  function handleRefresh() {
    dispatch(getOrders());
  }

  return (
    <Container onClick={handleRefresh}>
      <FaRedo size={20} color="#444" />
      <p> Atualizar </p>
    </Container>
  );
}
