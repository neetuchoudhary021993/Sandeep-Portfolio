# Sandeep Kumar - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Material-UI, and Vite. Features a professional design with a contact form that sends emails directly to your inbox.

## Features

✨ **Responsive Design** - Mobile-first approach with excellent desktop experience
📧 **Contact Form** - Functional contact form with email integration
🎨 **Modern UI** - Material-UI components with custom gradient styling
📱 **Mobile Menu** - Hamburger menu for mobile navigation
⚡ **Fast Performance** - Built with Vite for optimal performance
📄 **Multiple Sections**:
  - Hero section with profile image
  - About me section with key metrics
  - Skills & expertise showcase
  - Featured work/projects
  - Professional experience timeline
  - Education history
  - Contact section with form and social links

## Tech Stack

- **Frontend**: React 19, TypeScript, Material-UI
- **Build Tool**: Vite
- **Backend**: Node.js, Express
- **Email Service**: Nodemailer
- **Styling**: MUI sx prop system with gradients

## Project Structure

```
portfoilio/
├── src/
│   ├── App.tsx           # Main component
│   ├── main.tsx          # Entry point
│   ├── index.css         # Global styles
│   └── assets/
│       ├── Sandeep_photo.jpeg      # Profile photo
│       └── Sandeep_8299596269.pdf  # Resume PDF
├── server/
│   └── server.js         # Express backend for email
├── .env                  # Environment variables
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Gmail account with 2FA enabled

### Steps

1. **Clone or navigate to the project directory**
```bash
cd portfoilio
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Email (Gmail)**
   - See [EMAIL_SETUP.md](EMAIL_SETUP.md) for detailed instructions
   - Enable 2FA on your Gmail account
   - Generate an App Password
   - Update `.env` file with your credentials

4. **Update .env file**
```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_char_app_password
PORT=5000
```

## Running the Application

### Option 1: Run both frontend and backend together
```bash
npm run dev:all
```

### Option 2: Run separately in different terminals

**Terminal 1 - Backend Server:**
```bash
npm run server
```

**Terminal 2 - Frontend Development:**
```bash
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5174` (or next available port)
- Backend: `http://localhost:5000`

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Customization

### Update Personal Information

Edit `src/App.tsx` to update:
- Name and title
- Professional summary
- Skills and expertise
- Work experience
- Education details
- Contact information
- Social media links

### Modify styling

The portfolio uses Material-UI's sx prop for styling. Key colors:
- Primary: `#667eea` (purple-blue)
- Secondary: `#764ba2` (dark purple)
- Update theme colors in the `createTheme` object

### Add or Remove Sections

Each section (About, Skills, Projects, Experience, Education, Contact) is easily customizable:
- Modify data arrays
- Add/remove sections by editing the JSX structure
- Change component layouts

## Features in Detail

### Contact Form
- Real-time validation
- Loading state during submission
- Success/error notifications
- Sends to configured email address
- Responsive design

### Profile Image
- Located in hero section
- Automatically fits the container
- Responsive sizing

### Navigation
- Smooth scrolling to sections
- Mobile hamburger menu
- Sticky header

### Social Links
- LinkedIn integration
- Email contact links
- Location information

## Troubleshooting

### Email Not Sending
1. Check `.env` file has correct email and app password
2. Verify Gmail 2FA is enabled
3. Confirm app password (16 characters)
4. Check backend server is running on port 5000

### Port Already in Use
Change PORT in `.env` and update proxy target in `vite.config.ts`

### Build Errors
Run `npm install` again to ensure all dependencies are installed

## Future Enhancements

- [ ] Add project showcase with images/links
- [ ] Implement database for form submissions
- [ ] Add dark mode toggle
- [ ] Newsletter signup integration
- [ ] Analytics integration
- [ ] Blog section
- [ ] Download CV functionality

## Contact & Support

For issues or questions about the portfolio, contact: Sandeepku3010@gmail.com

## License

This portfolio is personal property. © 2026 Sandeep Kumar

---

**Happy coding!** Feel free to customize this portfolio to match your personal branding.
