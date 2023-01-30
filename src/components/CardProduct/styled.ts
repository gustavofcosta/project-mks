import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme})=> theme.bgWhite};
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;

  
  img{
    width: 90%;
    height: 138px;
    border-radius: 8px;
    object-fit: contain;
  }
`;

export const ContentInfo = styled.div`
  padding: 10px 12px;
 
  h1 {
    color: ${({theme})=> theme.textPrimary};
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-right: 2px;

    height: 38px;    
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
  }
  
  p {
    font-weight: 300px;
    font-size: 10px;
    line-height: 12px;
    color: ${({theme})=> theme.textPrimary};
    padding: 10px 0;
    min-height: 70px;
  }
`;

export const Price = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme})=> theme.bgPrice};
  border-radius: 5px;
  color: ${({theme})=>theme.textWhite};
  padding: 5px 10px;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme})=>theme.bgPrimary};
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 0 0 8px 8px;
  color: ${({theme})=>theme.textWhite};
  padding: 10px 65px;
  transition: all 0.5s ease-in-out;
  
  :hover {
    background: ${({theme})=>theme.bgPrimaryAlternative};
    cursor: pointer;
  }

  span {
    margin-left: 16px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
  }
`;

