let myLibrary = [];

myLibrary.push(new Book("Warcraft: Of Blood and Honor", "Chris Metzen", 128, false));
myLibrary.push(new Book("Warcraft: Day of the Dragon", "Richard A. Knaak", 384, false));
myLibrary.push(new Book("Warcraft: Lord of the Clans", "Christie Golden", 278, false));
myLibrary.push(new Book("Warcraft: The Last Guardian", "Jeff Grubb", 308, false));

// print pre-written books for better styling
for (let i = 0; i < myLibrary.length; i++) {
    document.querySelector(".cards-container").innerHTML += 
    `<div class="book-container" data-id=${i} id="book${i}">
    <button class="delete" aria-label="Remove book from library" title="Remove book from library">X</button>
    <h2>Title: <span>${myLibrary[i].title}</span></h2>
    <p>Author: <span>${myLibrary[i].author}</span></p>
    <p>Pages: <span>${myLibrary[i].pages}</span></p>
    <p>Read: <span>${myLibrary[i].read ? "Yes" : "No"}</span></p>
    </div>`;
};

function Book(title, author, pages, read) {
    //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeRead = function() {
    if (this.read == true) {
        this.read = false;
    } else {
        this.read = true;
    }
    console.log(this.read);
}

function addBookToLibrary() {
    myLibrary.push(new Book (
        title = document.querySelector("#title-input").value,
        author = document.querySelector("#author-input").value,
        pages = document.querySelector("#pages-input").value,
        document.querySelector("#yes-input").checked == true ? read = true : read = false,
    ));
}

function displayBook() {
    document.querySelector(".cards-container").innerHTML += 
    `<div class="book-container" data-id=${myLibrary.length - 1} id="book${myLibrary.length - 1}">
    <button class="delete" aria-label="Remove book from library" title="Remove book from library">X</button>
    <h2>Title: <span>${myLibrary[myLibrary.length - 1].title}</span></h2>
    <p>Author: <span>${myLibrary[myLibrary.length - 1].author}</span></p>
    <p>Pages: <span>${myLibrary[myLibrary.length - 1].pages}</span></p>
    <p>Read: <span>${myLibrary[myLibrary.length - 1].read ? "Yes" : "No"}</span></p>
    </div>`;
    console.log(myLibrary);
    // dynamically created variables names - e.g: book1, book2, book3 depending on array index
}

document.querySelectorAll(".delete").forEach(deleteBtn => {
    deleteBtn.addEventListener("click", (e) => {
        // console.log(this.document.querySelector(".book-container"));
        console.log(e.target);
        console.log(document.querySelector(".book-container").getAttribute("data-id"));
    });
});

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