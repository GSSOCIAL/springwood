import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentsIcon from '@mui/icons-material/Payments';
import SavingsIcon from '@mui/icons-material/Savings';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

const items = [
  {
    icon: <AccountBalanceIcon fontSize={"large"} sx={{ color: 'grey.900' }}/>,
    title: 'Banks and Financial institutions',
  },
    {
        icon: <LocationCityIcon fontSize={"large"} sx={{ color: 'grey.900' }}/>,
        title: 'Regulators',
    },
    {
        icon: <LocalPoliceIcon fontSize={"large"} sx={{ color: 'grey.900' }}/>,
        title: 'Law enforcement Agencies',
    },
];

export default function Sectors() {
  return (
    <Box
      id="sectors"
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
              Sectors
          </Typography>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                  backgroundColor: 'green.50',
                  boxShadow: 'none',
                }}
              >
                <Box alignItems="center" justifyContent="center" display="flex" sx={{ opacity: '100%'}}>{item.icon}</Box>
                  <Box alignItems="center" justifyContent="center" display="flex" sx={{ opacity: '100%'}}>
                      <Typography component="h2" variant="h5" sx={{ color: 'grey.900'  }}>
                          {item.title}
                      </Typography>
                  </Box>
                
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
