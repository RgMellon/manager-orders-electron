import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  img {
    margin-top: 20px;
    width: 300px;
  }

  h1 {
    margin-top: 10px;
    font-weight: 400;
    color: #999;
  }

  p {
    margin-top: 20px;
    font-weight: 200;
  }
`;
