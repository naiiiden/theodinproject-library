let myLibrary = [];

myLibrary.push(new Book("Warcraft: Of Blood and Honor", "Chris Metzen", 128, false));
myLibrary.push(new Book("Warcraft: Day of the Dragon", "Richard A. Knaak", 384, false));
myLibrary.push(new Book("Warcraft: Lord of the Clans", "Christie Golden", 278, false));
myLibrary.push(new Book("Warcraft: The Last Guardian", "Jeff Grubb", 308, false));

for (let i = 0; i < myLibrary.length; i++) {
    document.querySelector(".cards-container").innerHTML += 
    `<div class="book-container" data-id=${i} id="book${i} book">
    <button class="delete" aria-label="Remove ${myLibrary[i].title} from library" title="Remove book from library">X</button>
    <h2>Title: <span>${myLibrary[i].title}</span></h2>
    <p>Author: <span>${myLibrary[i].author}</span></p>
    <p>Pages: <span>${myLibrary[i].pages}</span></p>
    <p>Read: <span>${myLibrary[i].read ? "Yes" : "No"}</span></p>
    </div>`;
};

function Book(title, author, pages, read) {
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
    `<div class="book-container" data-id=${myLibrary.length - 1} id="book${myLibrary.length - 1} book">
    <button class="delete" aria-label="Remove ${myLibrary[myLibrary.length - 1].title} from library" title="Remove book from library">X</button>
    <h2>Title: <span>${myLibrary[myLibrary.length - 1].title}</span></h2>
    <p>Author: <span>${myLibrary[myLibrary.length - 1].author}</span></p>
    <p>Pages: <span>${myLibrary[myLibrary.length - 1].pages}</span></p>
    <p>Read: <span>${myLibrary[myLibrary.length - 1].read ? "Yes" : "No"}</span></p>
    </div>`;
    console.log(myLibrary);
}

let bookContainers = document.getElementsByClassName("delete");
for (let i = 0; i < bookContainers.length; i++) {
    bookContainers[i].addEventListener("click", (e) => {
        e.currentTarget.parentNode.remove();
        myLibrary.splice(i, 1);
        console.log(myLibrary);
    });
}

document.querySelector("#form-submit").addEventListener("click", (e) => {
    addBookToLibrary();
    displayBook();
    e.preventDefault();

    let bookContainers = document.getElementsByClassName("delete");
    for (let i = 0; i < bookContainers.length; i++) {
        bookContainers[i].addEventListener("click", (e) => {
            e.currentTarget.parentNode.remove();
            myLibrary.splice(i, 1);
            console.log(myLibrary);
        });
    }
});

document.querySelectorAll(".open-close-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".form-container").classList.toggle("show");
        document.querySelector(".form-overlay").classList.toggle("active");
    });
});