import React from "react";
import Button from "@intugine-technologies/radiant/Button";
import Box from "@intugine-technologies/radiant/Box";
import Switch from "@intugine-technologies/radiant/Switch";
import Radio from "@intugine-technologies/radiant/Radio";
import Chip from "@intugine-technologies/radiant/Chip";
import ChipDelete from "@intugine-technologies/radiant/ChipDelete";
import { CssVarsProvider } from "@intugine-technologies/radiant";

const StyledBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {children}
    </Box>
  )
}

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  CssVarsProvider,
  Button,
  Box,
  StyledBox,
  Switch,
  Radio,
  Chip,
  ChipDelete,
};
export default ReactLiveScope;
