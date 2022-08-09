const nodemailer = require("nodemailer");

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sender@gmail.com',// here you put your email
        pass: 'senderPassword'  // here you put your password after 2 step verification app password which is 16 character
    },
    tls: {
        rejectUnauthorized: false
    }, 
});
// details about email
const mailOptions = {
    from: 'sender@gmail.com',
    to: 'reciever@gmail.com, reciever@gmail.com', // you can write multiple or single email as well 
    subject: 'your subject',
    html: `<h1> Hey ! i hope you are doing well </h1>`,
     
};
//send mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('some error appears: ' + error);
    } else {
        console.log(`email sent: ${info.response}`);
    }

})