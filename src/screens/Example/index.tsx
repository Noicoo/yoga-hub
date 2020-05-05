import React, { useState } from 'react';
import ExampleComponent from './Example.component';

const Example = () => {
  const [displayLink, setDisplayLink] = useState(true);
  const toggleLink = () => setDisplayLink(!displayLink);

  return <ExampleComponent displayLink={displayLink} onClick={toggleLink} />;
};

export default Example;
