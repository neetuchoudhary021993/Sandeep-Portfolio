import { Box, Container, Typography, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import UniversityIcon from '@mui/icons-material/AccountBalance';

const InstitutionIcon = ({ type }: { type: 'university' | 'college' | 'polytechnic' }) => {
  const getColor = () => {
    switch (type) {
      case 'university':
        return 'linear-gradient(135deg, #0066cc 0%, #003d99 100%)';
      case 'college':
        return 'linear-gradient(135deg, #ff8c00 0%, #cc7000 100%)';
      case 'polytechnic':
        return 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)';
    }
  };

  return (
    <Box
      sx={{
        width: '70px',
        height: '70px',
        borderRadius: '12px',
        background: getColor(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2.5rem',
      }}
    >
      {type === 'university' ? <UniversityIcon /> : <SchoolIcon />}
    </Box>
  );
};

export const Education = () => {
  const educations = [
    {
      id: 'edu-mtech',
      degree: 'Master of Technology',
      specialization: 'Control and Instrumentation',
      institution: 'Madan Mohan Malaviya University of Technology',
      period: 'Sep 2021 - Sep 2023',
      type: 'university' as const,
      detail: 'GPA: 7.64/10',
      skills: ['Presentation Skills', 'Troubleshooting', '+8 skills'],
      description:
        'Specialized in systems problem-solving, automation, regulatory frameworks, and energy policy analysis.',
    },
    {
      id: 'edu-btech',
      degree: 'Bachelor of Technology',
      specialization: 'Electrical Engineering',
      institution: 'Rajkiya Engineering College Sonbhadra',
      period: '2017 - 2020',
      type: 'college' as const,
      detail: 'Grade: 7.3',
      skills: ['Power Distribution', 'Presentation Skills', '+7 skills'],
      description:
        'Focused on renewable energy, power generation, distribution systems, and sustainable technologies.',
    },
    {
      id: 'edu-diploma',
      degree: 'Diploma',
      specialization: 'Electronics Engineering',
      institution: 'Government Polytechnic College, Farrukhabad',
      period: '2014 - 2017',
      type: 'polytechnic' as const,
      detail: 'Percentage: 75%',
      skills: ['Technical Foundation', 'Electronics', '+5 skills'],
      description: 'Strong foundation in electronics, electrical systems, and technical fundamentals.',
    },
  ];

  return (
    <Box id="education" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f0f4f8' }}>
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
          Education
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#666',
            fontSize: '1.05rem',
          }}
        >
          Building expertise in power systems and energy management
        </Typography>
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          {educations.map((edu, idx) => (
            <Box
              key={edu.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'auto 1fr', md: '80px 1fr' },
                gap: { xs: 2, md: 3 },
                mb: idx !== educations.length - 1 ? 4 : 0,
                alignItems: 'flex-start',
              }}
            >
              {/* Icon */}
              <Box sx={{ pt: 1 }}>
                <InstitutionIcon type={edu.type} />
              </Box>

              {/* Content */}
              <Paper
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  background: 'white',
                  borderLeft: '4px solid #0066cc',
                  transition: 'all 0.3s',
                  '&:hover': {
                    boxShadow: '0 12px 32px rgba(0, 102, 204, 0.15)',
                    borderLeftColor: '#ff8c00',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box sx={{ mb: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          color: '#0066cc',
                          mb: 0.3,
                        }}
                      >
                        {edu.degree}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#ff8c00',
                          fontWeight: 700,
                          mb: 0.5,
                          fontSize: '0.95rem',
                        }}
                      >
                        {edu.specialization}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        px: 2,
                        py: 0.5,
                        background: 'rgba(0, 102, 204, 0.1)',
                        borderRadius: '8px',
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          color: '#0066cc',
                        }}
                      >
                        {edu.detail}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      color: '#666',
                      fontWeight: 600,
                      mb: 0.5,
                      fontSize: '0.95rem',
                    }}
                  >
                    {edu.institution}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#999', display: 'block', mb: 1.5 }}>
                    📅 {edu.period}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#555', mb: 2, lineHeight: 1.6 }}>
                  {edu.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {edu.skills.map((skill) => (
                    <Box
                      key={skill}
                      sx={{
                        px: 2,
                        py: 0.5,
                        background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.1) 0%, rgba(0, 102, 204, 0.05) 100%)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 140, 0, 0.2)',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#ff8c00',
                          fontWeight: 600,
                        }}
                      >
                        {skill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

