import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background:  ${({theme})=> theme.bgFooter};
  color: ${({theme})=> theme.textBlack};
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;