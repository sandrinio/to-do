const nodemailer = require('nodemailer');

const mailer = {};

mailer.transporter = nodemailer.createTransport({
   host: 'smtp.zoho.com',
   port: 465,
   secure: true, // use SSL
   auth: {
      user: 'g.hub@geohub.ge',
      pass: 'Pachuchi321'
   }
});

// const HelperOption = {
//     from: "'Geohub ' <g.hub@geohub.ge>",
//     to: 'sandro.suladze@gmail.com',
//     subject: `New post by ` + req.user.firstname + ` ` + req.user.lastname,
//     html:`<strong>Title:</strong> ` + req.body.nPost.title +  `<br> <strong>Status: </strong>` + req.body.status + `<br> <strong>TAG:</strong> ` + req.body.nPost.tag
//  };

//  mailer.transporter.sendMail(HelperOption, function (error, info) {
//     if(error){
//        return console.log(error)
//     }
//     console.log(info)
//  });
module.exports = mailer;