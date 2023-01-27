import styled from 'styled-components';

export const MaxWidth = styled.div`
  width: 1500px;
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bgDefault};
`;
