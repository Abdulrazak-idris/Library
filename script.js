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
const myLibrary = ['Abdulrazak Idris', "Am trainig", 283, "pages read", 'Abdulrazak Idris', "Am trainig", 283, "pages read"];

// Get all Books.
function addBookToLibrary(book) {
    myLybrary.push(book)
}


//Display each book.
function showBooks(library) {
    const page = document.querySelector(".page");
    for (const book of library) {
        const cardContainer = document.createElement("div");
        const newDiv = document.createElement("div");
        const btn = document.createElement("button");
        cardContainer.classList.add('card-container');
        newDiv.classList.add('card');
        btn.classList.add('btn', 'btn-delete');
        newDiv.textContent = book;
        btn.textContent = "Delete";
        cardContainer.appendChild(newDiv);
        cardContainer.appendChild(btn);
        page.appendChild(cardContainer);
    }
}

// addBookToLibrary(mySampleBook);
showBooks(myLibrary)

//Input form
const btn = document.querySelector(".btn-addNewBook");
btn.addEventListener("click", function (event) {
    alert("wow")
    event.preventDefault();
})

const newBook = document.querySelector(".btn-newBook");
newBook.addEventListener("click", function () {
    const sideNav = document.querySelector(".side-nav");
    const container = document.querySelector(".container");
    const isNavVisible = window.getComputedStyle(sideNav).display !== "none";
    if (!isNavVisible) {
        container.style["grid-template-columns"] = "270px 1fr";
        sideNav.style.display = "block";
    } else {
        sideNav.style.display = "none";
        container.style["grid-template-columns"] = "1fr";
    } 
})

const deleteBtns = document.querySelectorAll(".btn-delete");
const deleteBtn = Array.from(deleteBtns);
for (const btn of deleteBtn) {
    btn.addEventListener("click", (event) => {
        const parent = event.target.parentNode;
        parent.remove();
    })
}