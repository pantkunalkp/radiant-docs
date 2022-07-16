import React from 'react';
import Button from '@intugine-technologies/radiant/Button';
import Box from '@intugine-technologies/radiant/Box';
import { CssVarsProvider } from '@intugine-technologies/radiant';
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  CssVarsProvider,
  Button,
  Box
};
export default ReactLiveScope;
