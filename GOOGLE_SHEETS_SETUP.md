# Google Sheets Integration Setup

This guide will help you set up Google Sheets integration for your contact form submissions.

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## Step 2: Create a Service Account

1. In the Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: "Contact Form Service"
   - Description: "Service account for contact form submissions"
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 3: Generate Service Account Key

1. In the "Credentials" page, find your new service account
2. Click on it, then go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format
5. Download the JSON file (keep it secure!)

## Step 4: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 5: Share the Sheet with Service Account

1. In your Google Sheet, click "Share"
2. Paste the service account email (from the JSON file) as an editor
3. Click "Share"

## Step 6: Set Environment Variables

Create a `.env.local` file in your project root with these variables:

```env
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
```

**Important:** Make sure to:
- Replace `\n` with actual newlines in the private key
- Keep the quotes around the private key
- Never commit this file to version control

## Step 7: Test the Integration

1. Restart your development server
2. Fill out the contact form
3. Check your Google Sheet - you should see a new row with the submission data

## Troubleshooting

- **"Google Sheets credentials not configured"**: Check your environment variables
- **Permission denied**: Make sure you shared the sheet with the service account email
- **Invalid credentials**: Verify the service account key is correct

## Data Structure

The sheet will automatically create these columns in order:
- **Submitted At** - Timestamp when form was submitted
- **Type** - "contact" or "quote"
- **Name** - Person's full name
- **Email** - Email address
- **Genre** - Book genre (only for quote requests)
- **Service Interest** - Service they're interested in (only for quote requests)
- **Budget Range** - Budget range (only for quote requests)
- **Timeline** - Project timeline (only for quote requests)
- **Message** - The message/content they wrote

**Note:** For contact forms, Genre, Service Interest, Budget Range, and Timeline columns will be empty. For quote forms, all columns will be filled.