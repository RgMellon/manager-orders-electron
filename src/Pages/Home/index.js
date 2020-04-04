import React from 'react';

import { Container } from './styles';

import IncomingOrders from '../../Components/IncomingOrders';
import OrderDetail from '../../Components/OrderDetail';

export default function Home() {
  return (
    <Container>
      <IncomingOrders />
      <OrderDetail />
    </Container>
  );
}
