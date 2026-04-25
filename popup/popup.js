async function loadQuotes() {
  const response = await fetch("../data/quotes.json");
  const quotes = await response.json();

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("quote").textContent = `"${randomQuote.text}"`;
  document.getElementById("author").textContent = `— ${randomQuote.author}`;
}

document.getElementById("newQuoteBtn").addEventListener("click", loadQuotes);

loadQuotes();
