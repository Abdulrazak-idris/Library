function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} ${this.read}`
    }
}


//My array of books.
const myLibrary = ["One", "two", "Three"];

// Get all Books.
function addBookToLibrary(book) {
    myLybrary.push(book)
}


//Display each book.
function showBooks(library) {
    const page = document.querySelector(".page");
    for (const book of library) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('card')
        newDiv.textContent = book;
        page.appendChild(newDiv)
    }
}

// addBookToLibrary(mySampleBook);
showBooks(myLibrary)