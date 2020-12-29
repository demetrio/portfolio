import React, { useState } from 'react';
import { HelpButton } from './help.style';

const Help = () => {
  const [help, setHelps] = useState(0);
  const label = ` ${help % 2 === 0 ? '🙂' : '🙃'} Hey! You clicked ${help} ${
    help === 1 ? 'time' : 'times'
  }!!`;

  return <HelpButton onClick={() => setHelps(help + 1)}>{label}</HelpButton>;
};

export default Help;
