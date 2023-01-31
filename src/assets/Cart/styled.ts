import styled from "styled-components";

export const Container = styled.aside`
    background: ${({theme})=> theme.bgPrimary};
    position: fixed;
    top: 0;
    right: 0;
    width: 330px;
    height: 100%;
    display: grid;
    transition: all 0.5s ease-in-out;
    transform: translate(0%);

    @media screen and (min-width: 500px) {
        width: 486px;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 25px 13px 25px 32px;
        
        @media screen and (min-width: 500px) {
            margin: 36px 22px 36px 47px;
        }

        h2 {
            font-weight: 700;
            font-size: 27px;
            line-height: 33px;
            color: ${({theme})=> theme.textWhite};
            max-width: 178px;
        }
    }

    // ul component cartItems
    ul {
        width: 250px;
        height: 60vh;
        margin: 0 32px;
        border: 1px solid white;

        @media screen and (min-width: 500px) {
            margin: 0 60px 0 47px;
            width: 380px;
        }
    }
`;

export const TotalCart = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: ${({theme})=> theme.textWhite};
    padding: 44px 20px 20px 0px; 

    @media screen and (min-width: 500px) {
        padding: 20px 40px 5px 0px;
    }
`;

export const Button = styled.button`
    background: ${({theme})=> theme.bgBlack};
    color: ${({theme})=> theme.textWhite};
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    text-align: center;
    padding: 40px 0;
`;
