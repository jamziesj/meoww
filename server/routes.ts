import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./email";
import { z } from "zod";

// Quote request validation schema
const quoteRequestSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10),
  damageType: z.string(),
  chipCount: z.string().optional(),
  description: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Email quote endpoint
  app.post("/api/send-quote", async (req, res) => {
    try {
      const validatedData = quoteRequestSchema.parse(req.body);
      
      const htmlBody = `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #ec192f; border-bottom: 2px solid #ec192f; padding-bottom: 10px;">
                New Quote Request - Zip Glass
              </h1>
              
              <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #ec192f; margin-top: 0;">Customer Information</h2>
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Phone:</strong> ${validatedData.phone}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
              </div>
              
              <div style="background: #f0f8f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #ec192f; margin-top: 0;">Damage Details</h2>
                <p><strong>Type:</strong> ${validatedData.damageType}</p>
                ${validatedData.chipCount ? `<p><strong>Number of chips/cracks:</strong> ${validatedData.chipCount}</p>` : ''}
              </div>
              
              ${validatedData.description ? `
                <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
                  <h2 style="color: #ec192f; margin-top: 0;">Additional Information</h2>
                  <p>${validatedData.description}</p>
                </div>
              ` : ''}
              
              <div style="background: #ec192f; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                This quote request was submitted through the Zip Glass website.
              </p>
            </div>
          </body>
        </html>
      `;
      
      const textBody = `
New Quote Request - Zip Glass

Customer Information:
Name: ${validatedData.name}
Phone: ${validatedData.phone}
Email: ${validatedData.email}

Damage Details:
${validatedData.damageType}
${validatedData.chipCount ? `Number of chips/cracks: ${validatedData.chipCount}` : ''}

${validatedData.description ? `Additional Information:\n${validatedData.description}` : ''}

Submitted on: ${new Date().toLocaleString()}
      `;

      // Log the quote request for immediate access
      console.log('=== NEW QUOTE REQUEST ===');
      console.log('Name:', validatedData.name);
      console.log('Email:', validatedData.email);
      console.log('Phone:', validatedData.phone);
      console.log('Damage Type:', validatedData.damageType);
      if (validatedData.chipCount) console.log('Chip Count:', validatedData.chipCount);
      if (validatedData.description) console.log('Description:', validatedData.description);
      console.log('Submitted:', new Date().toLocaleString());
      console.log('========================');

      // Try to send email through AWS SES, but continue even if it fails
      let emailResult: { success: boolean; error?: string } = { success: false, error: 'Email service not configured' };
      try {
        console.log('Attempting to send email to info@zip.glass');
        emailResult = await sendEmail({
          to: 'info@zip.glass',
          from: 'info@zip.glass', // SES verified sender
          subject: `New Quote Request from ${validatedData.name}`,
          htmlBody,
          textBody
        });
        
        if (emailResult.success) {
          console.log('✅ Email sent successfully to info@zip.glass');
        }
      } catch (error) {
        console.error('Email sending failed, but quote was logged:', error);
      }

      // Always respond with success since quote is logged
      // Email is a bonus if it works, but shouldn't block the user
      if (emailResult.success) {
        console.log('✅ Quote logged AND email sent to info@zip.glass');
      } else {
        console.log('📋 Quote logged (email delivery pending SES configuration)');
      }
      
      res.json({ 
        success: true, 
        message: 'Quote request received successfully! We will contact you shortly.' 
      });
    } catch (error) {
      console.error('Quote submission error:', error);
      res.status(400).json({ 
        success: false, 
        message: 'Invalid quote data. Please check your information and try again.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
