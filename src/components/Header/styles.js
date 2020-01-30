import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100%;
  height: 70px;
  background: #222840;
  box-shadow: 0 0 11px 0 rgba(255, 255, 255, 0.3);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.text`
  font-size: 40px;
  font-family: 'Roboto';
  font-weight: 900;
`;

export const Pages = styled.text`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;

  a {
    color: #fff;
    font-weight: lighter;
    font-size: 28px;
    text-decoration: none;
  }

  a:active {
    color: #aaa;
  }
`;

export const Icons = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
