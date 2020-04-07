import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100px;
  background: rgb(11, 127, 194);
`;

export const ListMenu = styled.ul`
  padding: 5px;

  button {
    width: 80%;
    background: red;
    align-self: center;
    position: absolute;
    bottom: 0;
    margin: 0px;
    background: rgba(255, 255, 255, 0);
    border: 0px;
    color: #fff;
    margin-bottom: 20px;
  }

  li {
    cursor: pointer;
    /* background: red; */
    margin-top: 30px;
    /* margin-bottom: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    &:first-child {
      margin-top: 100px;
    }

    p {
      color: #fff;
      font-size: 10px;
      font-weight: 200;
      margin-top: 10px;
    }
  }
`;
