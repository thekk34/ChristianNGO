import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  Description as DescriptionIcon,
  PictureAsPdf as PdfIcon,
  Preview as PreviewIcon,
  Upload as UploadIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';

// Mock data with chapters and PDFs
const initialCourses = [
  {
    id: 1,
    title: 'Web Development Basics',
    description: 'Learn the fundamentals of web development',
    duration: '3 months',
    chapters: [
      {
        id: 1,
        title: 'Introduction to HTML',
        pdfs: [
          { id: 1, title: 'HTML Basics', url: 'path/to/html-basics.pdf' },
          { id: 2, title: 'HTML Elements', url: 'path/to/html-elements.pdf' },
        ],
      },
      {
        id: 2,
        title: 'CSS Fundamentals',
        pdfs: [
          { id: 3, title: 'CSS Introduction', url: 'path/to/css-intro.pdf' },
        ],
      },
    ],
  },
];

const CourseManagement = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [open, setOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    chapters: [],
  });
  const [chapterDialogOpen, setChapterDialogOpen] = useState(false);
  const [pdfDialogOpen, setPdfDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [chapterFormData, setChapterFormData] = useState({
    title: '',
    pdfs: [],
  });
  const [pdfFormData, setPdfFormData] = useState({
    title: '',
    file: null,
  });

  const handleOpen = (course = null) => {
    if (course) {
      setEditingCourse(course);
      setFormData(course);
    } else {
      setEditingCourse(null);
      setFormData({
        title: '',
        description: '',
        duration: '',
        chapters: [],
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingCourse(null);
  };

  const handleSubmit = () => {
    if (editingCourse) {
      setCourses(
        courses.map((course) =>
          course.id === editingCourse.id ? { ...course, ...formData } : course
        )
      );
    } else {
      setCourses([
        ...courses,
        {
          id: courses.length + 1,
          ...formData,
          chapters: [],
        },
      ]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleAddChapter = (course) => {
    setSelectedCourse(course);
    setChapterFormData({ title: '', pdfs: [] });
    setChapterDialogOpen(true);
  };

  const handleChapterSubmit = () => {
    if (selectedCourse) {
      const newChapter = {
        id: selectedCourse.chapters.length + 1,
        ...chapterFormData,
        pdfs: chapterFormData.pdfs || [],
      };
      setCourses(
        courses.map((course) =>
          course.id === selectedCourse.id
            ? {
                ...course,
                chapters: [...course.chapters, newChapter],
              }
            : course
        )
      );
    }
    setChapterDialogOpen(false);
  };

  const handleAddPdfToChapter = (file) => {
    if (file) {
      const newPdf = {
        id: (chapterFormData.pdfs?.length || 0) + 1,
        title: file.name,
        file: file,
        url: URL.createObjectURL(file),
        size: formatFileSize(file.size),
        uploadDate: new Date().toLocaleDateString(),
      };
      setChapterFormData({
        ...chapterFormData,
        pdfs: [...(chapterFormData.pdfs || []), newPdf],
      });
    }
  };

  const handleRemovePdfFromChapter = (pdfId) => {
    setChapterFormData({
      ...chapterFormData,
      pdfs: chapterFormData.pdfs.filter((pdf) => pdf.id !== pdfId),
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Course Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Course
        </Button>
      </Box>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search courses..."
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

      {filteredCourses.map((course) => (
        <Accordion key={course.id} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {course.title}
              </Typography>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen(course);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(course.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" color="text.secondary">
                {course.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duration: {course.duration}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="subtitle1">Chapters</Typography>
              <Button
                size="small"
                startIcon={<AddIcon />}
                onClick={() => handleAddChapter(course)}
              >
                Add Chapter
              </Button>
            </Box>
            <List>
              {course.chapters.map((chapter) => (
                <Accordion key={chapter.id}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{chapter.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="subtitle2">PDFs</Typography>
                      <Button
                        size="small"
                        startIcon={<AddIcon />}
                        onClick={() => {
                          setSelectedCourse(course);
                          setSelectedChapter(chapter);
                          setPdfFormData({ title: '', file: null });
                          setPdfDialogOpen(true);
                        }}
                      >
                        Add PDF
                      </Button>
                    </Box>
                    <List>
                      {chapter.pdfs.map((pdf) => (
                        <ListItem key={pdf.id}>
                          <ListItemIcon>
                            <PdfIcon color="error" />
                          </ListItemIcon>
                          <ListItemText 
                            primary={pdf.title}
                            secondary={`${pdf.size} • Uploaded on ${pdf.uploadDate}`}
                          />
                          <ListItemSecondaryAction>
                            <IconButton
                              edge="end"
                              onClick={() => window.open(pdf.url, '_blank')}
                              sx={{ mr: 1 }}
                            >
                              <PreviewIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              onClick={() => {
                                const link = document.createElement('a');
                                link.href = pdf.url;
                                link.download = pdf.title;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                            >
                              <DownloadIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Course Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{editingCourse ? 'Edit Course' : 'Add Course'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Duration"
            fullWidth
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editingCourse ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Chapter Dialog */}
      <Dialog open={chapterDialogOpen} onClose={() => setChapterDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add Chapter</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Chapter Title"
            fullWidth
            value={chapterFormData.title}
            onChange={(e) => setChapterFormData({ ...chapterFormData, title: e.target.value })}
          />
          
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
              Chapter PDFs
            </Typography>
            
            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadIcon />}
              sx={{ mb: 2 }}
              fullWidth
            >
              Upload PDF
              <input
                type="file"
                hidden
                accept=".pdf"
                onChange={(e) => handleAddPdfToChapter(e.target.files[0])}
              />
            </Button>

            {chapterFormData.pdfs?.map((pdf) => (
              <Box
                key={pdf.id}
                sx={{
                  p: 2,
                  border: '1px solid #e0e0e0',
                  borderRadius: 1,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <PdfIcon color="error" />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {pdf.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {pdf.size} • Uploaded on {pdf.uploadDate}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    size="small"
                    onClick={() => window.open(pdf.url, '_blank')}
                  >
                    <PreviewIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = pdf.url;
                      link.download = pdf.title;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <DownloadIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleRemovePdfFromChapter(pdf.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setChapterDialogOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleChapterSubmit} 
            variant="contained"
            disabled={!chapterFormData.title}
          >
            Add Chapter
          </Button>
        </DialogActions>
      </Dialog>

      {/* PDF Dialog */}
      <Dialog open={pdfDialogOpen} onClose={() => setPdfDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add PDF</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="PDF Title"
            fullWidth
            value={pdfFormData.title}
            onChange={(e) => setPdfFormData({ ...pdfFormData, title: e.target.value })}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadIcon />}
              sx={{ mb: 2 }}
              fullWidth
            >
              Upload PDF
              <input
                type="file"
                hidden
                accept=".pdf"
                onChange={(e) => setPdfFormData({ ...pdfFormData, file: e.target.files[0] })}
              />
            </Button>
            {pdfFormData.file && (
              <Box sx={{ 
                p: 2, 
                border: '1px dashed #ccc', 
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <PdfIcon color="error" />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {pdfFormData.file.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {formatFileSize(pdfFormData.file.size)}
                  </Typography>
                </Box>
                <IconButton 
                  size="small" 
                  onClick={() => window.open(URL.createObjectURL(pdfFormData.file), '_blank')}
                >
                  <PreviewIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPdfDialogOpen(false)}>Cancel</Button>
          <Button 
            onClick={() => {
              if (selectedCourse && selectedChapter && pdfFormData.file) {
                const newPdf = {
                  id: selectedChapter.pdfs.length + 1,
                  title: pdfFormData.title,
                  file: pdfFormData.file,
                  url: URL.createObjectURL(pdfFormData.file),
                  size: formatFileSize(pdfFormData.file.size),
                  uploadDate: new Date().toLocaleDateString(),
                };
                setCourses(
                  courses.map((course) =>
                    course.id === selectedCourse.id
                      ? {
                          ...course,
                          chapters: course.chapters.map((chapter) =>
                            chapter.id === selectedChapter.id
                              ? { ...chapter, pdfs: [...chapter.pdfs, newPdf] }
                              : chapter
                          ),
                        }
                      : course
                  )
                );
                setPdfDialogOpen(false);
              }
            }}
            variant="contained"
            disabled={!pdfFormData.file || !pdfFormData.title}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CourseManagement; 