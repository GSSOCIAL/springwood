import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "@mui/material/Link";


import SpringwoodIcon from './SpringwoodIcon';


interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 2 }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'hsl(28,58%,88%)',
            boxShadow:
              '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)',
            ...theme.applyStyles('dark', {
              bgcolor: 'hsla(220, 0%, 0%, 0.7)',
              boxShadow:
                '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)',
            }),
          })}
        >
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0}}>
            <SpringwoodIcon />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                    variant="text"
                    color="info"
                    size="small"
                    href={"/"}
              >
                Home
              </Button>
              
              <Button
                variant="text"
                color="info"
                size="small"
                href={"/#features"}
                onClick={() => window.location.replace('#features')}
              >
                Features
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                href={"/#benefits"}
                onClick={() => window.location.replace('#benefits')}
              >
                Benefits
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                href={"/#sectors"}
                onClick={() => window.location.replace('#sectors')}
              >
                Sectors
              </Button>
              <Button
                    variant="text"
                    color="info"
                    size="small"
                    href={"/#contacts"}
                    onClick={() => window.location.replace('#contacts')}
              >
                Contacts
              </Button>
            </Box>
          </Box>
          <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: 0.5,
                  alignItems: 'center',
                }}
          >
 {/*           <ToggleColorMode
                  data-screenshot="toggle-mode"
                  mode={mode}
                  toggleColorMode={toggleColorMode}
            />*/}
            <Button href={"/SignIn"} variant="text" size="small" color="info">
              Sign in
            </Button>
{/*            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button>*/}
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                {/*<Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>*/}
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Link href={"/"} onClick={() => window.location.replace('#intro')}>Home</Link>
                </MenuItem>
               
                <MenuItem>
                  <Link href={"/#features"} onClick={() => window.location.replace('#features')}>Features</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/#benefits"} onClick={() => window.location.replace('#benefits')}>Benefits</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/#sectors"} onClick={() => window.location.replace('#sectors')}>Sectors</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/#contacts"} onClick={() => window.location.replace('#sectors')}>Contacts</Link>
                </MenuItem>
                {/*<MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>*/}
                <MenuItem>
                  <Button href={"/SignIn"} color="info" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
