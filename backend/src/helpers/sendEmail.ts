import nodemailer, { Transporter } from 'nodemailer';

const { NODEMAILER_USER, NODEMAILER_PASS } = process.env;

interface EmailData {
  from: string;
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async (data: EmailData): Promise<void> => {
  const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: NODEMAILER_USER,
      pass: NODEMAILER_PASS,
    },
  });

  try {
    const info = await transporter.sendMail(data);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Помилка відправлення листа підтвердження');
  }
};

export default sendEmail;