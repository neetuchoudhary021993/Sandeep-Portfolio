import { Box, Container, Typography, Paper } from '@mui/material';
import PolicyIcon from '@mui/icons-material/Policy';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import React from 'react';

const StatCard = ({ label, desc }: { label: string; desc: string }) => (
  <Box
    sx={{
      p: 2.5,
      borderRadius: '12px',
      border: '2px solid transparent',
      background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(255, 140, 0, 0.05) 100%)',
      borderLeft: '4px solid #0066cc',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderLeftColor: '#ff8c00',
        background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(255, 140, 0, 0.1) 100%)',
        transform: 'translateX(8px)',
        boxShadow: '0 8px 24px rgba(255, 140, 0, 0.15)',
      },
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 800,
        background: 'linear-gradient(135deg, #0066cc 0%, #ff8c00 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        mb: 0.5,
      }}
    >
      {label}
    </Typography>
    <Typography sx={{ color: '#666', fontWeight: 600, fontSize: '0.95rem' }}>{desc}</Typography>
  </Box>
);

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, desc }) => (
  <Paper
    sx={{
      p: 3.5,
      borderRadius: '16px',
      background: 'white',
      border: '2px solid transparent',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #0066cc 0%, #ff8c00 100%)',
      },
      '&:hover': {
        transform: 'translateY(-12px)',
        boxShadow: '0 16px 40px rgba(255, 140, 0, 0.2)',
        borderColor: '#ff8c00',
      },
    }}
  >
    <Box
      sx={{
        width: '64px',
        height: '64px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #0066cc 0%, #003d99 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 2.5,
        color: 'white',
        fontSize: '2rem',
        transition: 'all 0.3s ease',
      }}
    >
      <Icon />
    </Box>
    <Typography
      variant="h6"
      sx={{
        fontWeight: 800,
        mb: 1,
        color: '#0066cc',
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        color: '#666',
        lineHeight: 1.6,
        fontWeight: 500,
      }}
    >
      {desc}
    </Typography>
  </Paper>
);

export const About = () => {
  const stats = [
    { id: 'stat-exp', label: '2+', desc: 'Years Experience' },
    { id: 'stat-pub', label: '4', desc: 'Publications' },
    { id: 'stat-cert', label: '4', desc: 'Certifications' },
    { id: 'stat-skills', label: '7+', desc: 'Core Skills' },
  ];

  const services = [
    {
      icon: PolicyIcon,
      title: 'Regulatory Analysis',
      desc: 'Deep expertise in power sector compliance, policy frameworks, and regulatory compliance strategies.',
    },
    {
      icon: AnalyticsIcon,
      title: 'Data Analytics',
      desc: 'Market analysis, energy consumption patterns, and data-driven insights for strategic decisions.',
    },
    {
      icon: ElectricBoltIcon,
      title: 'Energy Transition',
      desc: 'Renewable procurement strategies, sustainability planning, and clean energy solutions.',
    },
  ];

  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f0f4f8' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            textAlign: 'center',
            mb: 2,
            background: 'linear-gradient(135deg, #0066cc 0%, #ff8c00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#666',
            fontSize: '1.05rem',
            fontWeight: 500,
          }}
        >
          Driving energy transformation through expertise and innovation
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 5, mb: 8 }}>
          {/* Left column - Description */}
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                mb: 3,
                color: '#333',
                fontWeight: 500,
              }}
            >
              <Box component="span" sx={{ color: '#0066cc', fontWeight: 700 }}>
                Energy professional
              </Box>{' '}
              with hands-on expertise in power sector regulation, renewable energy procurement, and policy analysis.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#555',
              }}
            >
              Currently working as{' '}
              <Box component="span" sx={{ color: '#ff8c00', fontWeight: 700 }}>
                Associate (Regulatory) at Power Foundation of India
              </Box>
              . Specializing in regulatory analysis, policy frameworks, renewable energy procurement, and compliance 
              development. Focused on India's power sector transformation with expertise in systems problem-solving, 
              automation, and stakeholder engagement.
            </Typography>
          </Box>

          {/* Right column - Stats */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2.5 }}>
            {stats.map((item) => (
              <StatCard key={item.id} label={item.label} desc={item.desc} />
            ))}
          </Box>
        </Box>

        {/* Services Section */}
        <Box>
          <Typography
            sx={{
              textAlign: 'center',
              mb: 4,
              color: '#0066cc',
              fontWeight: 700,
              fontSize: '0.95rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Core Expertise
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
