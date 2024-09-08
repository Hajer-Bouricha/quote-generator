let apiQuotes = []
// get quotes from API
async function getQuotes(){
  const apiUrl='https://medromdhani.github.io/mohamed.github.io/data/quotes.json'
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json()
    console.log(apiQuotes);

  } catch (error) {
    
  }
}
getQuotes()