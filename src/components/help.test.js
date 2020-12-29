import React from 'react';
import Help from './help';
import { render } from '@testing-library/react';

describe('Help', () => {
  it('renders correctly', () => {
    const { container } = render(<Help />);
    expect(container).toMatchSnapshot();
    expect(container).toBeDefined();
  });
});
