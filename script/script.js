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

function Book(title, author, pages, read) {
    //constructor
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    title = document.querySelector("#title-input").value;
    author = document.querySelector("#author-input").value;
    pages = document.querySelector("#pages-input").value;
    document.querySelector("#yes-input").checked == true ? read = true : read = false; 
    const newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
    document.querySelector("#main").innerHTML += 
    `<div class="book-container" data-id=${myLibrary.length - 1}>
    <button class="delete" aria-label="Remove book from library" title="Remove book from library">X</button>
    <h2>Title: <span>${myLibrary[myLibrary.length - 1].bookTitle}</span></h2>
    <p>Author: <span>${myLibrary[myLibrary.length - 1].bookAuthor}</span></p>
    <p>Pages: <span>${myLibrary[myLibrary.length - 1].bookPages}</span></p>
    <p>Read: <span>${myLibrary[myLibrary.length - 1].read ? "Yes" : "No"}</span></p>
    </div>`;
}

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

document.querySelectorAll(".open-close-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".form-container").classList.toggle("show");
        document.querySelector(".form-overlay").classList.toggle("active");
    });
});

document.querySelector("#form-submit").addEventListener("click", (e) => {
    addBookToLibrary();
    e.preventDefault();
});