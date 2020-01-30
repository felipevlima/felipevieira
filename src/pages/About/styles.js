import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  div {
    width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;

    h1 {
      width: 322px;
      height: 95px;
      font-family: Roboto;
      font-size: 62px;
      font-weight: 300;
      color: #ffffff;
      margin-top: 38px;
    }

    h2 {
      margin-top: 25px;
      width: 525px;
      height: 420px;
      font-family: Roboto;
      font-size: 25px;
      font-weight: 100;
      color: #ffffff;
    }

    a {
      margin-left: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 216px;
      min-width: 214px;
      padding: 7px 30px;
      text-decoration: none;
      color: #fff;
      font-size: 30px;
      font-weight: medium;
      border-radius: 8px;
      /* box-shadow: 0 0 13px 0 #f2a033; */
      background-color: #f2a033;
    }

    a:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 13px 0 #f2a033;
      transition: all 0.2s;
    }
  }
`;
