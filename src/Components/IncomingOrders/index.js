import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  Container,
  CardOrder,
  Content,
  ContentCard,
  DateTimeOrder,
  TitleDateTimeOrder,
  Selector,
} from './styles';

import { getOrders } from '../../store/modules/orders/actions';

export default function IncomingOrders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <Container>
      <Content>
        <Selector>
          <option value="valor1" selected>
            Pendentes
          </option>
          <option value="valor2">Concluidos</option>
          <option value="valor3">Cancelado</option>
        </Selector>

        <CardOrder>
          <ContentCard>
            <h4> Renan Melo </h4>
            <div>
              <p> Pedido pendente </p>
            </div>
          </ContentCard>

          <DateTimeOrder>
            <TitleDateTimeOrder> Horario do pedido </TitleDateTimeOrder>
            <p> Pedido feito hà 20 minutos</p>
          </DateTimeOrder>
        </CardOrder>

        <CardOrder>
          <ContentCard>
            <h4> Renan Melo </h4>
            <div>
              <p> Pedido pendente </p>
            </div>
          </ContentCard>

          <DateTimeOrder>
            <TitleDateTimeOrder> Horario do pedido </TitleDateTimeOrder>
            <p> Pedido feito hà 20 minutos</p>
          </DateTimeOrder>
        </CardOrder>

        <CardOrder>
          <ContentCard>
            <h4> Renan Melo </h4>
            <div>
              <p> Pedido pendente </p>
            </div>
          </ContentCard>

          <DateTimeOrder>
            <TitleDateTimeOrder> Horario do pedido </TitleDateTimeOrder>
            <p> Pedido feito hà 20 minutos</p>
          </DateTimeOrder>
        </CardOrder>

        <CardOrder>
          <ContentCard>
            <h4> Renan Melo </h4>
            <div>
              <p> Pedido pendente </p>
            </div>
          </ContentCard>

          <DateTimeOrder>
            <TitleDateTimeOrder> Horario do pedido </TitleDateTimeOrder>
            <p> Pedido feito hà 20 minutos</p>
          </DateTimeOrder>
        </CardOrder>

        <CardOrder>
          <ContentCard>
            <h4> Renan Melo </h4>
            <div>
              <p> Pedido pendente </p>
            </div>
          </ContentCard>

          <DateTimeOrder>
            <TitleDateTimeOrder> Horario do pedido </TitleDateTimeOrder>
            <p> Pedido feito hà 20 minutos</p>
          </DateTimeOrder>
        </CardOrder>

        <CardOrder>
          <ContentCard>
            <h4> Renan Melo </h4>
            <div>
              <p> Pedido pendente </p>
            </div>
          </ContentCard>

          <DateTimeOrder>
            <TitleDateTimeOrder> Horario do pedido </TitleDateTimeOrder>
            <p> Pedido feito hà 20 minutos</p>
          </DateTimeOrder>
        </CardOrder>
      </Content>
    </Container>
  );
}
