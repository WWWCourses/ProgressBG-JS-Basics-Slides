// main.js

// Book class representing a single book
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// Library class to manage the collection of books and display them
class Library {
    constructor(libraryContainer, searchResultsContainer) {
        this.books = []; // Array to store the books
        this.libraryContainer = libraryContainer;
        this.searchResultsContainer = searchResultsContainer;
    }

    // Method to add a book to the library
    addBook(book) {
        this.books.push(book);
        this.displayBooks(this.libraryContainer, this.books);
    }

    // Method to search for books by title or author
    searchBooks(searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        const filteredBooks = this.books.filter(book => 
            book.title.toLowerCase() === searchTermLower || 
            book.author.toLowerCase() === searchTermLower
        );
        this.displayBooks(this.searchResultsContainer, filteredBooks);
    }

    // Method to display books in a specified container
    displayBooks(container, booksArr) {
        container.innerHTML = ''; // Clear the container's current content

        // Loop through the array of books and add each one to the container
        for (let book of booksArr) {
            container.innerHTML += `
                <div class="book">
                    <h2>${book.title}</h2>
                    <p>${book.author}</p>
                </div>
            `;
        }
    }
}

// Get references to needed DOM elements
const libraryContainer = document.getElementById('library-container');
const searchResultsContainer = document.getElementById('search-results-container');
const bookTitleInput = document.getElementById('book-title');
const bookAuthorInput = document.getElementById('book-author');
const searchTermInput = document.getElementById('search-term');
const addBookButton = document.getElementById('add-book');
const searchButton = document.getElementById('search-book');

// Create an instance of Library
const library = new Library(libraryContainer, searchResultsContainer);

// Event listener for the "Add Book" button to add a new book to the library
addBookButton.addEventListener('click', function() {
    const title = bookTitleInput.value;
    const author = bookAuthorInput.value;

    if (title && author) {
        const newBook = new Book(title, author);
        library.addBook(newBook);
    }
});

// Event listener for the "Search Book" button to search for books by title or author
searchButton.addEventListener('click', function() {
    const searchTerm = searchTermInput.value;
    library.searchBooks(searchTerm);
});
