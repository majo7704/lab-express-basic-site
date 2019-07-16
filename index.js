const express = require('express');
const app = express();
const hbs = require('hbs')
var quotes = [
  "All that we are is the result of what we have thought. Buddha",
  "I have no special talent. I am only passionately curious. Albert Einstein",
  "The successful warrior is the average man, with laser-like focus. Bruce Lee"
]


app.use(express.static('public'));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials')


app.get('/', (request, response, next) => {
  var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

  response.render("home", {quote: randomQuotes});
})
app.get('/contact', (request, response, next) => {
  response.render("contact.hbs");
})
app.get('/layout', (request, response, next) => {
  response.render('layout.hbs');
})
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});

