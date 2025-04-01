import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  InputAdornment,
  Chip,
  Stack,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  Group as GroupIcon,
  School as SchoolIcon,
} from '@mui/icons-material';

// Mock data
const initialBatches = [
  {
    id: 1,
    courseName: 'Web Development Basics',
    startDate: '2024-04-01',
    endDate: '2024-06-30',
    timings: '10:00 AM - 12:00 PM',
    availableSeats: 25,
    enrolledStudents: 15,
    status: 'active',
    instructor: {
      name: 'Nithish',
      avatar: '#',
    },
  },
  {
    id: 2,
    courseName: 'Advanced JavaScript',
    startDate: '2024-05-01',
    endDate: '2024-07-30',
    timings: '2:00 PM - 4:00 PM',
    availableSeats: 20,
    enrolledStudents: 8,
    status: 'upcoming',
    instructor: {
      name: 'Hushnara',
      avatar: '#',
    },
  },
];

const BatchManagement = () => {
  const [batches, setBatches] = useState(initialBatches);
  const [open, setOpen] = useState(false);
  const [editingBatch, setEditingBatch] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    courseName: '',
    startDate: '',
    endDate: '',
    timings: '',
    availableSeats: '',
    instructor: {
      name: '',
      avatar: '',
    },
  });

  const handleOpen = (batch = null) => {
    if (batch) {
      setEditingBatch(batch);
      setFormData(batch);
    } else {
      setEditingBatch(null);
      setFormData({
        courseName: '',
        startDate: '',
        endDate: '',
        timings: '',
        availableSeats: '',
        instructor: {
          name: '',
          avatar: '',
        },
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingBatch(null);
  };

  const handleSubmit = () => {
    if (editingBatch) {
      setBatches(
        batches.map((batch) =>
          batch.id === editingBatch.id ? { ...batch, ...formData } : batch
        )
      );
    } else {
      setBatches([
        ...batches,
        {
          id: batches.length + 1,
          ...formData,
          enrolledStudents: 0,
          status: 'upcoming',
        },
      ]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setBatches(batches.filter((batch) => batch.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'upcoming':
        return 'info';
      case 'completed':
        return 'default';
      default:
        return 'default';
    }
  };

  const filteredBatches = batches.filter((batch) =>
    batch.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Batch Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          }}
        >
          Add New Batch
        </Button>
      </Box>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search batches..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Grid container spacing={3}>
        {filteredBatches.map((batch) => (
          <Grid item xs={12} md={6} key={batch.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3,
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, gap: 2, }}>
                  <Typography variant="h6" component="div">
                    {batch.courseName}
                  </Typography>
                  <Chip
                    label={batch.status}
                    color={getStatusColor(batch.status)}
                    size="small"
                  />
                </Box>

                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {batch.startDate} - {batch.endDate}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TimeIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {batch.timings}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <GroupIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {batch.enrolledStudents} / {batch.availableSeats} students enrolled
                    </Typography>
                  </Box>

                  <Divider />

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={batch.instructor.avatar} />
                    <Box>
                      <Typography variant="subtitle2">{batch.instructor.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Instructor
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </CardContent>

              <Box sx={{ p: 2, pt: 0, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <IconButton onClick={() => handleOpen(batch)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(batch.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingBatch ? 'Edit Batch' : 'Add New Batch'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Course Name"
              fullWidth
              value={formData.courseName}
              onChange={(e) =>
                setFormData({ ...formData, courseName: e.target.value })
              }
            />
            <TextField
              label="Start Date"
              type="date"
              fullWidth
              value={formData.startDate}
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="End Date"
              type="date"
              fullWidth
              value={formData.endDate}
              onChange={(e) =>
                setFormData({ ...formData, endDate: e.target.value })
              }
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Timings"
              fullWidth
              value={formData.timings}
              onChange={(e) =>
                setFormData({ ...formData, timings: e.target.value })
              }
            />
            <TextField
              label="Available Seats"
              type="number"
              fullWidth
              value={formData.availableSeats}
              onChange={(e) =>
                setFormData({ ...formData, availableSeats: e.target.value })
              }
            />
            <TextField
              label="Instructor Name"
              fullWidth
              value={formData.instructor.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  instructor: { ...formData.instructor, name: e.target.value },
                })
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            }}
          >
            {editingBatch ? 'Save Changes' : 'Add Batch'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BatchManagement; 