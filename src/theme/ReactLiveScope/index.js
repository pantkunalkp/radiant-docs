import React from "react";
import Button from "@intugine-technologies/radiant/Button";
import Box from "@intugine-technologies/radiant/Box";
import Switch from "@intugine-technologies/radiant/Switch";
import Radio from "@intugine-technologies/radiant/Radio";
import Chip from "@intugine-technologies/radiant/Chip";
import ChipDelete from "@intugine-technologies/radiant/ChipDelete";
import Checkbox from "@intugine-technologies/radiant/Checkbox";
import Typography from "@intugine-technologies/radiant/Typography";
import IconButton from "@intugine-technologies/radiant/IconButton";
import Breadcrumbs from "@intugine-technologies/radiant/Breadcrumbs";
import Link from "@intugine-technologies/radiant/Link";
import Sheet from "@intugine-technologies/radiant/Sheet";
import TextField from "@intugine-technologies/radiant/TextField";
import Avatar from "@intugine-technologies/radiant/Avatar";
import Badge from "@intugine-technologies/radiant/Badge";
import Card from "@intugine-technologies/radiant/Card";
import CardCover from "@intugine-technologies/radiant/CardCover";
import CardContent from "@intugine-technologies/radiant/CardContent";
import CardOverflow from "@intugine-technologies/radiant/CardOverflow";
import AspectRatio from "@intugine-technologies/radiant/AspectRatio";
import Menu from "@intugine-technologies/radiant/Menu";
import MenuItem from "@intugine-technologies/radiant/MenuItem";
import MenuList from "@intugine-technologies/radiant/MenuList";
import Select from "@intugine-technologies/radiant/Select";
import Option from "@intugine-technologies/radiant/Option";
import Tabs from "@intugine-technologies/radiant/Tabs";
import Tab from "@intugine-technologies/radiant/Tab";
import TabList from "@intugine-technologies/radiant/TabList";
import TabPanel from "@intugine-technologies/radiant/TabPanel";
import { CssVarsProvider } from "@intugine-technologies/radiant";
import { Dock as DockIcon, TruckMoving as TruckMovingIcon, Epod as EpodIcon, Bell as BellIcon, Aeroplane1 as Aeroplane1Icon, Cross as CrossIcon } from '@intugine-technologies/radiant-icons'

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
  );
};

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  CssVarsProvider,
  AspectRatio,
  Button,
  Box,
  StyledBox,
  Switch,
  Radio,
  Chip,
  ChipDelete,
  Checkbox,
  Typography,
  IconButton,
  Breadcrumbs,
  Link,
  Sheet,
  TextField,
  Avatar,
  Badge,
  Card,
  CardCover,
  CardContent,
  CardOverflow,
  Menu,
  MenuItem,
  MenuList,
  DockIcon,
  TruckMovingIcon,
  EpodIcon,
  BellIcon,
  Aeroplane1Icon,
  CrossIcon,
  Select,
  Option,
  Tabs,
  Tab,
  TabList,
  TabPanel
};
export default ReactLiveScope;
