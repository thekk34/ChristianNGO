import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  Grid,
  Avatar,
  IconButton,
  Stack,
} from '@mui/material';
import {
  Save as SaveIcon,
  PhotoCamera as PhotoCameraIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Language as LanguageIcon,
  Palette as PaletteIcon,
} from '@mui/icons-material';

const Settings = () => {
  const [settings, setSettings] = useState({
    organization: {
      name: 'NGO Learning Platform',
      email: 'contact@ngolearning.com',
      phone: '+1 234 567 8900',
      address: '123 Learning Street, Education City',
      logo: 'https://via.placeholder.com/150',
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      enrollmentAlerts: true,
      paymentAlerts: true,
    },
    security: {
      twoFactorAuth: false,
      loginAlerts: true,
      sessionTimeout: 30,
    },
    appearance: {
      darkMode: false,
      primaryColor: '#1976d2',
      secondaryColor: '#dc004e',
    },
  });

  const handleChange = (section, field, value) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Saving settings:', settings);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Organization Settings */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: '100%',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3,
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  src={settings.organization.logo}
                  sx={{ width: 64, height: 64, mr: 2 }}
                />
                <Box>
                  <Typography variant="h6">Organization Profile</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manage your organization's information
                  </Typography>
                </Box>
              </Box>

              <Stack spacing={2}>
                <TextField
                  label="Organization Name"
                  fullWidth
                  value={settings.organization.name}
                  onChange={(e) =>
                    handleChange('organization', 'name', e.target.value)
                  }
                />
                <TextField
                  label="Email"
                  fullWidth
                  type="email"
                  value={settings.organization.email}
                  onChange={(e) =>
                    handleChange('organization', 'email', e.target.value)
                  }
                />
                <TextField
                  label="Phone"
                  fullWidth
                  value={settings.organization.phone}
                  onChange={(e) =>
                    handleChange('organization', 'phone', e.target.value)
                  }
                />
                <TextField
                  label="Address"
                  fullWidth
                  multiline
                  rows={2}
                  value={settings.organization.address}
                  onChange={(e) =>
                    handleChange('organization', 'address', e.target.value)
                  }
                />
                <Button
                  variant="outlined"
                  startIcon={<PhotoCameraIcon />}
                  component="label"
                >
                  Change Logo
                  <input hidden accept="image/*" type="file" />
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Notifications Settings */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: '100%',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3,
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <NotificationsIcon sx={{ fontSize: 32, mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="h6">Notifications</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Configure your notification preferences
                  </Typography>
                </Box>
              </Box>

              <Stack spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.notifications.emailNotifications}
                      onChange={(e) =>
                        handleChange(
                          'notifications',
                          'emailNotifications',
                          e.target.checked
                        )
                      }
                    />
                  }
                  label="Email Notifications"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.notifications.pushNotifications}
                      onChange={(e) =>
                        handleChange(
                          'notifications',
                          'pushNotifications',
                          e.target.checked
                        )
                      }
                    />
                  }
                  label="Push Notifications"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.notifications.enrollmentAlerts}
                      onChange={(e) =>
                        handleChange(
                          'notifications',
                          'enrollmentAlerts',
                          e.target.checked
                        )
                      }
                    />
                  }
                  label="Enrollment Alerts"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.notifications.paymentAlerts}
                      onChange={(e) =>
                        handleChange(
                          'notifications',
                          'paymentAlerts',
                          e.target.checked
                        )
                      }
                    />
                  }
                  label="Payment Alerts"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Security Settings */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: '100%',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3,
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <SecurityIcon sx={{ fontSize: 32, mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="h6">Security</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manage your security settings
                  </Typography>
                </Box>
              </Box>

              <Stack spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.security.twoFactorAuth}
                      onChange={(e) =>
                        handleChange('security', 'twoFactorAuth', e.target.checked)
                      }
                    />
                  }
                  label="Two-Factor Authentication"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.security.loginAlerts}
                      onChange={(e) =>
                        handleChange('security', 'loginAlerts', e.target.checked)
                      }
                    />
                  }
                  label="Login Alerts"
                />
                <TextField
                  label="Session Timeout (minutes)"
                  type="number"
                  fullWidth
                  value={settings.security.sessionTimeout}
                  onChange={(e) =>
                    handleChange('security', 'sessionTimeout', e.target.value)
                  }
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Appearance Settings */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: '100%',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3,
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PaletteIcon sx={{ fontSize: 32, mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="h6">Appearance</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Customize the look and feel
                  </Typography>
                </Box>
              </Box>

              <Stack spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.appearance.darkMode}
                      onChange={(e) =>
                        handleChange('appearance', 'darkMode', e.target.checked)
                      }
                    />
                  }
                  label="Dark Mode"
                />
                <TextField
                  label="Primary Color"
                  fullWidth
                  value={settings.appearance.primaryColor}
                  onChange={(e) =>
                    handleChange('appearance', 'primaryColor', e.target.value)
                  }
                />
                <TextField
                  label="Secondary Color"
                  fullWidth
                  value={settings.appearance.secondaryColor}
                  onChange={(e) =>
                    handleChange('appearance', 'secondaryColor', e.target.value)
                  }
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSave}
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default Settings; 