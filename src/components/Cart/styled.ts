import styled from "styled-components";

export const Container = styled.aside`
    background: ${({theme})=> theme.bgPrimary};
    position: fixed;
    top: 0;
    right: 0;
    width: 330px;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    transition: all 0.5s ease-in-out;
    transform: translate(0%);

    @media screen and (min-width: 676px) {
        width: 486px;
    }

    div {
        display: flex;
        justify-content: space-between;
        margin: 25px 13px 25px 32px;

        h2 {
            font-weight: 700;
            font-size: 27px;
            line-height: 33px;
            color: ${({theme})=> theme.textWhite};
            max-width: 178px;
        }
    }

    ul {
        height: 60vh;
        margin: 0 32px;
        background-color: white;
    }
`;

export const TotalCart = styled.div`
    
`;


{/*

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    box-shadow: var(--clr-red-dark);
    transition: var(--transition);
    transform: translate(-100%);
  }
  .show-sidebar {
    transform: translate(0);
  }
*/}