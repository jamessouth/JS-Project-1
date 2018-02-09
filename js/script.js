// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// start animation of quote and BG color
let anim = setInterval(printQuote, 10000);

// array of quotes
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
    tags: 'Rumor, Society'
  },
  {
    quote: 'When buying and selling are controlled by legislation, the first things to be bought and sold are legislators.',
    source: "P. J. O'Rourke ",
    tags: 'Politics, Government'
  },
  {
    quote: 'Milk is for babies. When you grow up you have to drink beer.',
    source: 'Arnold Schwarzenegger',
    citation: 'Pumping Iron',
    year: 1977,
    tags: 'Humor, Weightlifting'
  },
  {
    quote: 'Exercise to stimulate, not to annihilate.',
    source: 'Lee Haney ',
    tags: 'Weightlifting'
  },
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
  },
  {
    quote: 'The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design.',
    source: 'Friedrich Hayek',
    citation: 'The Fatal Conceit',
    year: 1988,
    tags: 'Economics, Politics'
  },
  {
    quote: 'Facts do not cease to exist because they are ignored.',
    source: 'Aldous Huxley',
    citation: 'Proper Studies',
    year: 1927,
    tags: 'Truth, Dogma'
  },
  {
    quote: 'The essence of the independent mind lies not in <em>what</em> it thinks, but in <em>how</em> it thinks.',
    source: 'Christopher Hitchens',
    citation: 'Letters to a Young Contrarian',
    year: 2001,
    tags: 'Thinking, Reason'
  }
];

// function to change bg color with random values for hue, saturation and light, taking care that there is (usually) enough contrast to see the text clearly
function changeBGColor(){
  let hue = Math.floor(Math.random() * 360);
  let sat = Math.floor((Math.random() * 85) + 15);
  let lite = Math.floor(Math.random() * 65);
  document.querySelector('body').style.backgroundColor = `hsl(${hue}, ${sat}%, ${lite}%)`;
}

// function to grab random quote from array. the loop prevents the same quote from displaying twice in a row
let lastNum = -1;
function getRandomQuote(){
  let num;
  do{
    num = Math.floor(Math.random() * quotes.length);
  } while(num === lastNum);
  lastNum = num;
  return quotes[num];
}

// function to build HTML string for quote container. the animation is cleared and re-established with each call to prevent the timer from wiping out a quote shown from clicking the button right before the timer fires
function printQuote(){
  clearInterval(anim);
  changeBGColor();
  let obj = getRandomQuote();
  let cite = !obj.citation ? '' : `<span class="citation"> ${obj.citation}</span>`;
  let year = !obj.year ? '' : `<span class="year"> ${obj.year} </span>`;
  let tag = !obj.tags ? '' : `<span class="tag">Tags: ${obj.tags} </span>`;
  let html = `<p class="quote"> ${obj.quote} </p>
<p class="source"> ${obj.source}${cite}${year}${tag}
</p>`;
  document.getElementById('quote-box').innerHTML = html;
  anim = setInterval(printQuote, 10000);
}
