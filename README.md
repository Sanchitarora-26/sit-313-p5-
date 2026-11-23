# SIT313 P5 – Newsletter Subscription

## Project Overview

This project is an extension of my DEV@Deakin website. In this task, I implemented a newsletter subscription feature using a React frontend and a Node.js backend.

Users can enter their email address in the newsletter section and submit the form to subscribe.

## Features

- Newsletter subscription form.
- Email input validation.
- React frontend connected to an Express backend.
- POST `/subscribe` API endpoint.
- SendGrid integration for email service.
- Success and error messages displayed to users.

## Technologies Used

- React
- JavaScript
- Node.js
- Express.js
- SendGrid
- HTML and CSS
- Vite

## Project Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root and add your own credentials:

```env
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=your_verified_sender_email
PORT=3000
```

Do not upload the `.env` file to GitHub.

### 3. Start the backend server

```bash
node server.js
```

### 4. Start the React frontend

Open another terminal and run:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## API Testing

The newsletter API uses:

**POST** `/subscribe`

The API accepts an email address and validates it before processing the subscription.

Testing results:

- Invalid email: HTTP 400 Bad Request.
- Valid email: HTTP 200 OK, when the email service is configured successfully.

## Security

- Environment variables are used for sensitive credentials.
- The `.env` file is excluded using `.gitignore`.
- Email input is validated before processing.

## Repository

Add your updated GitHub repository link here.

## Demonstration Video

Add your P5 walkthrough video link here.