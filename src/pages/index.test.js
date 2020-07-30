import React from 'react';
import { render } from '@testing-library/react';
import Index from './index';
import * as Gatsby from 'gatsby';

beforeEach(() => {
	const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
	useStaticQuery.mockImplementation(() => ({
		site: {
			siteMetadata: {
				title: `Demetrio Alvarez`,
				description: `Demetrio Alvarez - Front End Developer`,
				siteUrl: 'https://demetrio.dev',
				author: `Demetrio Alvarez`,
				keywords: ['Demetrio', 'Alvarez', 'Portfolio', 'Developer', 'FrontEnd'],
			},
		},
	}));
});

describe('Index', () => {
	it('renders correctly', () => {
		const { container } = render(<Index />);
		expect(container).toMatchSnapshot();
	});
});
