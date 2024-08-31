import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

   

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: 'New Contact Form Submission',
      text: message,
      html: `
          <html>
          <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
            <div style="width: 100%; background-color: #f4f4f4; padding: 20px; box-sizing: border-box;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border: 1px solid #dddddd; border-radius: 8px;">
                <h2 style="text-align: center; color: #333333;">New Contact Form Submission</h2>
                <p style="font-size: 16px; color: #555555;">
                  <strong>Name:</strong> ${name}
                </p>
                <p style="font-size: 16px; color: #555555;">
                  <strong>Email:</strong> ${email}
                </p>
                <p style="font-size: 16px; color: #555555;">
                  <strong>Message:</strong> ${message}
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false });
  }
}
