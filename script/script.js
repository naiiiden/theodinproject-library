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
        <button class="book-change-read" data-id="${myLibrary[i].id}" aria-label="Change read status">${myLibrary[i].read ? "Read" : "Not read"}</button>
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
        <button class="book-change-read" data-id="${myLibrary[myLibrary.length - 1].id}" aria-label="Change read status">${myLibrary[myLibrary.length - 1].read ? "Read" : "Not read"}</button>
    </div>`;
    document.querySelector(".cards-container").insertAdjacentHTML("beforeend", bookContainer);
}

document.querySelector("#form-submit").addEventListener("click", (e) => {
    if (document.querySelector("#title-input").value !== "" && document.querySelector("#author-input").value !== "" && document.querySelector("#pages-input").value !== "") {
        addBookToLibrary();
        document.querySelectorAll("input").forEach(input => {
            input.value = "";
            input.checked = false;
        });
    } else {
        alert("Book submit cannot be empty!");
    }
    e.preventDefault();
});

document.querySelectorAll(".open-close-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".form-container").classList.toggle("show");
        document.querySelector(".form-overlay").classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    });
});

document.querySelector(".cards-container").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      const bookId = e.target.dataset.id;
      myLibrary = myLibrary.filter(book => book.id != bookId);
      e.target.parentElement.remove();
      console.log(myLibrary);
    } else if (e.target.classList.contains("book-change-read")) {
        const bookId = parseInt(e.target.dataset.id);
        const book = myLibrary.find(book => book.id === bookId);
        if (book) {
            book.changeRead();
            e.target.textContent = book.read ? "Read" : "Not read"; // update the button text directly
        }
    }
});

function createFocusTrap(modalElement, openModalButtons) {
    let openModal = false;
    let previousFocusElement = null;

    const toggleModal = () => {
        openModal = !openModal;
        if (openModal) {
        previousFocusElement = document.activeElement;
        }
    };

    openModalButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            toggleModal();
            modalElement.style.display = openModal ? "block" : "none";
            focusTrap(modalElement);
        });
    });

    function focusTrap(modalElement) {
        const focusableElements = "a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input:not([disabled]):not([type='hidden']):not([type='radio']):not([type='checkbox']), select:not([disabled]), [contenteditable]:not([disabled]), [tabindex]:not([tabindex='-1'])";
        const firstFocusableElement = modalElement.querySelectorAll(focusableElements)[0];
        const focusableContent = modalElement.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        document.addEventListener("keydown", (e) => {
            let isTabPressed = e.key === "Tab" || e.keyCode === 9;

            if ((e.key === "Escape" || e.keyCode === 27) && openModal) {
                toggleModal(); 
                modalElement.style.display = "none";
                // little bug here: line 119, 1220 fix this
                document.querySelector(".form-overlay").classList.toggle("active");
                document.querySelector(".form-container").classList.toggle("show");
                previousFocusElement.focus(); 
            }

            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        });
        firstFocusableElement.focus();
    }
focusTrap(modalElement);
}

createFocusTrap(document.querySelector('.form-container'), document.querySelectorAll('.open-close-button'));