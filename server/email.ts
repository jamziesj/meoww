import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Initialize SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  htmlBody: string;
  textBody: string;
}

export async function sendEmail(params: EmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const command = new SendEmailCommand({
      Source: params.from,
      Destination: {
        ToAddresses: [params.to],
      },
      Message: {
        Subject: {
          Data: params.subject,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: params.htmlBody,
            Charset: 'UTF-8',
          },
          Text: {
            Data: params.textBody,
            Charset: 'UTF-8',
          },
        },
      },
    });

    await sesClient.send(command);
    return { success: true };
  } catch (error) {
    console.error('SES email error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}