# 🚀 Quick Start: Waitlist Email & Sheets Collection

Get your waitlist working in 10 minutes!

## ✅ What You Get

- Automatic welcome emails to users
- All signups saved to Google Sheets
- Beautiful email template

---

## Step 1: Google Sheets (3 min)

1. Go to [sheets.google.com](https://sheets.google.com) → New sheet
2. Add headers: `Email | Category | Interview | Timestamp`
3. **Extensions** → **Apps Script**
4. Copy code from `GOOGLE-SHEETS-SETUP.md` (lines 38-98)
5. **Deploy** → **New deployment** → **Web app**
6. Set "Who has access" to **Anyone**
7. Copy the Web App URL

---

## Step 2: Email Setup (3 min)

1. Go to [resend.com](https://resend.com) → Sign up (free)
2. **API Keys** → **Create API Key**
3. Copy the API key

---

## Step 3: Configure (2 min)

Create `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_SHEET_URL=YOUR_GOOGLE_SHEET_URL_HERE
RESEND_API_KEY=YOUR_RESEND_API_KEY_HERE
FROM_EMAIL=onboarding@resend.dev
```

---

## Step 4: Test (2 min)

```bash
npm run dev
```

- Open http://localhost:3000
- Test the form
- Check your email
- Check your Google Sheet

---

## ✅ Done!

**Your waitlist is live!**

**Full documentation:** See `GOOGLE-SHEETS-SETUP.md` for detailed Google Sheets setup.

**Port:** Your server is running on http://localhost:3000

---

**Cost:** $0 (3,000 free emails/month from Resend)
