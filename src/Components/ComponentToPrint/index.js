import React from 'react';

import {
  TableInfo,
  TH15,
  TH35,
  TH20,
  Container,
  ContentAddress,
  ContentUser,
  ContentInfoPayment,
  ContentObservation,
  TextCenter,
  TableProduct,
  ContentComplement,
  ContentTotalPrice,
} from './styles';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import logo from './logouaupreto.png';

class ComponentToPrint extends React.Component {
  render() {
    const { order, items } = this.props.orderDetail;
    return (
      <Container>
        <img src={logo} alt="" />
        <TextCenter> {order.store.loja_nome} </TextCenter>
        <TextCenter>
          {order.store.loja_ende}, {order.store.loja_ende_n}
        </TextCenter>
        <TableInfo>
          <thead>
            <TH15>Pedido</TH15>
            <TH35>Data de Emissão</TH35>
            <TH20>Tipo de pedido</TH20>
            <TH15>Taxa de entrega</TH15>
            <TH15> Preço da embalagem </TH15>
          </thead>
          <tbody>
            <tr align="center">
              <td>{order.id} </td>
              <td>
                {format(new Date(), "d 'de' MMM HH:mm:ss", { locale: pt })}
              </td>
              <td>{order.type_string}</td>
              <td> {order.delivery_price} </td>
              <td> {order.package_cost} </td>
            </tr>
          </tbody>
        </TableInfo>
        <hr />
        <ContentAddress>
          <ul>
            <li>
              <b> Endereço de entrega: </b> {order.address_string}
            </li>

            {order.address && (
              <>
                <li>
                  <b>Bairro</b> : {order.address.neighborhood}
                </li>

                <li>
                  <b>Complemento : </b> {order.address.complement}
                </li>

                <li>
                  <b> Referência : </b> {order.address.reference}
                </li>
              </>
            )}

            <li>
              <b> Celular </b> : {order.user.celular}
            </li>
          </ul>
        </ContentAddress>
        <hr />
        <ContentUser>
          <b> Cliente </b> : <span> {order.user.nome} </span>
        </ContentUser>
        <hr />
        <ContentInfoPayment>
          <ul>
            <li>
              <b>A receber: </b>

              {order.payment_type === 2 ? (
                <>
                  <span> ( X )Sim </span>
                  <span> ( ) Não </span>
                </>
              ) : (
                <>
                  <span> ( )Sim </span>
                  <span> ( X ) Não </span>
                </>
              )}
            </li>

            <li>
              <b>Tipo de pagamento: </b>
              <span> {order.payment_type_string} </span>
            </li>

            <li>
              <b>Pagamento na entrega:</b>
              <span> {order.payment.type_text} </span>
            </li>

            <li>
              <b> Bandeira do Cartão:</b>
              <span> {order.payment.brand_text} </span>
            </li>
          </ul>
        </ContentInfoPayment>

        {order.observation && (
          <ContentObservation>
            <b> Observação : </b>
            <p> {order.observation}</p>
          </ContentObservation>
        )}

        <hr />

        <TextCenter> NÃO É CUPOM FISCAL</TextCenter>

        <TableProduct>
          <thead>
            <tr>
              <th>Qtd</th>
              <th>Descrição</th>
              <th>Preço (R$)</th>
              <th> Total (R$)</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr align="center">
                <td> {item.amount} </td>
                <td> {item.name} </td>
                <td> {item.unit_price} </td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </TableProduct>

        {items.map(
          item =>
            JSON.parse(item.complement).length > 0 && (
              <ul>
                {JSON.parse(item.complement).map(complement => (
                  <ContentComplement key={complement.id}>
                    {complement.data.map(item => (
                      <li key={item.id}>
                        {console.log(item)}
                        <b> Complementos : </b>
                        <span>{item.name}</span>
                        {item.quantity && <span> - qtd: {item.quantity} </span>}
                        <span> - R$ {item.price} </span>
                      </li>
                    ))}
                  </ContentComplement>
                ))}
              </ul>
            )
        )}

        <ContentTotalPrice>
          <ul>
            <li>
              <div>
                <b> Total </b>
                <span> {order.total_price}</span>
              </div>
            </li>

            <hr />

            <li>
              <div>
                <b> Desconto </b>
                <span> {order.discount_price} </span>
              </div>
            </li>

            <hr />

            <li>
              <div>
                <b> TOTAL COM DESCONTO </b>
                <span> {order.total_with_discount} </span>
              </div>
            </li>
          </ul>
        </ContentTotalPrice>
      </Container>
    );
  }
}

export default ComponentToPrint;
