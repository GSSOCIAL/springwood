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
      'AI automatically will recognise document types and providers in accordance with your policies, procedures, and local regulatory requirements.',
  },
  {
    icon: <CameraFrontIcon fontSize={"large"}/>,
    title: 'Camera',
    description:
      'Show the passport front, the MRZ area of the ID Card, bank statement, utility bill, or a bank statement to your camera. Make a selfie with automatic liveness test.',
  },
  {
    icon: <NfcIcon fontSize={"large"}/>,
    title: 'Use NFC',
    description:
      'The data is received by scanning NFC chip on your ID. Get biometric photo and more information with chip reading and compares with available databases and selfie.',
  },
  {
    icon: <DatasetLinkedIcon fontSize={"large"}/>,
    title: 'Securely request and receive documents',
    description:
      'Automated AML checks and screening against required databases, with fuzzy logic in 41 languages. AI driven keywords search in transactions and supporting documents.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 20 },
        pb: { xs: 8, sm: 20 },
        color: 'white',
        bgcolor: 'hsl(220, 30%, 2%)',
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
                  backgroundColor: 'grey.900',
                  boxShadow: 'none',
                }}
              >
                <Box sx={{ opacity: '50%'}}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
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
