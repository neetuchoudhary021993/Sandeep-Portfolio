# Portfolio Email Setup Guide

## Gmail Configuration for Email Sending

To enable email functionality in your portfolio, follow these steps:

### 1. Enable 2-Factor Authentication (2FA) on Gmail
1. Go to https://myaccount.google.com/
2. Click "Security" in the left menu
3. Scroll down to "2-Step Verification"
4. Follow the prompts to enable 2FA

### 2. Create an App Password
1. Go back to Security settings
2. Look for "App passwords" (this appears only after 2FA is enabled)
3. Select "Mail" and "Windows Computer" (or your device)
4. Google will generate a 16-character password
5. Copy this password

### 3. Update .env File
1. Open the `.env` file in your project root
2. Replace the values:
```
EMAIL_USER=neetu.choudhary02@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx   (paste the 16-character app password here)
PORT=5000
```

### 4. Running the Application

**Run both frontend and backend together:**
```bash
npm run dev:all
```

**Or run them separately in different terminals:**

Terminal 1 (Backend):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run dev
```

## Features

✓ Contact form with name, email, and message fields
✓ Form validation
✓ Loading state during submission
✓ Success/error notifications
✓ Responsive design
✓ Email sent to: neetu.choudhary02@gmail.com

## Troubleshooting

**Issue: "Less secure app access" error**
- Gmail now uses App Passwords instead. Make sure you followed step 2 above.

**Issue: Port 5000 already in use**
- Change PORT in .env to another number (e.g., 5001, 5002)
- Update vite.config.ts proxy target accordingly

**Issue: Email not sending**
- Check that the 16-character app password is correct (without spaces)
- Ensure 2FA is enabled on your Gmail account
- Check server console for error messages

## Future Enhancements

- Add email templates
- Store submissions in a database
- Add email notifications to the sender
- Implement rate limiting
- Add file attachments support
