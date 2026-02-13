import { Box, Container, Typography, Paper, TextField, Button, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const contactInfo = [
    {
      id: 'contact-email',
      icon: <EmailIcon />,
      title: 'Email',
      value: 'Sandeepku3010@gmail.com',
      link: 'mailto:Sandeepku3010@gmail.com',
    },
    {
      id: 'contact-linkedin',
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      value: 'Sandeep Kumar',
      link: 'https://linkedin.com/in/sandeep-kumarb7075a195',
    },
    {
      id: 'contact-location',
      icon: <CodeIcon />,
      title: 'Location',
      value: 'New Delhi, India',
      link: null,
    },
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({
      type: 'success',
      message: `Thank you, ${formData.name}! Your message has been received.`,
    });
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitStatus({ type: null, message: '' }), 5000);
  };

  return (
    <Box
      id="contact"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6, color: 'white' }}
        >
          Get In Touch
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
          {/* Contact Info */}
          <Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 3, mb: 6 }}>
              {contactInfo.map((contact) => (
                <Paper
                  key={contact.id}
                  sx={{
                    p: 3,
                    background: 'rgba(255,255,255,0.1)',
                    textAlign: 'left',
                    border: '1px solid rgba(255,255,255,0.2)',
                    cursor: contact.link ? 'pointer' : 'default',
                    '&:hover': {
                      background: contact.link ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.1)',
                    },
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center',
                  }}
                  onClick={() => contact.link && window.open(contact.link, '_blank')}
                >
                  <Box sx={{ color: 'white', fontSize: '2rem' }}>{contact.icon}</Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5, color: 'white' }}>
                      {contact.title}
                    </Typography>
                    <Typography sx={{ color: 'white' }}>{contact.value}</Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>

          {/* Contact Form */}
          <Paper sx={{ p: 4, background: 'rgba(255,255,255,0.95)', borderRadius: '10px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, color: '#333' }}>
              Send me a Message
            </Typography>
            <Box component="form" onSubmit={handleFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {submitStatus.type && (
                <Alert severity={submitStatus.type} sx={{ mb: 2 }}>
                  {submitStatus.message}
                </Alert>
              )}
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                fullWidth
                placeholder="Your Name"
                sx={{ '& .MuiOutlinedInput-root': { color: '#333' } }}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                fullWidth
                placeholder="your.email@example.com"
                sx={{ '& .MuiOutlinedInput-root': { color: '#333' } }}
              />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                fullWidth
                multiline
                rows={4}
                placeholder="Your message here..."
                sx={{ '& .MuiOutlinedInput-root': { color: '#333' } }}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontWeight: 'bold',
                  py: 1.5,
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};
