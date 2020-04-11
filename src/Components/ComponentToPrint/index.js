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

import logo from './logouaupreto.png';

class ComponentToPrint extends React.Component {
  render() {
    return (
      <Container>
        <img src={logo} alt="" />
        <TextCenter> hands </TextCenter>
        <TextCenter> Pereira Passos, 308, ARAÇATUBA / SP</TextCenter>
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
              <td>22858</td>
              <td>10/04/2020 09:40:09 </td>
              <td>Delivery</td>
              <td> 1.50 </td>
              <td> 5.00 </td>
            </tr>
          </tbody>
        </TableInfo>
        <hr />

        <ContentAddress>
          <ul>
            <li>
              <b> Endereço de entrega: </b> Rua Pereira Passos, 308
            </li>

            <li>
              <b>Bairro</b> : São Joaquim
            </li>

            <li>
              <b>Complemento</b>
            </li>

            <li>
              <b> Referência </b>
            </li>

            <li>
              <b> Celular </b> : 18991161413
            </li>
          </ul>
        </ContentAddress>
        <hr />
        <ContentUser>
          <b> Cliente </b> : <span> João Bola </span>
        </ContentUser>
        <hr />

        <ContentInfoPayment>
          <ul>
            <li>
              <b>A receber: </b>
              <span> ( X )Sim </span>
              <span> ( ) Não </span>
            </li>
            <li>
              <b>Tipo de pagamento: </b> <span> Pagamento na entrega</span>
            </li>
            <li>
              <b>Pagamento na entrega:</b>
              <span> Cartão de Crédito</span>
            </li>
            <li>
              <b> Bandeira do Cartão:</b>
              <span> Visa</span>
            </li>
          </ul>
        </ContentInfoPayment>
        <hr />

        <ContentObservation>
          <b> Observação : </b>
          <p> O chocolate deve ser branco, e sem o pepino em cima, por favor</p>
        </ContentObservation>
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
            <tr align="center">
              <td>1 </td>
              <td> Açai teste </td>
              <td>20,00</td>
              <td>40,00</td>
            </tr>
          </tbody>
        </TableProduct>

        <ContentComplement>
          <ul>
            <li>
              <b> Complementos : </b>
              <span> recheio: 2e2, qtd: 1 </span>
            </li>

            <li>
              <b> Complementos : </b>
              <span> Frutas: Banana, maca </span>
            </li>

            <li>
              <b> Complementos : </b>
              <span> recheio: 2e2, qtd: 1 </span>
            </li>
          </ul>
        </ContentComplement>

        <hr />

        <ContentTotalPrice>
          <ul>
            <li>
              <div>
                <b> Total </b>
                <span> 53.40</span>
              </div>
            </li>

            <hr />

            <li>
              <div>
                <b> Desconto </b>
                <span> 10,00</span>
              </div>
            </li>

            <hr />

            <li>
              <div>
                <b> TOTAL COM DESCONTO </b>
                <span> 43.40</span>
              </div>
            </li>
          </ul>
        </ContentTotalPrice>
      </Container>
    );
  }
}

export default ComponentToPrint;
