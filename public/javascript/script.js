let randomButton = document.getElementsByTagName('button')[0] 
randomButton.addEventListener('click', function(){
  var quotes = [
    "All that we are is the result of what we have thought. Buddha",
    "I have no special talent. I am only passionately curious. Albert Einstein",
    "The successful warrior is the average man, with laser-like focus. Bruce Lee"
  ]
  var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
  var blockquote = document.getElementsByTagName('blockquote')[0];
  blockquote.innerHTML = randomQuotes;
})