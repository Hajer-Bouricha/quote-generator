const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")
let apiQuotes = []
// show new quote
function newQuote() {
  // pick random quote from l'apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
  // if check author filed is blank and replace it with 
  if (!quote.author){
    authorText.textContent = "Unknown"
  }
  else{
    authorText.textContent=quote.author
  }
  // check quote lenght to add styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote')
  }
  else{
    quoteText.classList.remove('long-quote')
  }
  quoteText.textContent=quote.text
}
// get quotes from API
async function getQuotes(){
  const apiUrl='https://medromdhani.github.io/mohamed.github.io/data/quotes.json'
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json()
    newQuote()

  } catch (error) {
    
  }
}
// tweet quote
function tweetQuote() {
  const twitterUrl= `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`
  window.open(twitterUrl, '_blank')
}
newQuoteBtn.addEventListener('click',newQuote)
twitterBtn.addEventListener('click',tweetQuote)
getQuotes()