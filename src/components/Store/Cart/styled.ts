import styled from "styled-components";

export const Container =  styled.aside<{isOpen :boolean}>`
    background: ${({theme})=> theme.bgPrimary};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 330px;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    transition: all 0.5s ease-in-out;
    transform: ${({isOpen}) => isOpen ? "translate(0%)" : "translate(100%)" } ;


    @media screen and (min-width: 500px) {
        width: 486px;
    }

`;

export const WrapperProducts = styled.ul`
  overflow-y: scroll;

  ::-webkit-scrollbar {
  width: 10px;             
  }

  ::-webkit-scrollbar-track {
    background: white;   
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme})=> theme.bgPrimary};
    border-radius: 8px;      
  }
`;

export const WrapperTitle = styled.div`
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
`;


export const TotalCart = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 40px;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    font-size: 28px;
    color: ${({theme})=> theme.textWhite};

    @media screen and (min-width: 500px) {
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
    cursor: pointer;
    border: none;
    transition: all 0.4s ease-in-out;

    :hover {
        background: ${({theme})=> theme.bgPrice};

    }
`;

export const Btn = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    transition: all 0.4s ease-in-out;

    :hover {
        transform: scale(1.15);
    }
`;

export const WrapperEmpty = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: ${({theme})=> theme.textWhite};
`;