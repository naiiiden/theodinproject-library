document.querySelector("#form-submit").addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();

});

let myLibrary = [];

for (let i = 0; i < myLibrary.length; i++) {
    document.querySelector("#main").innerHTML += 
    `<div class="book-container" data-id=${i}>
    <button class="delete" aria-label="Remove book from library" title="Remove book from library">X</button>
    <h2>Title: <span>${myLibrary[i].bookTitle}</span></h2>
    <p>Author: <span>${myLibrary[i].bookAuthor}</span></p>
    <p>Pages: <span>${myLibrary[i].bookPages}</span></p>
    <p>Read: <span>${myLibrary[i].read ? "Yes" : "No"}</span></p>
    </div>`;
};

function Book(title, author, pages, read) {
    //constructor
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book (
        title = document.querySelector("#title-input").value,
        author = document.querySelector("#author-input").value,
        pages = document.querySelector("#pages-input").value,
        document.querySelector("#yes-input").checked == true ? read = true : read = false,
    ));
}

function displayBook() {
    document.querySelector("#main").innerHTML += 
    `<div class="book-container" data-id=${myLibrary.length - 1}>
    <button class="delete" aria-label="Remove book from library" title="Remove book from library">X</button>
    <h2>Title: <span>${myLibrary[myLibrary.length - 1].bookTitle}</span></h2>
    <p>Author: <span>${myLibrary[myLibrary.length - 1].bookAuthor}</span></p>
    <p>Pages: <span>${myLibrary[myLibrary.length - 1].bookPages}</span></p>
    <p>Read: <span>${myLibrary[myLibrary.length - 1].read ? "Yes" : "No"}</span></p>
    </div>`;
    console.log(myLibrary);
}

document.querySelector("#form-submit").addEventListener("click", (e) => {
    addBookToLibrary();
    displayBook();
    e.preventDefault();
});

document.querySelectorAll(".open-close-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".form-container").classList.toggle("show");
        document.querySelector(".form-overlay").classList.toggle("active");
    });
});