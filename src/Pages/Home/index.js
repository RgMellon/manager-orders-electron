import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';

import IncomingOrders from '../../Components/IncomingOrders';
import OrderDetail from '../../Components/OrderDetail';
import CloseStore from '../../Components/CloseStore';

export default function Home() {
  const { orderDetail } = useSelector(state => state.orders);
  const { isOnline } = useSelector(state => state.online);

  return (
    <Container>
      <IncomingOrders />
      {!isOnline && <CloseStore />}

      {isOnline && <> {orderDetail && <OrderDetail />}</>}
    </Container>
  );
}
