import styled from '@emotion/styled';
import colors from '../styles/colors';

export const Project = styled.div`
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 50, 0.15) 0 0 5px 1px;
  border-radius: 5px;
  overflow: auto;
`;

export const ProjectImage = styled.div`
  border-bottom: 7px solid ${colors.purple800};
`;

export const ProjectInfo = styled.div`
  padding: 1em;
  h3 {
    margin-bottom: 10px;
  }
`;

export const TagContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

export const Url = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Tag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  text-align: center;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  text-decoration: none;
  color: black;
  width: 100%;

  &:hover {
    color: ${colors.purple600};
  }
  span {
    display: inline-block;
    padding-right: 0.5rem;
  }
`;
