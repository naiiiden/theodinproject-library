let myLibrary = [
    {
        bookTitle: "Warcraft: Of Blood and Honor",
        bookAuthor: "Chris Metzen",
        bookPages: 128,
        read: false,
    },
    {
        bookTitle: "Warcraft: Day of the Dragon",
        bookAuthor: "Richard A. Knaak",
        bookPages: 384,
        read: false,
    },
    {
        bookTitle: "Warcraft: Lord of the Clans",
        bookAuthor: "Christie Golden",
        bookPages: 278,
        read: false,
    },
    {
        bookTitle: "Warcraft: The Last Guardian",
        bookAuthor: "Jeff Grubb",
        bookPages: 308,
        read: false,
    },
];


function Book() {
    //constructor
}

function addBookToLibrary() {
    //do stuff here
}

document.querySelector("#toggle-form").addEventListener("click", () => {
    document.querySelector(".form-container").classList.toggle("show");
    document.querySelector(".form-overlay").classList.toggle("active");
});

myLibrary.forEach(book => {
    document.querySelector("#main").innerHTML += 
    `<div class="book-container">
    <button class="delete" aria-label="Remove book from library" title="Remove book from library">X</button>
    <h2>Title: <span>${book.bookTitle}</span></h2>
    <p>Author: <span>${book.bookAuthor}</span></p>
    <p>Pages: <span>${book.bookPages}</span></p>
    <p>Read: <span>${book.read ? "Yes" : "No"}</span></p>
    </div>`;
});

document.querySelector("#form-close").addEventListener("click", () => {
    document.querySelector(".form-container").classList.toggle("show");
    document.querySelector(".form-overlay").classList.toggle("active");
});