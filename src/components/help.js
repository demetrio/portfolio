import React, { useState } from 'react';
import styled from '@emotion/styled';

const Help = () => {
	const [help, setHelps] = useState(0);
	const label = ` ${help % 2 === 0 ? '🙂' : '🙃'} Hey! You clicked ${help} ${help === 1 ? 'time' : 'times'}!!`;

	const HelpButton = styled.button`
		font-family: Roboto, -apple-system, Helvetica Neue, sans-serif;
		background: rebeccapurple;
		border: none;
		color: white;
		padding: 0.75rem 1rem;
		font-size: 1.25rem;
	`;

	return <HelpButton onClick={() => setHelps(help + 1)}>{label}</HelpButton>;
};

export default Help;
