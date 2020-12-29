import styled from '@emotion/styled';
import dimensions from '../styles/dimensions';

export const Welcome = styled.h1`
  font-size: 2.8em;
  line-height: 1.45;
  font-weight: 800;
`;

export const ListProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr;
  }
`;
