import { Box, Container, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import profilePhoto from '../../assets/Sandeep_photo.jpeg';

export const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        background: 'linear-gradient(135deg, #0066cc 0%, #003d99 50%, #ff8c00 100%)',
        color: 'white',
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 140, 0, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            <Box sx={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <ElectricBoltIcon sx={{ fontSize: '2.5rem', color: '#ff8c00' }} />
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#ff8c00',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                  }}
                >
                  Welcome to Energy Excellence
                </Typography>
              </Box>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, color: '#fff' }}>
                Hi, I'm Sandeep Kumar
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  opacity: 0.95,
                  fontWeight: 500,
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                }}
              >
                Regulatory & Policy Expert | Power Sector Specialist
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  maxWidth: '600px',
                }}
              >
                Driving reformative change in India's power sector through regulatory excellence,
                policy innovation, and sustainable energy transition. Expertise in RPO frameworks,
                renewable energy certificates, and market-driven solutions.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#ff8c00',
                    color: 'white',
                    fontWeight: 700,
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: '#e07b00',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 24px rgba(255, 140, 0, 0.3)',
                    },
                  }}
                  endIcon={<DownloadIcon />}
                  href="/Sandeep_8299596269.pdf"
                  download
                >
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    fontWeight: 700,
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: '#ff8c00',
                      color: '#ff8c00',
                      transform: 'translateY(-3px)',
                    },
                  }}
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Get In Touch
                </Button>
              </Box>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Box
                  sx={{
                    p: 1.5,
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      background: 'rgba(255, 140, 0, 0.2)',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <LinkedInIcon
                    sx={{ fontSize: '2rem' }}
                    onClick={() =>
                      window.open('https://linkedin.com/in/sandeep-kumarb7075a195', '_blank')
                    }
                  />
                </Box>
                <Box
                  sx={{
                    p: 1.5,
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      background: 'rgba(255, 140, 0, 0.2)',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <EmailIcon
                    sx={{ fontSize: '2rem' }}
                    onClick={() => (window.location.href = 'mailto:Sandeepku3010@gmail.com')}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                height: '450px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '2px solid rgba(255, 140, 0, 0.2)',
                backdropFilter: 'blur(10px)',
                animation: 'fadeInRight 0.8s ease-out',
              }}
            >
              <Box
                component="img"
                src={profilePhoto}
                alt="Sandeep Kumar"
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

