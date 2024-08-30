function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} ${this.read}`
    }
}

const mySampleBook = new Book("The Odins Project", "Abdulrazak Idris Yahaya", 200, "Read");

const myLybrary = [];

// Get all Books.
function addBookToLibrary(book) {
    myLybrary.push(book)
}


//Display each book.
function showBooks(library) {
    for (const book of library) {
        console.table(book);
    }
}

addBookToLibrary(mySampleBook);
showBooks(myLybrary)