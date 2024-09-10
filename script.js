function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages ${this.read}`
    }
}


//My array of books.
const myLibrary = [];


//Input form
const btn = document.querySelector(".btn-addNewBook");
btn.addEventListener("click", (event) => {
    const inputs = document.querySelectorAll("input");
    const arrayOfInputs = Array.from(inputs);
    const inputValues = [];
    for (const input of arrayOfInputs) {
        if (input.value) {
            inputValues.push(input.value)
        } else {
            alert(`Nothing Entered in ${input.previousElementSibling.innerHTML}`)
        }
    }

    const currentBook = new Book(...inputValues);
    addBookToLibrary(currentBook)
    
    // addBookToLibrary(mySampleBook);
    showBooks(myLibrary)

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
const readBtns = document.querySelectorAll(".btn-read");
const deleteBtn = Array.from(deleteBtns);
const readBtn = Array.from(readBtns);
for (const btn of deleteBtn) {
    btn.addEventListener("click", (event) => {
        const parent = event.target.parentNode;
        const grandParent = parent.parentNode;
        grandParent.remove();
    })
}


//Display each book.
function showBooks(library) {
    const page = document.querySelector(".page");
        const cardContainer = document.createElement("div");
        const newDiv = document.createElement("div");
        const readOrDelete = document.createElement("div");
        const btn = document.createElement("button");
        const readBtn = document.createElement("button");
        cardContainer.classList.add('card-container');
        newDiv.classList.add('card');
        readOrDelete.classList.add('readOrDelete-container');
        btn.classList.add('btn', 'btn-delete');
        readBtn.classList.add('btn', 'btn-read');
        newDiv.textContent = library[library.length - 1].info();
        btn.textContent = "Delete";
        readBtn.textContent = "Read Status";
        readOrDelete.appendChild(readBtn);
        readOrDelete.appendChild(btn);
        const childElements = [newDiv, readOrDelete];
        for (let i = 0; i < childElements.length; i++) {
            cardContainer.appendChild(childElements[i]);
        }
        page.appendChild(cardContainer);
}

// Get all Books.
function addBookToLibrary(book) {
    myLibrary.push(book)
}