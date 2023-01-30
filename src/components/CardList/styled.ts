import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 70px 100px;

  @media screen and (min-width: 500px) {
    gap: 22px;
    margin: 116px 100px;
    grid-template-columns: repeat(auto-fill, minmax(217px, 1fr));
  }
`;
