import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media screen and (min-width: 500px) {
    gap: 22px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
`;
