# FormSpark Integration Guide

Your contact form is now ready to connect to FormSpark! Follow these simple steps to get it working.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create a FormSpark Account

1. Go to **https://formspark.io**
2. Click **"Sign Up"** (it's free!)
3. Create your account with email

### Step 2: Create a New Form

1. Once logged in, click **"New Form"** or **"Create Form"**
2. Give it a name: **"Pickering Proposal Contact Form"**
3. Click **"Create"**

### Step 3: Get Your Form ID

1. After creating the form, you'll see your **Form ID** (looks like: `abc123xyz`)
2. **Copy this ID** - you'll need it in the next step!

### Step 4: Update the Website Code

1. Open the file: `components/sections/next-steps.tsx`

2. Find this line (around line 47):
   ```typescript
   const FORMSPARK_FORM_ID = "YOUR_FORMSPARK_FORM_ID"
   ```

3. Replace `"YOUR_FORMSPARK_FORM_ID"` with your actual Form ID:
   ```typescript
   const FORMSPARK_FORM_ID = "abc123xyz"  // Use your real ID here
   ```

4. Save the file

### Step 5: Test the Form

1. Make sure your dev server is running (`npm run dev`)
2. Navigate to the "Next Steps" section on your site
3. Fill out the contact form with test data
4. Click **"Send Message"**
5. You should see **"Message sent successfully!"**

### Step 6: Check Your Email

1. Go back to FormSpark dashboard
2. Click on your form
3. You should see the test submission!
4. By default, FormSpark sends submissions to your account email

---

## 📧 Email Notifications Setup

### Configure Where Submissions Go

1. In FormSpark dashboard, click on your form
2. Go to **"Settings"** → **"Email Notifications"**
3. Add the email address where you want to receive form submissions
4. You can add multiple emails (e.g., your email + client's email)

### Example Configuration:
```
Notification Email: hello@jjlmedia.co.uk
CC Email: pickering@example.com (optional)
```

---

## ✨ Advanced Features (Optional)

### Custom Email Template

1. In FormSpark, go to **"Settings"** → **"Email Template"**
2. Customize the email format you receive
3. Example template:
   ```
   New contact from Pickering Proposal Website!

   Name: {{name}}
   Email: {{email}}
   Phone: {{phone}}
   Best Time to Contact: {{bestTime}}

   Message:
   {{message}}
   ```

### Auto-Reply to Sender

1. Go to **"Settings"** → **"Auto-Reply"**
2. Enable auto-reply
3. Example message:
   ```
   Thank you for your interest in our Pickering Cancer Centre proposal!

   We've received your message and will be in touch within 24 hours.

   Best regards,
   JJL Media Team
   ```

### Spam Protection

1. Go to **"Settings"** → **"Spam Protection"**
2. Enable **reCAPTCHA** or **Honeypot** (both free)
3. FormSpark handles this automatically - no code changes needed!

### Webhook Integration (Advanced)

If you want to send form data to other services:

1. Go to **"Settings"** → **"Webhooks"**
2. Add webhook URL (e.g., Zapier, Slack, etc.)
3. FormSpark will POST form data to your webhook

---

## 🔍 Troubleshooting

### Form Not Submitting?

**Check 1: Form ID**
- Make sure you replaced `YOUR_FORMSPARK_FORM_ID` with your actual Form ID
- No quotes around the ID
- No spaces

**Check 2: Internet Connection**
- FormSpark requires an internet connection
- Check browser console for errors (F12 → Console tab)

**Check 3: FormSpark Status**
- Visit https://status.formspark.io to check if service is up

### Not Receiving Emails?

**Check 1: Spam Folder**
- FormSpark emails might go to spam initially
- Mark as "Not Spam" to whitelist

**Check 2: Email Address**
- Verify the notification email in FormSpark settings is correct
- Try adding a different email address

**Check 3: FormSpark Dashboard**
- Submissions should still appear in dashboard even if emails aren't working
- This confirms the form is working

### Form Shows Error Message?

- Check browser console (F12) for specific error
- Verify Form ID is correct
- Make sure FormSpark account is active (free tier has limits)

---

## 📊 View Submissions

### In FormSpark Dashboard:

1. Log into https://formspark.io
2. Click on your form
3. See all submissions with timestamps
4. Export to CSV if needed

### Example Submission View:

```
Name: John Smith
Email: john@example.com
Phone: 01234567890
Best Time: Afternoon (12pm-5pm)
Message: We'd love to discuss this proposal further...
Received: 24 Oct 2025, 10:30 AM
```

---

## 💰 FormSpark Pricing

### Free Plan
- **50 submissions/month**
- Perfect for this proposal site (low traffic expected)
- Email notifications included
- Spam protection included

### Paid Plans (if needed)
- **Starter:** $9/month - 1,000 submissions
- **Pro:** $19/month - 10,000 submissions
- **Business:** $39/month - Unlimited

For the Pickering proposal, the **free plan is plenty**!

---

## 🔒 Data & Privacy

### GDPR Compliant
- FormSpark is GDPR compliant
- Data stored securely
- You can delete submissions anytime

### Data Retention
- Submissions stored indefinitely on free plan
- You can export or delete at any time

### Security
- All submissions sent over HTTPS
- No sensitive data stored (passwords, payment info, etc.)

---

## 🎯 Testing Checklist

Before going live, test:

- [ ] Form submission works
- [ ] Email notification received
- [ ] Auto-reply sent (if configured)
- [ ] Submission appears in FormSpark dashboard
- [ ] Error handling works (test with invalid email)
- [ ] Loading state shows when submitting
- [ ] Success message appears
- [ ] Form resets after successful submission

---

## 📝 Alternative: Manual Testing Without FormSpark

If you want to test the site without setting up FormSpark yet:

1. Comment out the FormSpark code
2. Use this simple version in `components/sections/next-steps.tsx`:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log("Form submitted:", formData)
  alert("Thank you! We'll be in touch soon. (This is a test - no email sent)")
}
```

This will just show an alert and log to console - good for demo purposes.

---

## 🆘 Need Help?

### FormSpark Support:
- **Email:** support@formspark.io
- **Docs:** https://documentation.formspark.io
- **Response time:** Usually within 24 hours

### Code Issues:
- Check the browser console (F12 → Console)
- Verify the Form ID is correctly set
- Make sure `npm install` was run successfully

---

## ✅ Quick Reference

**FormSpark Dashboard:** https://formspark.io
**Form ID Location:** `components/sections/next-steps.tsx` line 47
**Test Form:** Scroll to "Next Steps" section on your site
**View Submissions:** FormSpark Dashboard → Your Form → Submissions

---

**That's it!** Your contact form is ready to receive messages from trustees interested in the proposal. 🎉

**Questions?** Open an issue or contact JJL Media support.
