import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 400px;
  background: #fff;
  /* background: blue; */

  display: flex;
  justify-content: center;
  /* margin-left: 40px; */
`;

export const CardOrder = styled.div`
  margin-right: 20px;
  padding-top: 100px;
  background: #fff;
  margin-top: 10px;
  width: 100%;
  height: 150px;
  padding-top: 50px;
  box-shadow: 10px 10px 30px 0px rgba(247, 247, 247, 1);
  border: 1px solid #fafafa;
  padding: 20px;

  h4 {
    font-size: 20px;
    font-weight: 200;
  }

  div {
    margin-top: 10px;

    /* &:first-child {
      color: #d6d6d6;
    } */
  }
`;

export const Content = styled.div`
  background: #fff;

  width: 90%;
  overflow-y: auto;

  /* height: 100px; */
`;

export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    /* width: 80px; */
    padding: 5px;
    background: red;
    border-radius: 5px;

    color: #fff;
    font-size: 10px;
  }
`;

export const DateTimeOrder = styled.div``;

export const TitleDateTimeOrder = styled.p`
  color: #d7d7d7;
  margin-bottom: 5px;
`;

export const Selector = styled.select`
  width: 100%;
  height: 40px;
`;
