let myLibrary = [];
let bookId = 0;

myLibrary.push(new Book("Warcraft: Of Blood and Honor", "Chris Metzen", 128, false, bookId++));
myLibrary.push(new Book("Warcraft: Day of the Dragon", "Richard A. Knaak", 384, false, bookId++));
myLibrary.push(new Book("Warcraft: Lord of the Clans", "Christie Golden", 278, false, bookId++));
myLibrary.push(new Book("Warcraft: The Last Guardian", "Jeff Grubb", 308, false, bookId++));

for (let i = 0; i < myLibrary.length; i++) {
    const bookContainer =
    `<div class="book-container">
        <button class="delete" aria-label="Remove ${myLibrary[i].title} from library" title="Remove ${myLibrary[i].title} from library" data-id="${myLibrary[i].id}">X</button>
        <h2>Title: <span>${myLibrary[i].title}</span></h2>
        <p>Author: <span>${myLibrary[i].author}</span></p>
        <p>Pages: <span>${myLibrary[i].pages}</span></p>
        <p>Read: </p>
        <button class="book-change-read" data-id="${myLibrary[i].id}" aria-label="Change read status">${myLibrary[i].read ? "Yes" : "No"}</button>
    </div>`;
    document.querySelector(".cards-container").insertAdjacentHTML("beforeend", bookContainer);
};

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

Book.prototype.changeRead = function() {
    this.read = !this.read;
}

function addBookToLibrary() {
    myLibrary.push(new Book (
        title = document.querySelector("#title-input").value,
        author = document.querySelector("#author-input").value,
        pages = document.querySelector("#pages-input").value,
        document.querySelector("#yes-input").checked == true ? read = true : read = false,
        bookId++,
    ));
    const bookContainer =
    `<div class="book-container">
        <button class="delete" aria-label="Remove ${myLibrary[myLibrary.length - 1].title} from library" title="Remove ${myLibrary[myLibrary.length - 1].title} from library" data-id="${myLibrary[myLibrary.length - 1].id}">X</button>
        <h2>Title: <span>${myLibrary[myLibrary.length - 1].title}</span></h2>
        <p>Author: <span>${myLibrary[myLibrary.length - 1].author}</span></p>
        <p>Pages: <span>${myLibrary[myLibrary.length - 1].pages}</span></p>
        <p>Read: </p>
        <button class="book-change-read" data-id="${myLibrary[myLibrary.length - 1].id}" aria-label="Change read status">${myLibrary[myLibrary.length - 1].read ? "Yes" : "No"}</button>
    </div>`;
    document.querySelector(".cards-container").insertAdjacentHTML("beforeend", bookContainer);
}

document.querySelector("#form-submit").addEventListener("click", (e) => {
    if (document.querySelector("#title-input").value !== "" && document.querySelector("#author-input").value !== "" && document.querySelector("#pages-input").value !== "") {
        addBookToLibrary();
    } else {
        alert("Book submit cannot be empty!");
    }
    e.preventDefault();
});

document.querySelectorAll(".open-close-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".form-container").classList.toggle("show");
        document.querySelector(".form-overlay").classList.toggle("active");
    });
});
