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

document.querySelector("#form-close").addEventListener("click", () => {
    document.querySelector(".form-container").classList.toggle("show");
    document.querySelector(".form-overlay").classList.toggle("active");
});

document.querySelector(".form-overlay").addEventListener("click", () => {
    document.querySelector(".form-container").classList.toggle("show");
    document.querySelector(".form-overlay").classList.toggle("active");
});