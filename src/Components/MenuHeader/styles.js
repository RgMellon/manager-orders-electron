import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  position: fixed;
  left: 0;
  right: 0%;
  z-index: 999;
  background: #fff;
  padding: 10px 20px;
  display: flex;
`;

export const RightSide = styled.div`
  width: 50%;
  /* background: blue; */
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  p {
    margin-left: 10px;
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MessageIsOpen = styled.div`
  width: 180px;
  height: 40px;
  background: ${props => props.bkg};
  margin-right: 20px;

  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;

  p {
    margin-left: 20px;
    color: #fff;
  }
`;

export const ButtonOpen = styled.button`
  margin-right: 40px;
  background: ${props => props.bkg};
  border-radius: 4px;
  color: #fff;
  outline: none;
  border: 0px;
  padding: 10px;
`;
