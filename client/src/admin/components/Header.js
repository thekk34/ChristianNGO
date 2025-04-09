import React from 'react';
import {Link} from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
 

  return (
    <>
      <div className='mb-5'>
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: 'white',
            color: 'text.primary',
            boxShadow: 1,
          }}
        >
          <Toolbar sx={{ minHeight: '64px !important' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 600,
                color: 'primary.main',
              }}
            >
              NGO Admin Dashboard
            </Typography>
            <Box>
              <Button
                color="primary"
                startIcon={<LogoutIcon />}
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white',
                  },
                }}
              >
                <Link to="/logout"> Logout</Link>
               
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header; 