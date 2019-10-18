const nodemailer = require('nodemailer');

async function email(req, res) {
  const name = req.body.name;
  const address = req.body.address;

  // const testAccount = await nodemailer.createTestAccount();

  const transporter = await nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'Match3ScoreBoard@gmail.com',
      pass: 'Ligalegend1'
    }
  });

  const message = {
    from: 'OOO "STRATEGIYA USPEHA" <4004tz@mail.ru>',
    to: `${address}`,
    subject: 'Nodemailer is unicode friendly ✔',
    text: 'Hello to you',
    html: '<p><b>Hello</b> to myself</p>'
  }

  transporter.sendMail(message)
    .then(info => {
      return res.json({ 'status': `Message sent successfully as ${info.messageId}` })
    })
    .catch(err => res.status(404).json(err));
}

module.exports = {
  email
};