import styled from "styled-components";

export const ListItems = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({theme})=> theme.bgWhite};
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    margin-top: 20px;
    width: 250px;
    height: 220px;
    margin: 12px auto;
    padding: 14px 20px 0 20px;

    img {
        width: 80px;
        height: 100px;
        object-fit: contain;
    }

    p {
        color: ${({theme})=> theme.textPrimary};
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        text-align: center;
    }

    button {
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
    }


    @media screen and (min-width: 500px) {
        flex-direction: row;
        justify-content: center;
        gap: 5px;
        width: 380px;
        height: 95px;

        img {
            width: 50px;
            height: 90px;
        }

        p {
            font-size: 12px;
            line-height: 17px;
            padding: 0 5px;
        }
    }
`;

export const Amount = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    margin: 0 20px 10px 0;
    padding-top: 10px;
`;

export const WrapperBtn = styled.div`
    border: 1px solid ${({theme})=> theme.borderDefault};
    color: ${({theme})=> theme.textBlack};
    border-radius: 4px;

    
    p {
        margin: 3px;
        border-left: 1px solid ${({theme})=> theme.borderDefault};
        border-right: 1px solid ${({theme})=> theme.borderDefault};
        padding: 0 10px;
    }

    span {
        display: block;
        font-size: 22px;
        padding: 0 4px;
        margin-left: 2px;
        cursor: pointer;
    }

    @media screen and (min-width: 500px) { 
        span {
            font-size: 15px;
            font-weight: 10px;
            padding: 2px 4px;
        }

        p {
            font-size: 12px;
        }
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
  height: 35px;

  @media screen and (min-width: 500px) {
        background: none;
        color: ${({theme})=> theme.textBlack};
        padding: 2px;
        font-size: 14px;
        line-height: 17px;
    }
`;
