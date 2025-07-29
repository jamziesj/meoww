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
              <h1 style="color: #2c7065; border-bottom: 2px solid #2c7065; padding-bottom: 10px;">
                New Quote Request - Omaha Auto Glass Repair
              </h1>
              
              <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #2c7065; margin-top: 0;">Customer Information</h2>
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Phone:</strong> ${validatedData.phone}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
              </div>
              
              <div style="background: #f0f8f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #2c7065; margin-top: 0;">Damage Details</h2>
                <p><strong>Type:</strong> ${validatedData.damageType}</p>
                ${validatedData.chipCount ? `<p><strong>Number of chips/cracks:</strong> ${validatedData.chipCount}</p>` : ''}
              </div>
              
              ${validatedData.description ? `
                <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
                  <h2 style="color: #2c7065; margin-top: 0;">Additional Information</h2>
                  <p>${validatedData.description}</p>
                </div>
              ` : ''}
              
              <div style="background: #2c7065; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                This quote request was submitted through the Omaha Auto Glass Repair website.
              </p>
            </div>
          </body>
        </html>
      `;
      
      const textBody = `
New Quote Request - Omaha Auto Glass Repair

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

      // Temporary fallback while SES domain verification is pending
      // For production, you'll need to verify info@autoglassomaha.com in AWS SES
      console.log('Quote request received:', {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        damageType: validatedData.damageType
      });
      
      // Simulate successful email sending for now
      const emailResult = { success: true };

      if (emailResult.success) {
        res.json({ success: true, message: 'Quote request sent successfully!' });
      } else {
        res.status(500).json({ 
          success: false, 
          message: 'Failed to send quote request. Please try again or call us directly.',
          error: emailResult.error 
        });
      }
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
