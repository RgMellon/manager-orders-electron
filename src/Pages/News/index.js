import React from 'react';

import { Container, Header, Content, Card } from './styles';

import img from './video.svg';

export default function News() {
  function handleRedirect() {
    window.open('https://vimeo.com/408045621/80c05c12e8', '_blank');
  }

  return (
    <Container>
      <Header>
        <img src={img} alt="img-video" />
        <span>
          <h1> Veja como usar nosso sistema </h1>
          <p> assista nossos videos</p>
        </span>
      </Header>

      <Content>
        <Card onClick={handleRedirect}>
          <img src="https://i.imgur.com/WtxZl7o.jpg" alt="" />
          <footer>
            <h4> Primeiros passos </h4>
            <p> Como utilizar nosso gestor </p>
          </footer>
        </Card>
      </Content>
    </Container>
  );
}
