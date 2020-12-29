import styled from '@emotion/styled';
import colors from '../styles/colors';
import dimensions from '../styles/dimensions';

export const MobileNavContainer = styled.div`
  display: block;
  visibility: visible;

  @media (min-width: ${dimensions.maxwidthMobile}px) {
    display: none;
    visibility: hidden;
  }
`;

export const MenuButton = styled.button`
  z-index: 30;
  top: -5px;
  position: relative;
  background: transparent;
  border: none;
  :hover:not(.touch),
  :focus {
    background: transparent;
    border: none;
    outline: none;
  }

  cursor: pointer;
  border-radius: 4px;
  border: none;
  padding: 8px 15px;
`;

export const XMenuButton = styled.div`
  width: 24px;
  height: 2px;
  background: ${colors.black600};
  position: absolute;
  left: 0;
  ${props =>
    props.isToggledOn
      ? 'background: transparent'
      : `background: ${props.color}`};
  transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  ::before {
    content: '';
    top: -8px;
    width: 24px;
    height: 2px;
    background: ${colors.black600};
    position: absolute;
    left: 0;
    ${props =>
      props.isToggledOn
        ? 'transform: rotate(45deg); top: 0; '
        : 'transform: rotate(0)'};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }
  ::after {
    top: 8px;
    content: '';
    width: 24px;
    height: 2px;
    background: ${colors.black600};
    position: absolute;
    left: 0;
    ${props =>
      props.isToggledOn
        ? 'transform: rotate(-45deg); top: 0;'
        : 'transform: rotate(0)'};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }
`;

export const MainContainer = styled.div`
  position: absolute;
  z-index: 20;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${colors.purple600};
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  a {
    color: white;
    font-size: 22px;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    :hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .current-page {
    background: rgba(0, 0, 0, 0.15);
  }
`;
