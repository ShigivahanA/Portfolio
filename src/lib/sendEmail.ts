import nodemailer from 'nodemailer';

export const sendEmail = async (name: string, email: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS, 
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `New message from ${name}`,
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

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
