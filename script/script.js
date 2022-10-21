let myLibrary = [];

myLibrary.push(new Book("Warcraft: Of Blood and Honor", "Chris Metzen", 128, false));
myLibrary.push(new Book("Warcraft: Day of the Dragon", "Richard A. Knaak", 384, false));
myLibrary.push(new Book("Warcraft: Lord of the Clans", "Christie Golden", 278, false));
myLibrary.push(new Book("Warcraft: The Last Guardian", "Jeff Grubb", 308, false));

for (let i = 0; i < myLibrary.length; i++) {
    document.querySelector(".cards-container").innerHTML += 
    `<div class="book-container" data-id=${i}>
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
    `<div class="book-container" data-id=${myLibrary.length - 1}>
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
        console.log(3, e.currentTarget.parentNode.getAttribute(["data-id"]));
        
        myLibrary.splice(i, 1);
        // myLibrary.splice(parseFloat(e.currentTarget.parentNode.getAttribute("data-id")), 1);
        e.currentTarget.parentNode.remove();
        console.log(myLibrary);
        console.log(1, document.getElementsByClassName("delete"));
    });
}
console.log(2, document.getElementsByClassName("delete"));

document.querySelector("#form-submit").addEventListener("click", (e) => {
    if (document.querySelector("#title-input").value !== "" && document.querySelector("#author-input").value !== "" && document.querySelector("#pages-input").value !== "") {
        addBookToLibrary();
        displayBook();
    } else {
        alert("Book submit cannot be empty!");
        console.log(myLibrary);
    }
    e.preventDefault();

    let bookContainers = document.getElementsByClassName("delete");
    for (let i = 0; i < bookContainers.length; i++) {
        bookContainers[i].addEventListener("click", (e) => {
            console.log(3, e.currentTarget.parentNode.getAttribute(["data-id"]));
        
            myLibrary.splice(i, 1);

            // myLibrary.splice(parseFloat(e.currentTarget.parentNode.getAttribute("data-id")), 1);
            e.currentTarget.parentNode.remove();
            console.log(myLibrary);
            console.log(1, document.getElementsByClassName("delete"));
        });
    }
    console.log(1, document.getElementsByClassName("delete"));
});

document.querySelectorAll(".open-close-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".form-container").classList.toggle("show");
        document.querySelector(".form-overlay").classList.toggle("active");
    });
});