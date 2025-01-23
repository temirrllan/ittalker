# IT-Talker Website Form Handler

This project implements a form handling system that saves submissions to Google Sheets. It's built with Next.js and uses the Google Sheets API for data storage.

## Features

- Form data collection and validation
- Automatic saving to Google Sheets
- Unique ID generation for each submission
- Russian date formatting
- Error handling and validation

## Setup

1. Clone the repository:
2. Install dependencies:

3. Set up Google Sheets API:

   - Create a Google Cloud Project
   - Enable Google Sheets API
   - Create a Service Account
   - Download the credentials
   - Share your Google Sheet with the service account email

4. Create `.env` file with the following variables:

GOOGLE_SHEET_ID="your-spreadsheet-id"
GOOGLE_SHEET_EMAIL="your-service-account-email"
GOOGLE_SHEET_PRIVATE_KEY="your-private-key"

## API Endpoint

The form submission endpoint is available at:
POST /api/submit-form

### Request Body

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "phone": "+7(777) 777-77-77"
}
```

## Google Sheet Structure

The data is saved with the following columns:

- ID: Unique identifier
- Дата: Submission date (DD.MM.YYYY)
- Имя: Name
- Телефон: Phone number
- Email: Email address

## Development

The project uses:

- Next.js 14
- Google Sheets API v4
- TypeScript
- Environment variables for configuration

## Error Handling

The system includes:

- Input validation
- API error handling
- Google Sheets API error handling
- Unique ID generation
- Automatic header creation

## Performance Optimization

- Minimized API calls
- Efficient data writing
- Optimized error handling
- Clean and maintainable code structure

## Security

- Environment variables for sensitive data
- Server-side API calls
- Input validation
- Error message sanitization

## License

MIT License
