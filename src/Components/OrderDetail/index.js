import React from 'react';
import { useSelector } from 'react-redux';

import StatusBottomBar from '../../Components/StatusBottomBar';

import {
  Container,
  ContentOrder,
  Header,
  OrderHeader,
  WrapperOrder,
  Collumns,
  Separator,
  Observation,
  ItemComplement,
} from './styles';

export default function OrderDetail() {
  const { order, items } = useSelector(state => state.orders.orderDetail);

  return (
    <Container>
      <OrderHeader>
        <h3> Numero do pedido </h3>
        <p> # {order.id} </p>
      </OrderHeader>
      <WrapperOrder>
        <Header>
          <h4>Dados do cliente</h4>
        </Header>
        <ContentOrder>
          <h5> Nome do cliente </h5>
          <p> {order.user.nome}</p>
        </ContentOrder>
        <ContentOrder>
          <h5> Telefone </h5>
          <p> {order.user.celular} </p>
        </ContentOrder>

        {order.document_number && (
          <ContentOrder bkg="#e8e5f5">
            <h5> USUARIO DESEJA CPF / CNPJ NA NOTA </h5>
            <p> {order.document_number} </p>
          </ContentOrder>
        )}

        {order.address_string && (
          <ContentOrder>
            <h5> Cliente solicitou delivery no endereço </h5>
            <p> {order.address_string} </p>
          </ContentOrder>
        )}
      </WrapperOrder>
      <WrapperOrder>
        <Header>
          <h4>Metodo de pagamento / Entrega </h4>
        </Header>

        <ContentOrder>
          <h5> Metodo de pagamento </h5>
          <p>
            {order.payment.type_text} / {order.payment.brand_text}
          </p>
        </ContentOrder>

        <ContentOrder>
          <h5> Tipo de pedido (Delivery, Balcão, Mesa, Viagem) </h5>
          {!order.table && <p> {order.type_string} </p>}
          {order.table && (
            <p>
              {order.type_string} (Numero da mesa: {order.table})
            </p>
          )}
        </ContentOrder>
      </WrapperOrder>
      <WrapperOrder>
        <Header>
          <h4>Detalhe do produto escolhido</h4>
        </Header>

        <ContentOrder>
          {items.map(item => (
            <>
              <Collumns>
                <div>
                  <h5> Quantidade</h5>
                  <p> {item.amount} </p>
                </div>

                <div>
                  <h5> Produto</h5>
                  <p> {item.name} </p>
                </div>

                <div>
                  <h3> Preço</h3>
                  <p> R$ {item.product_price} </p>
                </div>
              </Collumns>

              <Observation>
                <h5> Observação do cliente </h5>

                <p> {item.observation}</p>
              </Observation>

              {JSON.parse(item.complement).length > 0 && (
                <>
                  <Separator />
                  <h2> Complementos </h2>
                </>
              )}

              <ul>
                {JSON.parse(item.complement).map(complement =>
                  complement.data.map(item => (
                    <li>
                      <ItemComplement>
                        <b>Nome do Complemento : </b> {item.name}
                      </ItemComplement>

                      {item.desc && (
                        <ItemComplement>
                          <b> Descrição </b> : {item.desc}
                        </ItemComplement>
                      )}

                      <ItemComplement>
                        <b> Valor do complemento : </b> {item.price}
                      </ItemComplement>

                      {item.quantity && (
                        <ItemComplement>
                          <b> Quantidade : </b> {item.quantity}
                        </ItemComplement>
                      )}

                      <Separator />
                    </li>
                  ))
                )}
              </ul>
            </>
          ))}
        </ContentOrder>
      </WrapperOrder>
      {order.observation && (
        <WrapperOrder>
          <Header>
            <h4> Observação do cliente </h4>
          </Header>

          <ContentOrder>
            <p>{order.observation}</p>
          </ContentOrder>
        </WrapperOrder>
      )}

      <WrapperOrder>
        <Header>
          <h4>Detalhe do pedido (Valores) </h4>
        </Header>

        <ContentOrder>
          <h5> SubTotal </h5>
          <p> R${order.price}</p>
        </ContentOrder>

        <ContentOrder>
          <h5> Custo da embalagem </h5>
          <p> R$ {order.package_cost} </p>
        </ContentOrder>

        <ContentOrder>
          <h5> Total com desconto</h5>
          <p> R$ {order.discount_price}</p>
        </ContentOrder>

        <ContentOrder>
          <h5> Preço total </h5>
          <p> R$ {order.total_price} </p>
        </ContentOrder>
      </WrapperOrder>
      <StatusBottomBar></StatusBottomBar>
    </Container>
  );
}
