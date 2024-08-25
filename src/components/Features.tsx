import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/system';
import Grid from "@mui/material/Grid";


export default function Features() {
  const theme = useTheme();
  
  return (
        <Box
              id="features" sx={{
          pt: { xs: 4, sm: 20 },
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
                    width: { sm: '100%'},
                    textAlign: { sm: 'left', md: 'center' },
                  }}
            >
                <Typography component="h2" variant="h3" sx={{ color: 'text.secondary' }}>
                    How the process works?
                </Typography>
                <br/>
                <Grid container spacing={3} sx={{
                    textAlign: { sm: 'left', md: 'left' },
                }}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h5" sx={{ color: 'text.secondary' }} style={{whiteSpace: 'pre-line'}}>
                            Springwood uses for user identification a biometric, sometimes referred to as an electronic, passport or ID. A government issued document with an embedded secure chip that can be read and verified via NFC and containing MRZ (Machine Readable Zone).{"\n"}{"\n"}
                            Reading MRZ and the embedded chip using NFC, Springwood extracts personal information about the document holder along with security features that protect the integrity of the information. At the next step, a user takes selfie using special liveness test AI-driven technology.{"\n"}{"\n"}
                            Additionally, it is possible to extract, verify, and confirm user’s residential address in a variety of countries as well as companies where the user is a director, a shareholder, or a person with other significant control. A user can be automatically checked against a variety of databases, including sanction lists, adverse media, antifraud and other industry specific requirements.{"\n"}{"\n"}
                            Using open-source information such as Internet and social media you can build a user’s connection tree up to 7 levels as a standard and then, as an example in the financial industry, use it for building a decision-making fraud prevention tree or vector matrix.
                        </Typography>
                    </Grid>
                </Grid>
              
            </Box>
          </Container>
        </Box>
  );
}
