import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 70px 40px;

  @media screen and (min-width: 500px) {
    gap: 22px;
    margin: 116px 200px;
  }
`;
