"use strict";

const { createCoreController } = require('@strapi/strapi').factories;
const nodemailer = require('nodemailer');

module.exports = createCoreController('api::message.message', ({ strapi }) => ({
  async create(ctx) {
    const { full_name, service, phone, message, email } = ctx.request.body;

//    console.log('Received body:', ctx.request.body);

    // 1️⃣ Save the message in the DB
    const entity = await strapi.db.query('api::message.message').create({
      data: { full_name, service, phone, message, email },
    });

    // 2️⃣ Send email using Nodemailer
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER || 'beglaryanclinic@gmail.com', // your Gmail
          pass: process.env.SMTP_PASS, // App password
        },
      });

      await transporter.sendMail({
        from: `"${full_name}" <${email}>`, // from user email
        to: process.env.SMTP_USER || 'beglaryanclinic@gmail.com', // your inbox
        replyTo: email,
        subject: `New Message from Beglaryan Clinic Website `,
        text: `
          Name: ${full_name}
          Service: ${service}
          Phone: ${phone}
          Message: ${message}
        `,
        html: `
          <p><strong>Name:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      });

      console.log('Email sent successfully');
    } catch (err) {
      console.error('Failed to send email:', err);
    }

    return entity;
  },
}));
