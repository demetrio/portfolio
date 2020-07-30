import React from 'react';
import Header from './header';
import { render } from '@testing-library/react';

describe('Header', () => {
	it('renders correctly', () => {
		const { container } = render(<Header siteTitle="Default Starter" />);
		expect(container).toMatchSnapshot();
		expect(container).toBeDefined();
	});
});
