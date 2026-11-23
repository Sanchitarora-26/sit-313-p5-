
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Mailjet from 'node-mailjet';
import 'dotenv/config';
import { createServer } from 'vite';

const app = express();
const PORT = process.env.PORT || 3000;
const projectFolder = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());

app.post('/subscribe', async (req, res) => {
  console.log('Received newsletter subscription request');

  const email = String(req.body.email || '').trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    console.log('Status 400: Invalid email address');
    return res.status(400).json({
      message: 'Please enter a valid email address.'
    });
  }

  if (
    !process.env.MJ_APIKEY_PUBLIC ||
    !process.env.MJ_APIKEY_PRIVATE ||
    !process.env.FROM_EMAIL
  ) {
    console.error('Status 500: Mailjet configuration is missing');
    return res.status(500).json({
      message: 'Email service is not configured.'
    });
  }

  try {
    const mailjet = Mailjet.apiConnect(
      process.env.MJ_APIKEY_PUBLIC,
      process.env.MJ_APIKEY_PRIVATE
    );

    const result = await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.FROM_EMAIL,
              Name: 'DEV@Deakin/Chitkara'
            },
            To: [
              {
                Email: email
              }
            ],
            Subject: 'Welcome to DEV@Deakin/Chitkara!',
            TextPart:
              'Thank you for subscribing to DEV@Deakin/Chitkara. We are happy to have you with us!',
            HTMLPart: `
              <h1>Welcome to DEV@Deakin/Chitkara!</h1>
              <p>Thank you for subscribing to our newsletter.</p>
              <p>We are happy to have you with us!</p>
            `
          }
        ]
      });

    console.log(`Mailjet: Welcome email sent to ${email}`);

    return res.status(200).json({
      message: 'Subscribed! Please check your email.'
    });

  } catch (error) {
    console.error('Mailjet email sending failed:');

    if (error.statusCode) {
      console.error('Mailjet Status:', error.statusCode);
    }

    if (error.message) {
      console.error('Error:', error.message);
    }

    return res.status(500).json({
      message: 'Could not send the welcome email. Please try again.'
    });
  }
});

if (process.argv.includes('--production')) {
  app.use(express.static(path.join(projectFolder, 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(projectFolder, 'dist', 'index.html'));
  });
} else {
  const vite = await createServer({
    server: { middlewareMode: true }
  });

  app.use(vite.middlewares);
}

app.listen(PORT, () => {
  console.log(
    `DEV@Deakin/Chitkara server running at http://localhost:${PORT}`
  );
});
