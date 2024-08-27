import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials';
import Intro from './components/Intro'
import Contacts from './components/Contacts'
import Sectors from'./components/Sectors'
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';
import ContactUs from "./components/ContactUs";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}



function ToggleCustomTheme({
  showCustomTheme,
  toggleCustomTheme,
}: ToggleCustomThemeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Toggle design language"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton data-screenshot="toggle-default-theme" value={false}>
          Material Design 2
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default function LandingPage() {
    const [open, setOpen] = React.useState(false);
    
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const location = useLocation();
    useEffect(() => {
          scrollToSection(location.hash.replace("#",""))
    });
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
        <Box marginTop={'0px'}>
          <Divider />
          <Intro />
        <Divider />
        <Highlights />
        <Divider />
        <Benefits />
          <Divider />
          <Sectors />
          <Divider/>
          <LogoCollection/>
          <Divider/>
            <Contacts/>
            <Divider/>
        <Footer />
      </Box>
    
  );
}
