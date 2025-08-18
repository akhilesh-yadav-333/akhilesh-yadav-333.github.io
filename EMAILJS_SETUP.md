# EmailJS Setup Guide

To make your "PING ME" contact form work, you need to set up EmailJS. Here's how:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Message from {{name}}

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Code
Replace these placeholders in `src/components/Contact.js`:

```javascript
// Replace these with your actual EmailJS credentials
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // ← Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // ← Replace with your Template ID  
  e.target,
  'YOUR_PUBLIC_KEY'      // ← Replace with your Public Key
);
```

## Step 6: Test
1. Fill out the contact form
2. Click "PING ME"
3. Check your email for the message

## Free Tier Limits
- 200 emails per month
- Perfect for portfolio sites

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is connected
- Ensure template variables match form field names

Your contact form will now actually send emails when someone clicks "PING ME"! 🚀
