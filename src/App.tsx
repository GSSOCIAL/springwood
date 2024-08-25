import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, useParams, useNavigate} from "react-router-dom";
import LandingPage from "./LandingPage";
import ContactUs from "./components/ContactUs";
import AppAppBar from "./components/AppAppBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {PaletteMode} from "@mui/material";
import getLPTheme from "./getLPTheme";
import CssBaseline from "@mui/material/CssBaseline";
import SignIn from "./components/SignIn";


function App() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const LPtheme = createTheme(getLPTheme(mode));
    const defaultTheme = createTheme({ palette: { mode } });
    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };
    
    const toggleCustomTheme = () => {
        setShowCustomTheme((prev) => !prev);
    };
  return (
    <div className="App">
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
            <CssBaseline />
     <Router>
         <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
       <Routes>
           <Route path="/" element={<LandingPage />} />
           <Route path="/ContactUs" element={<ContactUs />} />
           <Route path="/SignIn" element={<SignIn />} />
       </Routes>
     </Router>
        </ThemeProvider>
    </div>
  );
}

export default App;
