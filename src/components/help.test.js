import React from 'react';
import renderer from 'react-test-renderer';
import Help from './help';

describe('Header', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<Help />).toJSON();
		expect(tree).toMatchSnapshot();
		expect(tree).toBeDefined();
	});
});
