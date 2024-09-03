document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.querySelector('.fetch-button');
    fetchButton.addEventListener('click', fetchQuote);
});

function fetchQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayQuote(data);
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
        });
}

function displayQuote(quote) {
    const authorElement = document.querySelector('.quote-author');
    const contentElement = document.querySelector('.quote-content');

    authorElement.textContent = quote.author;
    contentElement.textContent = quote.content;
}
