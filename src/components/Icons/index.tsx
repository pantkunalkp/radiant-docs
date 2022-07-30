import React from 'react';
import clsx from 'clsx';
import Box from '@intugine-technologies/radiant/Box';
import IconButton from '@intugine-technologies/radiant/IconButton';
import Typography from '@intugine-technologies/radiant/Typography';
import { Sheet, TextField } from '@intugine-technologies/radiant';

import * as Icons from '@intugine-technologies/radiant-icons';
import styled from '@mui/system/styled';
import ModalUnstyled from '@mui/base/ModalUnstyled';


const BackdropUnstyled = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default function IconComponent() {
  const [open, setOpen] = React.useState(false);
  const [selectedIcon, setSelectedIcon] = React.useState({ component: null, name: null })
  const [searchKey, setSearchKey] = React.useState([])

  const handleOpen = (component: React.Component, name: string) => {
    setSelectedIcon({ component, name })
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const handleSearchIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value
    if (key.length < 3) {
      setSearchKey([key])
      return
    }
    fetch(`https://api.datamuse.com/words?rel_syn=${key}`)
      .then(res => res.json())
      .then(
        res => {
          setSearchKey([key, ...res.map((syn: any) => syn.word)])
        }
      )
      .catch(
        () => setSearchKey([key])
      )
  }

  return (
    <>
      <TextField
        placeholder="Type in here…"
        fullWidth
        startDecorator={<Icons.Search fontSize="xl" />}
        onChange={(e) => handleSearchIcon(e)}
      />
      <Box sx={{
        mt: 2,
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
      >
        {
          Object.keys(Icons).filter(name =>
            !searchKey.length
            || searchKey.some(key => name.toLowerCase().includes(key.toLowerCase()))).map(name => {
              const RadIcon = Icons[name]
              return (
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: '96px' }}>
                  <Box sx={{ m: 'auto' }}>
                    <IconButton
                      key={name}
                      size="lg"
                      variant="plain"
                      onClick={() => handleOpen(RadIcon, name)}
                    >
                      <RadIcon />
                    </IconButton>
                  </Box>
                  <Typography sx={{ m: 'auto' }} level="body2">{name}</Typography>
                </Box>
              )
            })
        }
      </Box>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        components={{ Backdrop }}
      >
        <Sheet sx={{
          width: 400,
          // bgcolor: 'white',
          // border: '2px solid currentColor',
          padding: '16px 32px 24px 32px',
        }}>
          <Typography level='h2'>{selectedIcon.name}</Typography>
          <Box>
            <code>
              import x from 'fs'
            </code>
            <Typography level='body1'>
              <selectedIcon.component htmlColor="red" />
            </Typography>
          </Box>
        </Sheet>
      </Modal>
    </>
  )
}