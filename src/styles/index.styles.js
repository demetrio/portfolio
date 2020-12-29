import dimensions from './dimensions';
import colors from './colors';
import styled from '@emotion/styled';

export const Welcome = styled.h1`
  font-size: 2.8em;
  line-height: 1.45;
  font-weight: 800;
  max-width: ${dimensions.maxWidthIndex}px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    font-size: 2em;
  }

  a {
    text-decoration: none;
    transition: all 100ms ease-in-out;
    &:nth-of-type(1) {
      color: ${colors.teal500};
    }
    &:nth-of-type(2) {
      color: ${colors.pink500};
    }
    &:nth-of-type(3) {
      color: ${colors.orange500};
    }
    &:nth-of-type(4) {
      color: ${colors.purple500};
    }
    &:nth-of-type(5) {
      color: ${colors.blue500};
    }
    &:hover {
      cursor: pointer;
      transition: all 100ms ease-in-out;
      &:nth-of-type(1) {
        color: ${colors.teal600};
        background-color: ${colors.teal200};
      }
      &:nth-of-type(2) {
        color: ${colors.pink600};
        background-color: ${colors.pink200};
      }
      &:nth-of-type(3) {
        color: ${colors.orange600};
        background-color: ${colors.orange200};
      }
      &:nth-of-type(4) {
        color: ${colors.purple600};
        background-color: ${colors.purple200};
      }
      &:nth-of-type(5) {
        color: ${colors.blue600};
        background-color: ${colors.blue200};
      }
    }
  }
`;
