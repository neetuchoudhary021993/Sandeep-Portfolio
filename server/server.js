import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Add logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Body:', req.body);
  next();
});

// Email transporter configuration
let transporter;
const emailConfigured = process.env.EMAIL_PASS && 
                       process.env.EMAIL_PASS !== 'your_app_password_here' && 
                       process.env.EMAIL_USER;

if (emailConfigured) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

// Function to save submissions to JSON file
const saveSubmissionToFile = (data) => {
  const submissionsFile = path.join(__dirname, '../submissions.json');
  let submissions = [];
  
  try {
    if (fs.existsSync(submissionsFile)) {
      const content = fs.readFileSync(submissionsFile, 'utf8');
      submissions = JSON.parse(content);
    }
  } catch (error) {
    console.log('Creating new submissions file');
  }

  submissions.push({
    ...data,
    timestamp: new Date().toISOString(),
  });

  fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2));
};

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save submission to file
    saveSubmissionToFile({ to, name, email, message });

    // If Gmail is configured, send email
    if (emailConfigured && transporter) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: to || 'neetu.choudhary02@gmail.com',
          subject: `New Message from ${name} - Portfolio Contact Form`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p>This message was sent from your portfolio contact form.</p>
          `,
          replyTo: email,
        };

        const info = await transporter.sendMail(mailOptions);

        return res.status(200).json({ 
          success: true, 
          message: 'Email sent successfully!',
          method: 'email'
        });
      } catch (emailError) {
        // Even if email fails, the submission was saved
        return res.status(200).json({
          success: true,
          message: 'Message received! (Email service temporarily unavailable, but your message has been saved)',
          method: 'file'
        });
      }
    } else {
      // Gmail not configured, but submission is saved
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your message has been received and saved.',
        emailConfigured: false,
        method: 'file'
      });
    }
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to process your message.',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'Server is running',
    emailConfigured: emailConfigured,
    timestamp: new Date().toISOString()
  });
});

// Test POST endpoint
app.post('/api/test', (req, res) => {
  console.log('Test endpoint received:', req.body);
  res.status(200).json({ success: true, received: req.body });
});

// Endpoint to check email configuration status
app.get('/api/status', (req, res) => {
  res.status(200).json({
    serverRunning: true,
    emailConfigured: emailConfigured,
    message: emailConfigured 
      ? 'Email service is configured' 
      : 'Email service not configured. Submissions will be saved to file.',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Email configured: ${emailConfigured}`);
});

