const nodemailer = require('nodemailer');

const sentMail = async options => {
  const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'b6fafe0de666db',
      pass: '2ab620c3ffb7ca'
    }
  });

  const mailOption = {
    from: 'Saurabh Sharma <hello@saurabh.io',
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  await transport.sentMail(mailOption);
};

module.exports = sentMail;
