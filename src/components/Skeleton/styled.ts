import styled from "styled-components";

export const Container =  styled.div<{height: number| string, width: number| string, borderRadius: number| string, marginTop: number| string}>`
    background-image: linear-gradient(-90deg, rgba(217,213,213,1) 0%, rgba(170,166,166,1) 50%, rgba(217,213,213,1) 100%);
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;
    height: ${({height})=> height ? `${height}px` : "0"};
    width: ${({width})=> width ? `${width}px` : "0"};
    margin-top: ${({marginTop})=> marginTop ? `${marginTop}px` : "0"};
    border-radius: ${({borderRadius})=> borderRadius ? `${borderRadius}px` : "0"};

    @keyframes shimmer {
       0% {
        background-position: 0% 0%;
       } 
       100% {
        background-position: -135% 0%;
       }
    }
`;