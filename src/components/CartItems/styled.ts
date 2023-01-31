import styled from "styled-components";

export const ListItems = styled.li`
    border-radius: 8px;
    background: ${({theme})=> theme.bgWhite};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border: 1px solid red;
    min-width: 250px;
    min-height: 220px;

    @media screen and (min-width: 500px) {
        min-width: 380px;
        min-height: 95px;
    }
`;

export const ContentImg = styled.div`
    border-radius: inherit;
    padding-top: 10px;

    img {
        height: 90px;
        border-radius: inherit;
        object-fit: contain;
    }
`;

export const ContentInfo = styled.div`
    border: 1px solid red;
  ;


    p {
        color: ${({theme})=> theme.textPrimary};
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        border: 1px solid red;
        text-align: center;
    }

    div {
        border: 1px solid red;
    }
`;

export const Amount = styled.div`
    border: 1px solid red;
`