import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function ContactUs() {
  
  return (
    <Box id="contactus" sx={{ py: 4 }}>
      
      <Box
            sx={{
              width: { sm: '100%'},
              textAlign: { sm: 'left', md: 'center' },
            }}
      >
        <iframe width="100%" height="1400px"
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=pO9Ut7jymUCZo3NJkTV0eMXQTICZq29Opg-yvtU1wKFUM0dKQTlLOVBRVlAwNTJZMVVQN1RIMTNPUS4u&embed=true"
                allowFullScreen></iframe>
      </Box>
    </Box>
  );
}
