import { createGlobalStyle } from 'styled-components';
import { device } from './Device';
export const GlobalStyles = createGlobalStyle`
  #root {
    position: relative;
  margin: auto;
  text-align: center;
    @media ${device.mobile} {
    min-width: 360px;
  }
  @media ${device.tablet} {
    width: 768px;
  }
  @media ${device.desktop} {
    width: 100%;
  }

  }
`;