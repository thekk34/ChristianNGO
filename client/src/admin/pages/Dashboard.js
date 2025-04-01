import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Group as GroupIcon,
  School as SchoolIcon,
  Assessment as AssessmentIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  ResponsiveContainer,
} from 'recharts';

// Mock data for charts
const enrollmentData = [
  { name: 'Jan', enrollments: 65 },
  { name: 'Feb', enrollments: 78 },
  { name: 'Mar', enrollments: 90 },
  { name: 'Apr', enrollments: 85 },
  { name: 'May', enrollments: 95 },
  { name: 'Jun', enrollments: 100 },
];

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Enrollments',
      value: '1,234',
      change: '+12%',
      icon: <GroupIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      color: '#1976d2',
    },
    {
      title: 'Active Courses',
      value: '12',
      change: '+2',
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#2e7d32' }} />,
      color: '#2e7d32',
    },
    {
      title: 'Completion Rate',
      value: '85%',
      change: '+5%',
      icon: <AssessmentIcon sx={{ fontSize: 40, color: '#ed6c02' }} />,
      color: '#ed6c02',
    },
    {
      title: 'Revenue Growth',
      value: '₹45,678',
      change: '+8%',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
      color: '#9c27b0',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Dashboard Overview
        </Typography>
        <Tooltip title="Refresh Data">
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Grid container spacing={4}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3,
                },
                background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}05 100%)`,
                p: 2,
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                  <Box sx={{ 
                    p: 1.5, 
                    borderRadius: 2, 
                    backgroundColor: `${stat.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {stat.icon}
                  </Box>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: stat.color,
                      fontWeight: 600,
                      backgroundColor: `${stat.color}15`,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1
                    }}
                  >
                    {stat.change}
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ mb: 1.5, fontWeight: 600 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ height: '100%', p: 2 , width: '500px',}}>
            <CardContent sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, }}>
                Enrollment Trends
              </Typography>
              <Box sx={{ height: 300, marginLeft: '-30px', marginRight: '10px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={enrollmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip />
                    <Line
                      type="monotone"
                      dataKey="enrollments"
                      stroke="#1976d2"
                      strokeWidth={2}
                      dot={{ fill: '#1976d2', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', p: 2, width: '500px',}}>
            <CardContent sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Course Progress
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {['Web Development', 'Data Science', 'Mobile Apps', 'UI/UX Design'].map((course, index) => (
                  <Box key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                      <Typography variant="body2">{course}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {75 + index * 5}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={75 + index * 5} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        backgroundColor: '#e0e0e0',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          backgroundColor: '#1976d2',
                        }
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 