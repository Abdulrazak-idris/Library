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
const myLibrary = [];

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

//Input form
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    
})

const hambuger = document.querySelector(".hambuger");
hambuger.addEventListener("click", function () {
    const sideNav = document.querySelector(".side-nav");
    const container = document.querySelector(".container");
    if (sideNav.style.display !== "none") {
        sideNav.style.display = "none";
        container.style["grid-template-columns"] = "1fr";
    } else {
        sideNav.style.display = "block";
        container.style["grid-template-columns"] = "250px 1fr";
    }
    
})