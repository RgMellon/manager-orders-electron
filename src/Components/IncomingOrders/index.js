import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  CardOrder,
  Content,
  ContentCard,
  DateTimeOrder,
  TitleDateTimeOrder,
  Selector,
  BadgeStatusPending,
  BadgeStatus,
  BadgeStatusApproved,
} from './styles';

import { getOrders, orderDetail } from '../../store/modules/orders/actions';

import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function IncomingOrders() {
  const { orders } = useSelector(state => state.orders);
  const [listOrders, setListOrders] = useState([]);

  const dispatch = useDispatch();

  const status = {};
  status[5] = 'Pedido Aprovado';
  status[4] = 'Pedido Pendente';
  status[7] = 'Pedido Pronto';

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useMemo(() => {
    const filteredOrders = orders.filter(item => item.status === 4);
    setListOrders(formatOrders(filteredOrders));
  }, [orders]);

  function handleChange(event) {
    console.tron.log(event.target.value);
    const ordersFiltred = filterStatusOrder(event.target.value);
    const resultOrders = formatOrders(ordersFiltred);
    setListOrders(resultOrders);
  }

  function filterStatusOrder(id) {
    return orders.filter(item => item.status == id);
  }

  function formatOrders(orders) {
    return orders.map(item => ({
      ...item,
      timeDistance: formatDistance(parseISO(item.created_at), new Date(), {
        addSuffix: true,
        locale: pt,
      }),
      labelStatus: status[item.status],
    }));
  }

  function handleShowDetail(id) {
    dispatch(orderDetail(id));
  }

  return (
    <Container>
      <Content>
        <Selector onChange={handleChange}>
          <option value="4" selected>
            Pedidos Pendentes
          </option>
          <option value="5"> Pedido Aprovado </option>
          <option value="7"> Pedido Pronto </option>
        </Selector>

        {listOrders.map(item => (
          <CardOrder
            onClick={() => {
              handleShowDetail(item.id);
            }}
          >
            <ContentCard>
              <h4> {item.nome} </h4>

              {item.status === 4 && (
                <BadgeStatusPending>
                  <p> {item.labelStatus} </p>
                </BadgeStatusPending>
              )}

              {item.status === 7 && (
                <BadgeStatus>
                  <p> {item.labelStatus} </p>
                </BadgeStatus>
              )}

              {item.status === 5 && (
                <BadgeStatusApproved>
                  <p> {item.labelStatus} </p>
                </BadgeStatusApproved>
              )}
            </ContentCard>

            <DateTimeOrder>
              <TitleDateTimeOrder> Horario do pedido </TitleDateTimeOrder>
              <p> pedido feito {item.timeDistance}</p>
            </DateTimeOrder>
          </CardOrder>
        ))}
      </Content>
    </Container>
  );
}
