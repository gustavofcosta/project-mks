import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: ${({theme})=> theme.bgPrimary};

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 19px;
    color:  ${({theme})=> theme.textWhite};

    @media screen and (min-width: 500px) {
      margin-left: 40px;
    }

    span {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      margin-left: 10px;
    }
  }

  button {
    display: flex;
    width: 52px;
    justify-content: center;
    align-items: center;
    background: ${({theme})=> theme.bgWhite};
    border-radius: 8px;
    padding: 6px;
    margin-right: 5px;
    color: ${({theme})=> theme.textBlack};
    border: none;
    cursor: pointer;

    @media screen and (min-width: 500px) {
      margin-right: 55px;
    }

    span {
      display: block;
      font-weight: 700;
      font-size: 12px;
      margin-left: 10px;
    }
  }
`;