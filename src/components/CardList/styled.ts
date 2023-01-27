import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 70px 60px;

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(217px, 1fr));
    gap: 22px;
    margin: 116px 200px;
  }
`;
