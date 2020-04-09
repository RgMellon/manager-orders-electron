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
  cursor: pointer;

  &:hover {
    border: 1px solid #ddd;
  }

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

export const BadgeStatusPending = styled.div`
  /* width: 80px; */
  padding: 5px;
  background: red;
  border-radius: 5px;

  color: #fff;
  font-size: 10px;
`;

export const BadgeStatus = styled.div`
  /* width: 80px; */
  padding: 5px;
  background: #009c98;
  border-radius: 5px;

  color: #fff;
  font-size: 10px;
`;

export const BadgeStatusApproved = styled.div`
  /* width: 80px; */
  padding: 5px;
  background: #6b38e6;
  border-radius: 5px;

  color: #fff;
  font-size: 10px;
`;

export const FilterArea = styled.section`
  padding: 20px;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const FilterButton = styled.button`
  background: ${props => props.bkg};
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: 0px;
  outline: none;

  color: #fff;
  font-size: 8px;
  width: 20%;
`;

export const AreaFilter = styled.div`
  display: flex;

  p {
    margin-left: 20px;
  }
`;
