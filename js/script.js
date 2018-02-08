// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


const quotes = [

  {
    quote: 'The State is the great fiction through which everyone endeavours to live at the expense of everyone else.',
    source: 'Frédéric Bastiat',
    citation: 'Journal des débats',
    year: 1848,
    tags: 'Politics, Government'
  },
  {
    quote: 'There is only one thing in life worse than being talked about, and that is not being talked about.',
    source: 'Oscar Wilde',
    citation: 'The Picture of Dorian Gray',
    year: 1890,
    tags: 'Rumor'
  },
  {
    quote: 'When buying and selling are controlled by legislation, the first things to be bought and sold are legislators.',
    source: 'P. J. O\'Rourke',
    citation: '',
    year: null,
    tags: 'Politics, Government'
  },
  // {
  //   quote: 'Milk is for babies. When you grow up you have to drink beer.',
  //   source: 'Arnold Schwarzenegger',
  //   citation: 'Pumping Iron',
  //   year: 1977,
  //   tags: 'Humor, Weightlifting'
  // },
  // {
  //   quote: 'Exercise to stimulate, not to annihilate.',
  //   source: 'Lee Haney',
  //   citation: '',
  //   year: null,
  //   tags: 'Weightlifting'
  // },
  {
    quote: 'None are more hopelessly enslaved than those who falsely believe they are free.',
    source: 'Johann Wolfgang von Goethe',
    citation: 'Die Wahlverwandtschaften',
    year: 1809,
    tags: 'Freedom'
  },
  {
    quote: 'These go to eleven.',
    source: 'Nigel Tufnel',
    citation: 'This is Spinal Tap',
    year: 1984,
    tags: 'Humor, Music'
  }

];

function getRandomQuote(){
  let num = Math.floor(Math.random() * quotes.length);
  return quotes[num];

}

function printQuote(){
  let obj = getRandomQuote();
  let cite = !obj.citation ? '' : `<span class="citation"> ${obj.citation} </span>`;
  let year = !obj.year ? '' : `<span class="year"> ${obj.year} </span>`;
  let tag = !obj.tags ? '' : `<span class="tag"> Tags: ${obj.tags} </span>`;


  let html = `<p class="quote"> ${obj.quote} </p>
<p class="source"> ${obj.source} ${cite} ${year} ${tag}
</p>`;


  document.getElementById('quote-box').innerHTML = html;

}
