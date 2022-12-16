import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xs">
        <Toolbar disableGutters>
            <Box>
              <Typography>
                LOGO
              </Typography>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
