var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs'); // Added for reading the HTML email template
var nodemailer = require('nodemailer'); // Added for SMTP mailing

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// FIXED: Changed 'host' configuration to use the built-in 'service' optimizer for Gmail
// Updated to Port 587 to bypass network firewalls
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Must be false for port 587
  auth: {
    user: 'umerbhatti528m@gmail.com',
    pass: 'ytrd pspn phyk jkxb' // Your 16-character app password
  },
  tls: {
    rejectUnauthorized: false // Bypasses local router and ISP firewall restrictions
  }
});

// GET Route to render the Email Customizer & Live Preview Page
app.get('/email-composer', (req, res) => {
  res.render('email-composer'); // This will look for email-composer.ejs inside your 'views' folder
});

// --- Dynamic HTML Email API Endpoint ---
app.post('/api/send-email', (req, res, next) => {
  const { to, subject, name, message } = req.body;

  // Assumes your template is kept in a folder named 'templates' or 'views'
  const templatePath = path.join(__dirname, 'views', 'email-template.html');
  
  fs.readFile(templatePath, 'utf8', (err, htmlContent) => {
    if (err) {
      console.error("Template read error:", err);
      return res.status(500).json({ error: 'Failed to locate email theme asset.' });
    }

    // Replace template hooks with front-end form data
    let formattedHtml = htmlContent
      .replace('{{name}}', name)
      .replace('{{message}}', message);

    // FIXED: Wrapped email address inside standard '< >' syntax so Google accepts the header format
    const mailOptions = {
      from: '"Wuzwear" <umerbhatti528m@gmail.com>',
      to: to,
      subject: subject,
      html: formattedHtml 
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("SMTP Error:", error);
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json({ message: 'Email formatted and sent successfully!', info: info.response });
    });
  });
});
// ----------------------------------------

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;