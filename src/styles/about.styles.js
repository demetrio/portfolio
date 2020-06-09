import styled from '@emotion/styled';

import dimensions from './dimensions';
import colors from './colors';

export const Welcome = styled.h1`
	font-size: 2.8em;
	line-height: 1.45;
	font-weight: 800;
`;

export const Subtitle = styled.h2`
	border-bottom: 1px solid black;
	margin: 1.45rem 0;
`;

export const Info = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1em;

	@media (max-width: ${dimensions.maxwidthTablet}px) {
		grid-template-columns: 1fr;
	}
`;

export const SkillsTable = styled.p`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 0.15fr 1fr;

	span {
		margin-left: 0.25em;
	}
`;

export const Title = styled.span`
	font-weight: bold;
	text-align: right;
`;

export const JobTitle = styled.h3`
	margin: 0;
`;

export const SubDate = styled.h4`
	color: ${colors.gray800};
	font-weight: 300;
`;
