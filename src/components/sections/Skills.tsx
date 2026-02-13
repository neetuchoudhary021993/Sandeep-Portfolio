import { Box, Container, Typography } from '@mui/material';

export const Skills = () => {
  const skillCategories = [
    {
      cat: 'Policy & Regulation',
      skills: ['Climate & Energy Policy', 'Regulatory Compliance', 'Stakeholder Engagement'],
    },
    {
      cat: 'Technical Skills',
      skills: ['Data Analysis', 'MATLAB & Simulink', 'Python Programming'],
    },
    {
      cat: 'Tools & Software',
      skills: ['MS Excel', 'Power BI Dashboards', 'Technical Writing'],
    },
  ];

  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#fff' }}>
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
          Skills & Expertise
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 6 }}>
          {skillCategories.map((cat) => (
            <Box key={cat.cat}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#667eea', mb: 3 }}>
                {cat.cat}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {cat.skills.map((skill) => (
                  <Box key={skill}>
                    <Typography variant="body2" sx={{ fontWeight: '600', mb: 0.5 }}>
                      {skill}
                    </Typography>
                    <Box
                      sx={{
                        height: '8px',
                        background: 'rgba(102, 126, 234, 0.1)',
                        borderRadius: '4px',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          height: '100%',
                          width: '85%',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
