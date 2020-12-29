import styled from '@emotion/styled';
import dimensions from '../styles/dimensions';

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: ${dimensions.maxwidthDesktop}px;
  padding-left: ${dimensions.paddingHorizontalDesktop}em;
  padding-right: ${dimensions.paddingHorizontalDesktop}em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${dimensions.paddingHorizontalTablet}em;
    padding-right: ${dimensions.paddingHorizontalTablet}em;
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-left: ${dimensions.paddingHorizontalMobile}em;
    padding-right: ${dimensions.paddingHorizontalMobile}em;
  }
`;

export const Hero = styled.div`
  padding-top: 2em;
  padding-bottom: 3em;
  margin-bottom: 6em;
`;
