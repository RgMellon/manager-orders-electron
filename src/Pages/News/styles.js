import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: 10px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-left: 300px;
  }

  img {
    width: 200px;
  }

  h1 {
    font-weight: 400;
    margin-left: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 20px;
`;

export const Card = styled.button`
  cursor: pointer;
  width: 33.33%;
  border: 1px solid #efefef;
  box-shadow: 10px 10px 14px -6px rgba(245, 245, 245, 0.58);
  /* height: 300px; */

  img {
    width: 100%;
  }

  footer {
    padding: 20px;
  }

  h4 {
    font-size: 20px;
    font-weight: 300;
  }

  p {
    color: #999;
  }
`;
