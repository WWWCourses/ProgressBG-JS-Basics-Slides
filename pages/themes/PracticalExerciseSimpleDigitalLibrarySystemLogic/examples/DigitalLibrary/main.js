// main.js

// Book constructor function to create book objects
function Book(title, author) {
    this.title = title;
    this.author = author;
}

// Function to display books in the specified container element
function displayBooks(container, booksArr) {
    // Clear the container's current content
    container.innerHTML = '';

    // Loop through the array of books and add each one to the container in a 'div.book'
    for (let i = 0; i < booksArr.length; i++) {
        container.innerHTML += `
            <div class="book">
                <h2>${booksArr[i].title}</h2>
                <p>${booksArr[i].author}</p>
            </div>
        `;
    }
}

// Get references to needed DOM elements
let libraryContainer = document.getElementById('library-container');
let searchResults = document.getElementById('search-results-container');
let bookTitleInput = document.getElementById('book-title');
let bookAuthorInput = document.getElementById('book-author');
let searchTermInput = document.getElementById('search-term');
let addBookButton = document.getElementById('add-book');
let searchButton = document.getElementById('search-book');

// Define an array to store book objects
let books = [];

// Add 'click' event listener for the "Add Book" button to add a new book to the library
addBookButton.addEventListener('click', function() {
    // Get the values entered in the title and author input fields
    let title = bookTitleInput.value;
    let author = bookAuthorInput.value;

    // If both title and author are provided, create a new book and add it to the books array
    if (title && author) {
        let newBook = new Book(title, author);
        books.push(newBook);
        // Display the books in '#library-container'
        displayBooks(libraryContainer, books);
    }
});

// Add 'click' event listener for the "Search Book" button to search for books by title or author
searchButton.addEventListener('click', function() {
    // Get the search term entered by the user and convert it to lowercase
    let searchTerm = searchTermInput.value.toLowerCase();
    // Clear the search results container
    searchResults.innerHTML = '';

    // Filter the books array to find matches by title or author
    let filteredBooks = [];
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        if (book.title.toLowerCase() === searchTerm || book.author.toLowerCase() === searchTerm) {
            filteredBooks.push(book);
        }
    }

    // Display the filtered books in '#search-results-container'
    displayBooks(searchResults, filteredBooks);
});
