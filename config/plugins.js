module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env.int('SMTP_PORT', 587),
        secure: false,
        auth: {
          user: env('SMTP_USER', 'beglaryanclinic@gmail.com'), // Gmail address
          pass: env('SMTP_PASS', 'esqs egbb edwx zpng'), // App password
        },
      },
      settings: {
        defaultFrom: env('SMTP_FROM', 'beglaryanclinic@gmail.com'),
        defaultReplyTo: env('SMTP_REPLYTO', 'beglaryanclinic@gmail.com'),
      },
    },
  },
});

