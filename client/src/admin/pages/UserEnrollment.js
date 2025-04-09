// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   IconButton,
//   InputAdornment,
//   Chip,
//   Stack,
//   Avatar,
//   Divider,
//   LinearProgress,
// } from '@mui/material';
// import {
//   Add as AddIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
//   Search as SearchIcon,
//   CheckCircle as CheckCircleIcon,
//   Cancel as CancelIcon,
//   Email as EmailIcon,
//   Phone as PhoneIcon,
//   School as SchoolIcon,
//   CalendarToday as CalendarIcon,
//   Pending as PendingIcon,
//   PlayCircle as PlayCircleIcon,
//   Info as InfoIcon,
//   Margin,
// } from '@mui/icons-material';

// // Mock data
// const initialEnrollments = [
//   {
//     id: 1,
//     name: 'Thejaswini',
//     email: 'thajaswini@example.com',
//     phone: '+91 984 567 8900',
//     courseEnrolled: 'Web Development Basics',
//     batchAssigned: 'Batch A (10:00 AM - 12:00 PM)',
//     enrollmentDate: '2024-03-15',
//     paymentStatus: 'completed',
//     progress: 75,
//     avatar: '#',
//   },
//   {
//     id: 2,
//     name: 'Payal',
//     email: 'payal@example.com',
//     phone: '+91 984 567 8901',
//     courseEnrolled: 'Advanced JavaScript',
//     batchAssigned: 'Batch B (2:00 PM - 4:00 PM)',
//     enrollmentDate: '2024-03-16',
//     paymentStatus: 'pending',
//     progress: 0,
//     avatar: '#',
//   },
// ];

// const StatusChip = ({ status }) => {
//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case 'pending':
//         return {
//           color: '#ed6c02',
//           bgColor: '#fff3e0',
//           icon: <PendingIcon sx={{ fontSize: 16 }} />,
//         };
//       case 'completed':
//         return {
//           color: '#2e7d32',
//           icon: <CheckCircleIcon sx={{ fontSize: 16 }} />,
//         };
//       case 'in progress':
//         return {
//           color: '#1976d2',
//           bgColor: '#e3f2fd',
//           icon: <PlayCircleIcon sx={{ fontSize: 16 }} />,
//         };
//       default:
//         return {
//           color: '#757575',
//           bgColor: '#f5f5f5',
//           icon: <InfoIcon sx={{ fontSize: 16 }} />,
//         };
//     }
//   };

//   const statusStyle = getStatusColor(status);

//   return (
//     <Chip
//       label={status}
//       size="small"
//       icon={statusStyle.icon}
//       sx={{
//         backgroundColor: statusStyle.bgColor,
//         color: statusStyle.color,
//         fontWeight: 500,
//         '& .MuiChip-icon': {
//           color: statusStyle.color,
//         },
//       }}
//     />
//   );
// };

// const UserEnrollment = () => {
//   const [enrollments, setEnrollments] = useState(initialEnrollments);
//   const [open, setOpen] = useState(false);
//   const [editingEnrollment, setEditingEnrollment] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     courseEnrolled: '',
//     batchAssigned: '',
//     enrollmentDate: '',
//     paymentStatus: 'pending',
//     progress: 0,
//   });

//   const handleOpen = (enrollment = null) => {
//     if (enrollment) {
//       setEditingEnrollment(enrollment);
//       setFormData(enrollment);
//     } else {
//       setEditingEnrollment(null);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         courseEnrolled: '',
//         batchAssigned: '',
//         enrollmentDate: '',
//         paymentStatus: 'pending',
//         progress: 0,
//       });
//     }
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setEditingEnrollment(null);
//   };

//   const handleSubmit = () => {
//     if (editingEnrollment) {
//       setEnrollments(
//         enrollments.map((enrollment) =>
//           enrollment.id === editingEnrollment.id
//             ? { ...enrollment, ...formData }
//             : enrollment
//         )
//       );
//     } else {
//       setEnrollments([
//         ...enrollments,
//         {
//           id: enrollments.length + 1,
//           ...formData,
//           avatar: `https://i.pravatar.cc/150?img=${enrollments.length + 3}`,
//         },
//       ]);
//     }
//     handleClose();
//   };

//   const handleDelete = (id) => {
//     setEnrollments(enrollments.filter((enrollment) => enrollment.id !== id));
//   };

//   const handleApprove = (id) => {
//     setEnrollments(
//       enrollments.map((enrollment) =>
//         enrollment.id === id
//           ? { ...enrollment, paymentStatus: 'completed' }
//           : enrollment
//       )
//     );
//   };

//   const handleReject = (id) => {
//     setEnrollments(
//       enrollments.map((enrollment) =>
//         enrollment.id === id
//           ? { ...enrollment, paymentStatus: 'rejected' }
//           : enrollment
//       )
//     );
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'completed':
//         return 'success';
//       case 'pending':
//         return 'warning';
//       case 'rejected':
//         return 'error';
//       default:
//         return 'default';
//     }
//   };

//   const filteredEnrollments = enrollments.filter(
//     (enrollment) =>
//       enrollment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       enrollment.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='mt-3'>
//       <Box>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//           <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
//             User Enrollment Management
//           </Typography>
//           <Button
//             variant="contained"
//             startIcon={<AddIcon />}
//             onClick={() => handleOpen()}
//             sx={{
//               background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
//               boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
//             }}
//           >
//             Add New Enrollment
//           </Button>
//         </Box>

//         <TextField
//           fullWidth
//           variant="outlined"
//           placeholder="Search by name or email..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           sx={{ mb: 3 }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//         />

//         <Grid container spacing={3}>
//           {filteredEnrollments.map((enrollment) => (
//             <Grid item xs={12} md={6} key={enrollment.id}>
//               <Card
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   transition: 'transform 0.2s',
//                   '&:hover': {
//                     transform: 'translateY(-4px)',
//                     boxShadow: 3,
//                   },
//                 }}
//               >
//                 <CardContent>
//                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                       <Avatar src={enrollment.avatar} sx={{ width: 56, height: 56 }} />
//                       <Box>
//                         <Typography variant="h6" component="div">
//                           {enrollment.name}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {enrollment.email}
//                         </Typography>
//                       </Box>
//                     </Box>
//                     <StatusChip status={enrollment.paymentStatus} />
//                   </Box>

//                   <Stack spacing={2}>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <PhoneIcon color="action" />
//                       <Typography variant="body2" color="text.secondary">
//                         {enrollment.phone}
//                       </Typography>
//                     </Box>

//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <SchoolIcon color="action" />
//                       <Typography variant="body2" color="text.secondary">
//                         {enrollment.courseEnrolled}
//                       </Typography>
//                     </Box>

//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <CalendarIcon color="action" />
//                       <Typography variant="body2" color="text.secondary">
//                         {enrollment.batchAssigned}
//                       </Typography>
//                     </Box>

//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <CalendarIcon color="action" />
//                       <Typography variant="body2" color="text.secondary">
//                         Enrolled on: {enrollment.enrollmentDate}
//                       </Typography>
//                     </Box>

//                     <Divider />

//                     <Box>
//                       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
//                         <Typography variant="body2" color="text.secondary">
//                           Course Progress
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {enrollment.progress}%
//                         </Typography>
//                       </Box>
//                       <LinearProgress
//                         variant="determinate"
//                         value={enrollment.progress}
//                         sx={{ height: 8, borderRadius: 4 }}
//                       />
//                     </Box>
//                   </Stack>
//                 </CardContent>

//                 <Box sx={{ p: 2, pt: 0, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
//                   {enrollment.paymentStatus === 'pending' && (
//                     <>
//                       <IconButton
//                         onClick={() => handleApprove(enrollment.id)}
//                         color="success"
//                       >
//                         <CheckCircleIcon />
//                       </IconButton>
//                       <IconButton
//                         onClick={() => handleReject(enrollment.id)}
//                         color="error"
//                       >
//                         <CancelIcon />
//                       </IconButton>
//                     </>
//                   )}
//                   <IconButton onClick={() => handleOpen(enrollment)} color="primary">
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton onClick={() => handleDelete(enrollment.id)} color="error">
//                     <DeleteIcon />
//                   </IconButton>
//                 </Box>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//           <DialogTitle>
//             {editingEnrollment ? 'Edit Enrollment' : 'Add New Enrollment'}
//           </DialogTitle>
//           <DialogContent>
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
//               <TextField
//                 label="Name"
//                 fullWidth
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//               />
//               <TextField
//                 label="Email"
//                 fullWidth
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//               />
//               <TextField
//                 label="Phone"
//                 fullWidth
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//               />
//               <TextField
//                 label="Course Enrolled"
//                 fullWidth
//                 value={formData.courseEnrolled}
//                 onChange={(e) =>
//                   setFormData({ ...formData, courseEnrolled: e.target.value })
//                 }
//               />
//               <TextField
//                 label="Batch Assigned"
//                 fullWidth
//                 value={formData.batchAssigned}
//                 onChange={(e) =>
//                   setFormData({ ...formData, batchAssigned: e.target.value })
//                 }
//               />
//               <TextField
//                 label="Enrollment Date"
//                 type="date"
//                 fullWidth
//                 value={formData.enrollmentDate}
//                 onChange={(e) =>
//                   setFormData({ ...formData, enrollmentDate: e.target.value })
//                 }
//                 InputLabelProps={{ shrink: true }}
//               />
//               <TextField
//                 label="Progress (%)"
//                 type="number"
//                 fullWidth
//                 value={formData.progress}
//                 onChange={(e) =>
//                   setFormData({ ...formData, progress: e.target.value })
//                 }
//               />
//             </Box>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Cancel</Button>
//             <Button
//               onClick={handleSubmit}
//               variant="contained"
//               sx={{
//                 background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
//                 boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
//               }}
//             >
//               {editingEnrollment ? 'Save Changes' : 'Add Enrollment'}
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </div>

//   );
// };

// export default UserEnrollment; 






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box, Button, Card, CardContent, Grid, Typography, TextField,
  Dialog, DialogTitle, DialogContent, DialogActions, IconButton,
  InputAdornment, Avatar
} from '@mui/material';
import {
  Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Search as SearchIcon
} from '@mui/icons-material';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    username: '', email: '', number: ''
  });

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleOpen = (user = null) => {
    setEditingUser(user);
    setFormData(user || { username: '', email: '', number: '' });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingUser(null);
  };

  const handleSubmit = async () => {
    try {
      if (editingUser) {
        await axios.put(`http://localhost:5000/api/users/${editingUser.email}`, formData);
      } else {
        await axios.post('http://localhost:5000/api/register', formData); // Change this route if needed
      }
      fetchUsers();
      handleClose();
    } catch (err) {
      console.error('Error submitting user:', err);
    }
  };

  const handleDelete = async (email) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${email}`);
      fetchUsers();
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  const filteredUsers = users.filter((u) => {
    const username = u.username || '';
    const email = u.email || '';
    return (
      username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Box className='mt-3'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          User Management
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
          Add User
        </Button>
      </Box>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search by username or email..."
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
        {filteredUsers.map((user) => (
          <Grid item xs={12} md={6} key={user._id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar src={`https://i.pravatar.cc/150?u=${user.email}`} />
                  <Box>
                    <Typography variant="h6">{user.username}</Typography>
                    <Typography variant="body2" color="text.secondary">{user.email}</Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary">
                  Phone: {user.number}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <IconButton onClick={() => handleOpen(user)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(user.email)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{editingUser ? 'Edit User' : 'Add New User'}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Username"
              fullWidth
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <TextField
              label="Email"
              fullWidth
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={!!editingUser}
            />
            <TextField
              label="Phone Number"
              fullWidth
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
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
            {editingUser ? 'Save Changes' : 'Add User'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserManagement;
