/* -------------------------------------------------------------------------- */
/*                                    TASK7                                   */
/* -------------------------------------------------------------------------- */
// Given is an array of library books objects.
// Write sortBooksByIdAndAuthor(books) Arrow function,
// so that it will return a new array with books sorted:
// 1. By their id in ascending order.
// 2. For books with the same id, by the author's name in alphabetical order.
// Use only sort and spread operator.

// YOUR CODE HERE
const sortBooksByIdAndAuthor = (books) =>
    [...books].sort((a, b) =>
        a.id !== b.id ? a.id - b.id :
            a.title>b.title?1:-1
    );

// GIVEN
const books = [
    {
        id: 2,
        title: "Book A",
        author: "Charles Dickens",
    },
    {
        id: 1,
        title: "Book B",
        author: "Jane Austen",
    },
    {
        id: 2,
        title: "Book C",
        author: "Agatha Christie",
    },
    {
        id: 1,
        title: "Book D",
        author: "H.G. Wells",
    },
];

// TEST
const sortedBooks = sortBooksByIdAndAuthor(books);
console.log(sortedBooks);

// EXPECTED OUTPUT:
// [
//     { id: 1, title: 'Book B', author: 'Jane Austen' },
//     { id: 1, title: 'Book D', author: 'H.G. Wells' },
//     { id: 2, title: 'Book A', author: 'Charles Dickens' },
//     { id: 2, title: 'Book C', author: 'Agatha Christie' }
// ]