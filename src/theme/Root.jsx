import React from 'react';
import App from '@site/src/components/App/index';

// Default implementation, that you can customize
export default function Root({ children }) {
  return <>
    <App children={children} />
  </>;
}