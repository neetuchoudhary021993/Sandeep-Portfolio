import { Box, Container, Typography, Paper } from '@mui/material';
import PFI from '../../assets/powerfoundationofindia_logo.jpeg';
import CER from '../../assets/cer_iit_kanpur_logo.jpeg';
import UPRNN from '../../assets/uttar_pradesh_rajya_vidyut_utpadan_nigam_limited_logo.jpeg';
import BHEL from '../../assets/bhel_1.png';

const ExperienceIcon = ({ company }: { company: string }) => {
  const getLogoSource = () => {
    if (company.includes('Power Foundation')) return PFI;
    if (company.includes('Centre for Energy')) return CER;
    if (company.includes('BHEL')) return BHEL;
    if (company.includes('UTTAR PRADESH')) return UPRNN;
    return null;
  };

  const logoSrc = getLogoSource();

  return (
    <Box
      sx={{
        width: '70px',
        height: '70px',
        borderRadius: '12px',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        border: '2px solid #e0e0e0',
      }}
    >
      {logoSrc ? (
        <img src={logoSrc} alt={company} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '8px' }} />
      ) : null}
    </Box>
  );
};

export const Experience = () => {
  const experiences = [
    {
      id: 'exp-pfi',
      title: 'Associate (Regulatory)',
      company: 'Power Foundation of India',
      period: 'Dec 2025 - Present · 3 mos',
      location: 'On-site',
      desc: 'Working on regulatory analysis and policy frameworks for India\'s power sector transformation. Focus on renewable energy procurement, compliance framework development, and stakeholder engagement.',
      type: 'current' as const,
      skills: ['Regulatory Analysis', 'Power Systems', 'Policy Development'],
    },
    {
      id: 'exp-cer',
      title: 'Project Engineer',
      company: 'Centre for Energy Regulation & Energy Analytics Lab - IIT KANPUR',
      period: 'Dec 2023 - Dec 2025 · 2 yrs 1 mo',
      location: 'Kanpur, Uttar Pradesh',
      desc: 'Led power sector regulation projects including RCP and e-Masters programs. Analyzed national demand profiles, renewable energy generation, and IEX market data. Provided policy consultation on RPO, REC compliance, and green hydrogen initiatives.',
      type: 'engineer' as const,
      skills: ['Energy Conservation', 'Problem Solving', '+24 skills'],
    },
    {
      id: 'exp-apprentice',
      title: 'Graduate Apprentice Trainee',
      company: 'UTTAR PRADESH RAJYA VIDYUT UTPADAN NIGAM LIMITED',
      period: 'Jul 2021 - Jun 2022 · 1 yr',
      location: 'Uttar Pradesh',
      desc: 'Completed hands-on training in power generation and distribution systems. Developed expertise in electrical design, equipment selection, and load calculations.',
      type: 'apprentice' as const,
      skills: ['Problem Solving', 'Calculations', '+19 skills'],
    },
    {
      id: 'exp-intern-bhel',
      title: 'Summer Intern',
      company: 'BHEL, HERP, Tarna Shivpur Varanasi',
      period: 'Jun 2019 - Jul 2019 · 2 mos',
      location: 'Varanasi',
      desc: 'Interned at Bharat Heavy Electricals Limited gaining practical experience in power systems and industrial operations.',
      type: 'intern' as const,
      skills: ['Power Systems', 'Problem Solving', '+4 skills'],
    },
    {
      id: 'exp-intern-uprnn',
      title: 'Summer Intern',
      company: 'UTTAR PRADESH RAJYA VIDYUT UTPADAN NIGAM LIMITED',
      period: 'Jun 2016 - Jul 2016 · 2 mos',
      location: 'Uttar Pradesh',
      desc: 'Early career exposure to power generation processes and technical operations.',
      type: 'intern' as const,
      skills: ['Problem Solving', 'Troubleshooting', '+3 skills'],
    },
  ];

  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f0f4f8' }}>
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
          Professional Experience
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#666',
            fontSize: '1.05rem',
          }}
        >
          Journey through India's power sector
        </Typography>
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          {experiences.map((exp, idx) => (
            <Box
              key={exp.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'auto 1fr', md: '100px 1fr' },
                gap: { xs: 2, md: 3 },
                mb: idx !== experiences.length - 1 ? 4 : 0,
                position: 'relative',
              }}
            >
              {/* Timeline line with enhanced styling */}
              {idx !== experiences.length - 1 && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '27px', md: '45px' },
                    top: '90px',
                    width: '4px',
                    height: 'calc(100% + 60px)',
                    background: 'linear-gradient(180deg, #0066cc 0%, #ff8c00 100%)',
                    borderRadius: '2px',
                    boxShadow: '0 0 12px rgba(0, 102, 204, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                />
              )}

              {/* Icon */}
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: 1 }}>
                <ExperienceIcon company={exp.company} />
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
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: '#0066cc',
                        mb: 0.5,
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography sx={{ color: '#ff8c00', fontWeight: 700, mb: 0.5 }}>
                      {exp.company}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, mb: 1.5, flexWrap: 'wrap' }}>
                  <Typography variant="caption" sx={{ color: '#999', fontWeight: 600 }}>
                    📅 {exp.period}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#999', fontWeight: 600 }}>
                    📍 {exp.location}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#555', mb: 2, lineHeight: 1.7 }}>
                  {exp.desc}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {exp.skills.map((skill) => (
                    <Box
                      key={skill}
                      sx={{
                        px: 2,
                        py: 0.5,
                        background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(255, 140, 0, 0.1) 100%)',
                        borderRadius: '20px',
                        border: '1px solid rgba(0, 102, 204, 0.2)',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#0066cc',
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

