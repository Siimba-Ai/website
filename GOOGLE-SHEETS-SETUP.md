# Google Sheets Waitlist Setup Guide

This guide will help you set up a Google Sheet to automatically collect all waitlist form submissions from your Siimba website.

## Overview

When someone submits the waitlist form on your website, their information (email, category, interview preference, timestamp) will be automatically added as a new row in your Google Sheet.

---

## Step-by-Step Setup

### 1. Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it something like **"Siimba Waitlist"**

### 2. Set Up Column Headers

In the first row of your sheet, add these column headers:

| A | B | C | D |
|---|---|---|---|
| Email | Category | Interview | Timestamp |

### 3. Open Apps Script Editor

1. In your Google Sheet, click **Extensions** in the top menu
2. Click **Apps Script**
3. This will open a new tab with the Apps Script editor

### 4. Add the Script Code

1. Delete any existing code in the editor
2. Copy and paste this entire script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Extract values
    var email = data.email || '';
    var category = data.category || '';
    var interview = data.interview ? 'Yes' : 'No';
    var timestamp = data.timestamp || new Date().toISOString();
    
    // Check if email already exists (optional duplicate prevention)
    var existingData = sheet.getDataRange().getValues();
    for (var i = 1; i < existingData.length; i++) {
      if (existingData[i][0] === email) {
        // Email already exists, return success anyway to avoid leaking info
        return ContentService.createTextOutput(JSON.stringify({
          'status': 'success',
          'message': 'Already subscribed'
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Append new row with the data
    sheet.appendRow([email, category, interview, timestamp]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Subscription successful'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional, for testing in the Apps Script editor)
function test() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        email: 'test@example.com',
        category: 'personal',
        interview: true,
        timestamp: new Date().toISOString()
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

3. Click the **disk icon** (💾) or press `Cmd+S` / `Ctrl+S` to save
4. You can name the project "Waitlist Form Handler" or anything you like

### 5. Deploy as Web App

1. Click the **Deploy** button in the top right corner
2. Select **New deployment**
3. Click the **gear icon** ⚙️ next to "Select type"
4. Choose **Web app**
5. Fill in the deployment settings:
   - **Description**: "Waitlist form handler" (or anything you want)
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone** (this is important!)
6. Click **Deploy**
7. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** (if you see a warning)
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow**
8. **Copy the Web app URL** - it will look like:
   ```
   https://script.google.com/macros/s/XXXXX.../exec
   ```
   **Save this URL - you'll need it in the next step!**

### 6. Add the URL to Your Website

1. In your project folder, create a file called `.env.local` (if it doesn't exist)
2. Add this line, replacing the URL with your Web app URL from step 5:

```bash
NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

3. Save the file
4. Restart your development server:
   ```bash
   npm run dev
   ```

---

## Testing

1. Go to your website (http://localhost:3000 or wherever it's running)
2. Scroll to the "Get early access" section
3. Fill out the form with a test email
4. Click "Join waitlist"
5. Check your Google Sheet - you should see a new row with the test data!

---

## Viewing Your Submissions

Simply open your Google Sheet anytime to see all submissions. You can:
- Sort by timestamp to see the most recent signups
- Filter by category to see different user types
- Export to CSV for use in email marketing tools
- Add additional columns for notes, follow-up status, etc.

---

## Troubleshooting

### Form submits but no data appears in the sheet

1. Check that you copied the **entire** Web app URL (including `/exec` at the end)
2. Make sure you selected **"Anyone"** for "Who has access" in the deployment settings
3. Try redeploying the script:
   - In Apps Script, click **Deploy** → **Manage deployments**
   - Click the **pencil icon** to edit
   - Change the version to **New version**
   - Click **Deploy**
   - Update your `.env.local` with the new URL

### "Authorization required" error

1. Go back to Apps Script
2. Click **Deploy** → **Manage deployments**
3. Make sure "Execute as" is set to **Me** (your account)
4. Make sure "Who has access" is set to **Anyone**

### Want to test the script directly?

1. In Apps Script, there's a `test()` function at the bottom of the code
2. Select `test` from the function dropdown at the top
3. Click the **Run** button (▶️)
4. Check your Google Sheet - you should see a test entry

---

## Production Deployment

When you're ready to deploy your website to production (Vercel, Netlify, etc.):

1. Add the environment variable to your hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GOOGLE_SHEET_URL` with your Web app URL

2. The form will automatically start sending submissions to your Google Sheet!

---

## Security Notes

- The Web app URL is public but difficult to guess
- The script only accepts POST requests with specific data
- Duplicate emails are automatically prevented
- No sensitive data should be collected beyond email addresses
- You can add rate limiting in the Apps Script if needed

---

## Optional: Get Email Notifications

If you want to receive an email every time someone signs up:

1. In your Apps Script, add this function at the end:

```javascript
function sendEmailNotification(email, category, interview) {
  var recipient = 'your-email@example.com'; // Replace with your email
  var subject = '🎉 New Siimba Waitlist Signup!';
  var body = 'New signup details:\n\n' +
             'Email: ' + email + '\n' +
             'Category: ' + category + '\n' +
             'Open to interview: ' + (interview ? 'Yes' : 'No') + '\n' +
             'Time: ' + new Date().toLocaleString();
  
  MailApp.sendEmail(recipient, subject, body);
}
```

2. Update the `doPost` function to call this (add after `sheet.appendRow([...])` on line 28):

```javascript
// Send email notification
sendEmailNotification(email, category, interview);
```

3. Save and redeploy (Deploy → Manage deployments → Edit → New version → Deploy)

---

## Need Help?

If you run into any issues:
1. Check the **Execution log** in Apps Script (View → Logs)
2. Make sure your `.env.local` file is in the root of your project
3. Restart your dev server after changing environment variables
4. Test the form with your browser's console open (F12) to see any errors

---

**That's it! Your waitlist form is now connected to Google Sheets. 🎉**
