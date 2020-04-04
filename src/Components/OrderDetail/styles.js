import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  padding: 20px;
  /* height: 900px; */
`;

export const OrderHeader = styled.header`
  display: flex;
  align-items: center;

  p {
    color: #999;
    font-size: 20px;
    margin-left: 10px;
  }

  h3 {
    color: #333;
    font-size: 30px;
  }
`;

export const WrapperOrder = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 10px 10px 5px 0px rgba(235, 235, 235, 0, 49);
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const Header = styled.header`
  width: 100%;
  background: #f3f3f3;
  height: 60px;
  display: flex;
  align-items: center;

  h4 {
    font-weight: 200;
    font-size: 20px;
    padding: 20px;
  }
`;

export const ContentOrder = styled.div`
  padding: 20px;

  h5 {
    font-weight: 200;
    color: #999;
  }

  p {
    font-size: 18px;
    color: #333;

    ul {
      margin-top: 10px;

      li {
        margin-top: 8px;
        font-size: 15px;
      }
    }
  }
`;

export const Collumns = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 30px;
`;

export const Separator = styled.div`
  height: 10px;
  background: #fafafa;
  width: 100%;
  margin-top: 20px;
`;
