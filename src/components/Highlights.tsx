import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import CameraFrontIcon from '@mui/icons-material/CameraFront';
import NfcIcon from '@mui/icons-material/Nfc';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';


const items = [
  {
    icon: <DocumentScannerIcon fontSize={"large"}/>,
    title: 'Document Type',
    description:
      'Springwood uses for user identification a biometric, sometimes referred to as an electronic, passport or ID. A government issued document with an embedded secure chip that can be read and verified via NFC and containing MRZ (Machine Readable Zone).',
  },
  {
    icon: <CameraFrontIcon fontSize={"large"}/>,
    title: 'User DB Search',
    description:
      'Additionally, it is possible to extract, verify, and confirm user’s residential address in a variety of countries as well as companies where the user is a director, a shareholder, or a person with other significant control. A user can be automatically checked against a variety of databases, including sanction lists, adverse media, antifraud and other industry specific requirements.',
  },
  {
    icon: <NfcIcon fontSize={"large"}/>,
    title: 'Reading MRZ & NFC',
    description:
      'Reading MRZ and the embedded chip using NFC, Springwood extracts personal information about the document holder along with security features that protect the integrity of the information. At the next step, a user takes selfie using special liveness test AI-driven technology.',
  },
  {
    icon: <DatasetLinkedIcon fontSize={"large"}/>,
    title: 'User Profile',
    description:
      'Using open-source information such as Internet and social media you can build a user’s connection tree up to 7 levels as a standard and then, as an example in the financial industry, use it for building a decision-making fraud prevention tree or vector matrix.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="features"
      sx={{
        pt: { xs: 4, sm: 20 },
        pb: { xs: 8, sm: 20 },
          bgcolor: 'hsl(28,100%,94.9%)',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 4 },
        }}
      >
          <Typography component="h2" variant="h3" sx={{ color: 'text.secondary' }}>
              How the process works?
          </Typography>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={2}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'hsla(220, 25%, 25%, .3)',
                  background: 'transparent',
                  backgroundColor: 'hsl(28,100%,94.9%)',
                  boxShadow: 'none',
                }}
              >
                <Box>{item.icon}</Box>
                <div>
                  {/*<Typography component="h2" variant="h5" gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                    <br/>*/}
                  <Typography component="h2" variant="h6">
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
