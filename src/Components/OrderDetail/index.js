import React from 'react';

import {
  Container,
  ContentOrder,
  Header,
  OrderHeader,
  WrapperOrder,
  Collumns,
  Separator,
} from './styles';

export default function OrderDetail() {
  return (
    <Container>
      <OrderHeader>
        <h3> Ordem </h3>
        <p> #999 </p>
      </OrderHeader>

      <WrapperOrder>
        <Header>
          <h4>Dados do cliente</h4>
        </Header>

        <ContentOrder>
          <h5> Nome do cliente </h5>
          <p> Renan Gianni de Melo</p>
        </ContentOrder>

        <ContentOrder>
          <h5> Telefone </h5>
          <p> (18) 99116-1413</p>
        </ContentOrder>

        <ContentOrder>
          <h5> Endereço de entrega </h5>
          <p> Alberto vieira Bonfim, 841 </p>
        </ContentOrder>
      </WrapperOrder>

      <WrapperOrder>
        <Header>
          <h4>Metodo de pagamento / Entrega </h4>
        </Header>

        <ContentOrder>
          <h5> Metodo de pagamento </h5>
          <p> Pagamento por dinheiro</p>
        </ContentOrder>

        <ContentOrder>
          <h5> Tipo de pedido </h5>
          <p> Viagem (Cliente irá até o local pegar o produto) </p>
        </ContentOrder>
      </WrapperOrder>

      <WrapperOrder>
        <Header>
          <h4>Detalhe do pedido (Valores) </h4>
        </Header>

        <ContentOrder>
          <h5> Desconto </h5>
          <p> R$ 0,00</p>
        </ContentOrder>

        <ContentOrder>
          <h5> Custo da embalagem </h5>
          <p> R$ 3,00 </p>
        </ContentOrder>

        <ContentOrder>
          <h5> Total com desconto</h5>
          <p> R$ 22,90 </p>
        </ContentOrder>

        <ContentOrder>
          <h5> Preço total </h5>
          <p> R$ 22,90</p>
        </ContentOrder>
      </WrapperOrder>

      <WrapperOrder>
        <Header>
          <h4>Detalhe do produto escolhido</h4>
        </Header>

        <ContentOrder>
          <Collumns>
            <div>
              <h5> Quantidade</h5>
              <p> 1x </p>
            </div>

            <div>
              <h5> Produto</h5>
              <p> Açai 400 ml</p>
            </div>

            <div>
              <h5> Preço</h5>
              <p> R$ 20,90 </p>
            </div>
          </Collumns>

          <Separator />

          <Collumns>
            <div>
              <h5> Quantidade</h5>
              <p> 1x </p>
            </div>

            <div>
              <h5> Produto</h5>
              <p> Açai 400 ml</p>
            </div>

            <div>
              <h5> Preço</h5>
              <p> R$ 20,90 </p>
            </div>
          </Collumns>
        </ContentOrder>

        <ContentOrder>
          <h5> Complementos </h5>
          <p>
            Escolha sua combinação
            <ul>
              <li> > Leite em pó</li>
              <li> > Morango </li>
              <li> > Leite condensado </li>
            </ul>
          </p>
        </ContentOrder>

        <Separator />

        <ContentOrder>
          <Collumns>
            <div>
              <h5> Quantidade</h5>
              <p> 1x </p>
            </div>

            <div>
              <h5> Produto</h5>
              <p> Açai 400 ml</p>
            </div>

            <div>
              <h5> Preço</h5>
              <p> R$ 20,90 </p>
            </div>
          </Collumns>
        </ContentOrder>
      </WrapperOrder>
    </Container>
  );
}
