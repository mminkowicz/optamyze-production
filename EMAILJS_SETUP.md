# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form on your website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use the template below or design your own using these variables:

### Email Template Example

**Subject Line:**
```
New Contact Form Submission from {{user_name}}
```

**Email Body (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; text-align: center; font-size: 28px;">New Contact Form Submission</h1>
    </div>
    
    <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
        <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0;">{{user_name}}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:{{user_email}}" style="color: #667eea;">{{user_email}}</a></td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0;">{{user_company}}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:{{user_phone}}" style="color: #667eea;">{{user_phone}}</a></td>
            </tr>
            <tr>
                <td style="padding: 8px 0; font-weight: bold;">Timeline:</td>
                <td style="padding: 8px 0;">{{user_timeline}}</td>
            </tr>
        </table>
    </div>
    
    <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
        <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Project Details</h2>
        <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
            <p style="margin: 0; white-space: pre-wrap;">{{user_message}}</p>
        </div>
    </div>
    
    <div style="background: #e8f4fd; padding: 20px; border-radius: 10px; border-left: 4px solid #667eea;">
        <h3 style="margin-top: 0; color: #333;">Next Steps</h3>
        <ul style="margin: 0; padding-left: 20px;">
            <li>Review the project requirements</li>
            <li>Schedule a consultation call</li>
            <li>Prepare a custom proposal</li>
            <li>Follow up within 2 hours</li>
        </ul>
    </div>
    
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
        <p>This message was sent from the Optamyze contact form.</p>
        <p>Submitted on: <span id="current-date"></span></p>
    </div>
    
    <script>
        document.getElementById('current-date').textContent = new Date().toLocaleString();
    </script>
</body>
</html>
```

**Plain Text Version (for email clients that don't support HTML):**
```
NEW CONTACT FORM SUBMISSION

Contact Information:
- Name: {{user_name}}
- Email: {{user_email}}
- Company: {{user_company}}
- Phone: {{user_phone}}
- Timeline: {{user_timeline}}

Project Details:
{{user_message}}

Next Steps:
- Review the project requirements
- Schedule a consultation call
- Prepare a custom proposal
- Follow up within 2 hours

This message was sent from the Optamyze contact form.
Submitted on: [Current Date]
```

4. Save the template and note down your **Template ID**

### Alternative Template Options

**Simple Professional Template:**
```
Subject: New Lead from Optamyze Website - {{user_name}}

Hi,

You have a new contact form submission:

Name: {{user_name}}
Email: {{user_email}}
Company: {{user_company}}
Phone: {{user_phone}}
Timeline: {{user_timeline}}

Message:
{{user_message}}

Please respond within 2 hours.

Best regards,
Optamyze Contact Form
```

**Detailed Business Template:**
```
Subject: 🚀 New Project Inquiry - {{user_company}} ({{user_name}})

Hello,

A new potential client has submitted a project inquiry through our website.

📋 CONTACT DETAILS:
• Name: {{user_name}}
• Email: {{user_email}}
• Company: {{user_company}}
• Phone: {{user_phone}}
• Project Timeline: {{user_timeline}}

💬 PROJECT DESCRIPTION:
{{user_message}}

⏰ ACTION REQUIRED:
• Review the project requirements
• Schedule initial consultation (30 min)
• Prepare custom proposal
• Follow up within 2 hours

📊 LEAD QUALIFICATION:
- Timeline: {{user_timeline}}
- Company Size: {{user_company}}
- Contact Method: {{user_email}} / {{user_phone}}

Best regards,
Optamyze Lead Management System
```

### Template Customization Tips

1. **Subject Lines**: Use action words and include the person's name or company
2. **Variables**: Always use double curly braces `{{variable_name}}`
3. **Formatting**: Use HTML for rich formatting, plain text for compatibility
4. **Branding**: Include your logo, colors, and company information
5. **Call-to-Action**: Clear next steps for the recipient

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const emailjsConfig = {
  serviceId: 'your_actual_service_id',
  templateId: 'your_actual_template_id', 
  publicKey: 'your_actual_public_key',
};
```

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Go to the contact form
3. Fill out and submit the form
4. Check your email to confirm it's working

## Security Notes

- The public key is safe to use in frontend code
- Never expose your private keys
- Consider using environment variables for production

## Troubleshooting

- Check the browser console for error messages
- Verify all credentials are correct
- Make sure your email service is properly connected
- Check that template variables match the form field names

## Free Plan Limits

- 200 emails per month
- Basic templates
- Standard support

For more emails or advanced features, consider upgrading to a paid plan. 