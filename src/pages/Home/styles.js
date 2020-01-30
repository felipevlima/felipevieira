import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: 175px;

  div {
    width: 700px;
    height: 100%;

    h1 {
      color: #fff;
      font-size: 72px;
      font-family: 'Roboto';
      font-weight: lighter;
      margin-bottom: 10px;
    }

    h2 {
      color: #aaa;
      font-size: 40px;
      font-family: 'Roboto';
      font-weight: 100;
      margin-bottom: 100px;
    }

    a {
      padding: 7px 20px;
      text-decoration: none;
      background: #ea526d;
      /* box-shadow: 0 0 13px 0 #ea526d; */
      border-radius: 8px;
      color: #fff;
      font-size: 30px;
      font-weight: lighter;
    }

    a:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 13px 0 #eb8a9b;
      transition: all 0.2s;
    }
  }
`;
