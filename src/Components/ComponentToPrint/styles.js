import styled from 'styled-components';

export const Container = styled.div`
  width: 78%;
  padding: 5px;

  img {
    width: 180px;
    margin: 5px;
  }

  p {
    font-size: 17px;
  }
  b {
    font-size: 17px;
  }
  span {
    font-size: 17px;
  }
`;

export const TableInfo = styled.table`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;

  @media screen {
    @page {
      size: auto;
      /* auto is the initial value */
      margin: 0mm 0mm 0mm 0mm;
      /* this affects the margin in the printer settings */
    }
  }
`;

export const TH15 = styled.th`
  width: 15%;
`;
export const TH35 = styled.th`
  width: 35%;
`;

export const TH20 = styled.th`
  width: 20%;
`;

export const ContentAddress = styled.div`
  li {
    font-size: 17px;
  }
`;

export const ContentUser = styled.div`
  margin: 5px 0px;
`;

export const ContentInfoPayment = styled.div`
  margin: 5px 0px;
`;

export const ContentObservation = styled.div`
  margin: 5px 0px;
  /* display: inline-block; */
`;

export const TextCenter = styled.p`
  margin: 5px 0px;
  text-align: center;
`;

export const TableProduct = styled.table`
  margin-top: 5px;

  th {
    width: 30%;
  }
`;

export const ContentComplement = styled.div`
  margin: 10px 5px;

  li {
    margin-top: 5px;
  }
`;

export const ContentTotalPrice = styled.div`
  width: 100%;
  margin-top: 10px;
  li {
    width: 100%;
    div {
      display: inline-block;
      width: 50%;

      b {
        display: inline-block;
        width: 80%;
      }
    }
  }
`;

export const Separator = styled.hr`
  display: block;
  height: 1px;
  /* background: transparent; */
  width: 100%;

  border: solid 0.5px #aaa;
`;
