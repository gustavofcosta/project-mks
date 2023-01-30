import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;

  @media screen and (min-width: 500px) {
    gap: 22px;
    grid-template-columns: repeat(auto-fill, minmax(217px, 1fr));
  }
`;
