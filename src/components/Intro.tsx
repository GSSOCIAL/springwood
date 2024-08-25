import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/system';
import Button from "@mui/material/Button";

export default function Intro() {
  const theme = useTheme();
  
  return (
        <Box
              id="intro" sx={{
          pt: { xs: 4, sm: 25 },
          pb: { xs: 8, sm: 30 },
            
            bgcolor: 'hsl(28,100%,94.9%)',
        }}>
          <Container
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: { xs: 4, sm: 8 },
                }}
          >
            <Box
                  sx={{
                    width: { sm: '80%'},
                    textAlign: { sm: 'left', md: 'center' },
                  }}
            >
              <Typography component="h2" variant="h3" sx={{ color: 'text.secondary' }}>
                  Springwood Capital (UK) provides AI-driven solutions for remote client identification, authorisation and fraud prevention for financial institutions and law enforcement.
              </Typography>
                <br/>
                <br/>
                <Typography component="h2" variant="h5" sx={{ color: 'text.secondary' }}>
                    Springwood provides solutions for automatic identity validation using comparison of biometric passports or IDs with liveness tested selfies, government and commercial databases to build a decision-making fraud prevention tree or matrix, significantly reducing cost, human errors and manual operations.
                </Typography>

            </Box>
          </Container>
        </Box>
  );
}
