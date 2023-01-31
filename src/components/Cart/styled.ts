import styled from "styled-components";

export const Container = styled.aside`
    background: ${({theme})=> theme.bgPrimary};
    position: absolute;
    top: 0;
    right: 0;
    width: 330px;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    transition: all 0.5s ease-in-out;
    transform: translate(100%);

    @media screen and (min-width: 500px) {
        width: 486px;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 25px 13px 0px 32px;
        
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
    article {
        width: 250px;
        min-height: 60vh;
        margin: 0 32px;
        border: 1px solid white;
        overflow-y: scroll;
        overflow-x: hidden;
        

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
    padding: 44px 20px 35px 0px; 

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
    padding: 30px 0;
`;


export const Items = styled.ul`
    display: flex;
    flex-direction: column;
    width: 250px;
    min-height: 60vh;
    border: 1px solid white;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 0 32px;
    gap: 12px;

    @media screen and (min-width: 500px) {
        margin: 0 60px 0 47px;
        width: 380px;
    }
`;