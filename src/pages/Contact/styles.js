import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
  font-family: Roboto;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  h1 {
    width: 322px;
    height: 95px;
    font-family: Roboto;
    font-size: 62px;
    font-weight: 300;
    margin-top: 80px;
  }

  h2 {
    font-size: 30px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      font-weight: 200;
      margin-left: 10px;
    }
  }
`;

export const Contacts = styled.div`
  margin-top: 100px;
`;
