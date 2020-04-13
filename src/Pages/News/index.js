import React from 'react';

import { Container } from './styles';

import audio from '../../aux/audio';

export default function News() {
  function handleStop() {
    audio.stop();
    console.log('estopei');
  }

  return (
    <Container>
      <button onClick={handleStop}> Para ssspai </button>
      <h3> oi </h3>
    </Container>
  );
}
