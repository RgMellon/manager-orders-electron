import React from 'react';
import PropTypes from 'prop-types';

// import Header from '~/Components/Header';

import MenuHeader from '../../../Components/MenuHeader';
import VerticalMenu from '../../../Components/VerticalMenu';

import { Wrapper, Container } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <MenuHeader />
      <VerticalMenu />
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
}

DefaultLayout.prototypes = {
  children: PropTypes.element.isRequired,
};
