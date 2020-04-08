import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';

import IncomingOrders from '../../Components/IncomingOrders';
import OrderDetail from '../../Components/OrderDetail';

export default function Home() {
  const { orderDetail } = useSelector(state => state.orders);

  return (
    <Container>
      <IncomingOrders />
      {orderDetail && <OrderDetail />}
    </Container>
  );
}
