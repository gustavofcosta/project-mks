import styled from "styled-components";

export const ListItems = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({theme})=> theme.bgWhite};
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    margin-top: 20px;
    width: 250px;
    margin: 12px auto;
    padding: 0 20px 0 20px;

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


    @media screen and (min-width: 500px) {
        flex-direction: row;
        justify-content: center;
        gap: 5px;
        width: 380px;
        height: 95px;

        img {
            width: 50px;
            height: 70px;
        }

    }
`;

export const Amount = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    margin: 0 20px 10px 0;
`;

export const WrapperBtn = styled.div`
    border: 1px solid ${({theme})=> theme.borderDefault};
    color: ${({theme})=> theme.textBlack};
    
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
    }
`;

