import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const NextButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  /* background: rgb(11, 127, 194); */
  background: ${props => props.bkg};
  color: #fff;

  outline: none;
  border: 0px;

  &:hover {
    background: #ef6614;
  }
`;

export const CancelButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  background: red;
  color: #fff;

  outline: none;
  border: 0px;

  &:hover {
    background: #ef6614;
  }
`;
