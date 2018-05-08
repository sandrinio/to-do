const nodemailer = require('nodemailer');
const mailer = {};

// mailer.transporter = nodemailer.createTransport({
//    host: 'smtp.zoho.com',
//    port: 465,
//    secure: true, // use SSL
//    auth: {
//       user: 'g.hub@geohub.ge',
//       pass: 'Pachuchi321'
//    }
// });

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

mailer.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: "suladze.sandro@gmail.com", 
        clientId: '592445235913-dgckidiqnqscf54ghv0ve8f63io4uc2o.apps.googleusercontent.com',
        clientSecret: 'ySBeuZW3_biUmA_XQXcFl9T2',
        accessToken: 'ya29.Glu1BeWiEWkRHLtWtEyrGpUjdamDLBKupJIdLzHmLCJGPVAvPW3p6FVGWmXbh3ge6l_p1O5Hk8IvSDWlFo4dlraHoliylDkUm8uYHXKRdQAZYPx2daC6grIhmBpm',
        refreshToken: "1/TyEv61qcAtU1aY0Q_zl9txeVSaEKeEATNWn9uEFblXI"
    }
  });

//   const mailOptions = {
//     from: "suladze.sandro@gmail.com",
//     to: "sandro.suladze@gmail.com",
//     subject: "Hello",
//     generateTextFromHTML: true,
//     html: "<b>Hello world</b>"
//   };
  
//   mailer.smtpTransport.sendMail(mailOptions, function(error, response) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(response);
//     }
//     smtpTransport.close();
//   });
module.exports = mailer;