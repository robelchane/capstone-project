// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, number, message } = await request.json();

  // Nodemailer transporter setting
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // email account
      pass: process.env.EMAIL_PASS, // email app password
    },
  });

  // email option
  const mailOptions = {
    from: email, // sender email
    to: 'gaonseon@gmail.com', // recipient email
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nMessage: ${message}`,
  };

  try {
    // 이메일 보내기
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
