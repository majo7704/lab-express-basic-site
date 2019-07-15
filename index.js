const express = require('express');
const app = express();
const hbs = require('hbs')

app.use(express.static('public'));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials')


app.get('/', (request, response, next) => {
  response.render("home.hbs");
})
app.get('/contact', (request, response, next) => {
  response.render("contact.hbs");
})
app.get('/home', (request, response, next) => {
  response.render('home.hbs');
})
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});

