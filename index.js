const express = require('express');
const isAvailable = require('./middlewares/accessApp');
const app = express();

app.use(isAvailable);
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', 'views');

// routes

app.get('/', (req, res) => {
  res.render('home', {
    mytitle: 'Home Page',
    title: 'Home',
  });
});

app.get('/service', (req, res) => {
  res.render('service', {
    mytitle: 'Services',
    title: 'Our Service',
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    mytitle: 'Contact',
    title: 'Contact Us',
  });
});
app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
