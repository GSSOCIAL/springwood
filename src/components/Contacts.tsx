import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/system';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function Contacts() {
  const theme = useTheme();
  
  return (
        <Box
              id="contacts" sx={{
          pt: { xs: 4, sm: 30 },
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
                <Typography component="h2" variant="h3">
                    Contacts
                </Typography>
                <br/>
                <Typography component="h2" variant="h5" sx={{ color: 'text.secondary', textAlign: { sm: 'left', md: 'left' }}}>
                    Springwood Capital (UK)
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2, color: 'text.secondary', textAlign: { sm: 'left', md: 'left' } }}>
                    Office Address
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, textAlign: { sm: 'left', md: 'left' }}}>
                    45 Berkeley Court, London, NW1 5NB, United Kingdom
                </Typography>
                <Typography component="h2" variant="h5" sx={{ color: 'text.secondary', textAlign: { sm: 'left', md: 'left' } }}>
                    <Link href={"/ContactUs"}>Contact Us</Link>
                </Typography>
            </Box>
          </Container>
        </Box>
  );
}
