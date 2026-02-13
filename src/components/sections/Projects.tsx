import { Box, Container, Typography, Paper } from '@mui/material';

export const Projects = () => {
  const projects = [
    {
      id: 'proj-rpo',
      title: 'RPO & REC Compliance Framework',
      desc: 'Analyzed national demand profiles and renewable energy certificates compliance framework for energy transition',
    },
    {
      id: 'proj-reg',
      title: 'Power Sector Regulation Analysis',
      desc: 'Comprehensive analysis of regulatory frameworks across power value chain including tariff orders and distribution',
    },
    {
      id: 'proj-market',
      title: 'Energy Market Dashboard',
      desc: 'Developed data-driven insights on CEA, CERC, and IEX market data for Power Chronicle newsletter',
    },
  ];

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f5f7fa' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Featured Work
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {projects.map((project) => (
            <Paper
              key={project.id}
              sx={{
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-15px)',
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
                  transition: 'all 0.3s',
                },
              }}
            >
              <Box
                sx={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <Typography sx={{ textAlign: 'center', px: 2 }} variant="subtitle1">
                  Energy & Regulatory Analysis
                </Typography>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                  {project.desc}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
