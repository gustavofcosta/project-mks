import styled from "styled-components";

export const ListItems = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({theme})=> theme.bgWhite};
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    width: 250px;
    margin: 20px auto;
    padding-top: 10px;

    img {
        width: 80px;
        height: 90px;
        object-fit: contain;
    }

    @media screen and (min-width: 500px) {
        flex-direction: row;
        justify-content: center;
        gap: 5px;
        width: 380px;
        padding-left: 15px;
        padding-top: 0;
        
        img {
            width: 50px;
            height: 90px;
        }
    }
`;

export const BtnRemoveProduct = styled.button`
    position: absolute;
    border: none;
    top: 4px;
    right: 15px;
    font-size: 42px;
    background:none;
    cursor: pointer;

    
    @media screen and (min-width: 500px) {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({theme})=> theme.bgBlack};
        color: ${({theme})=> theme.textWhite};
        height: 26px;
        width: 26px;
        right: -10px;
        top: -10px;
        border-radius: 50%;  
        font-size: 14px; 
    }
   
`;

export const Brand = styled.p`
    color: ${({theme})=> theme.textPrimary};
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: center;
    padding: 5px;
    margin-top: 12px;
    text-align: left;

    @media screen and (min-width: 500px) {
        font-size: 12px;
        line-height: 17px;
        padding: 0 8px;
        margin-bottom: 10px;
        width: 130px;
    }

`;

export const Amount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 8px 25px 8px;
    width: 230px;

    @media screen and (min-width: 500px) { 
        margin-top: 10px;
    }
`;

export const WrapperBtn = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid ${({theme})=> theme.borderDefault};
    color: ${({theme})=> theme.textBlack};
    border-radius: 4px;

    span {
        font-size: 22px;
        padding: 3px 8px;
        cursor: pointer;
    }

    @media screen and (min-width: 500px) { 
        margin-left: 5px;
        span {
            font-size: 15px;
            font-weight: 10px;
            padding: 0 7px;
        }
    }
`;

export const AmountValue = styled.p`
        border-left: 1px solid ${({theme})=> theme.borderDefault};
        border-right: 1px solid ${({theme})=> theme.borderDefault};
        padding: 3px 10px;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

    @media screen and (min-width: 500px) { 
        font-size: 12px;
        padding: 0 8px;
    }
`;

export const Qtd = styled.p`
    display: none;
   
    @media screen and (min-width: 500px) { 
        display: block;
        position: absolute;
        left: -2px;
        top: -16px;
        font-size: 12px;
        font-weight: 400;
        font-size: 8px;
        color: ${({theme})=> theme.textBlack};

    }
`;

export const Price = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme})=> theme.bgPrice};
  border-radius: 5px;
  color: ${({theme})=>theme.textWhite};
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  height: 35px;
  padding: 8px 15px;

  @media screen and (min-width: 500px) {
        background: none;
        color: ${({theme})=> theme.textBlack};
        font-size: 14px;
        line-height: 17px;
    }
`;
