const bookCollection = document.getElementById("bookCollection");

const addBtn = document.getElementById("addBtn");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let readText;
        if (this.read) {
            readText = "has read it";
        } else {
            readText = "not read yet";
        }

        return this.title + " by " + this.author + ", " + pages + " pages, " + readText;
    };
    this.haveRead = function () {
        let readText;
        if (this.read) {
            readText = "You have read it";
        } else {
            readText = "You have not read it yet";
        }

        return readText;
    };
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

addBtn.addEventListener("click", function (e) {
    const titleInput = document.getElementById("title").value;
    const authorInput = document.getElementById("author").value;
    const pagesInput = document.getElementById("pages").value;
    const readInput = document.getElementById("read").checked;
    // error check if title, author, or pages are empty
    if (titleInput === "" || authorInput === "" || pagesInput === "") {
        alert("Please fill out all fields.");
        return;
    }
    addBookToLibrary(new Book(titleInput, authorInput, pagesInput, readInput));
    displayBooks();
});

// test books to test display
// addBookToLibrary(new Book("Foundation", "Isaac Asmiov", "296", true));
// addBookToLibrary(new Book("Catch-22", "Joseph Heller", "544", true));
// addBookToLibrary(new Book("Sorry, Bro", "Taleen Voskuni", "368", true));
// addBookToLibrary(new Book("The Brothers Karamazov", "Fyodor Dostoevsky", "824", false));

// display books
function displayBooks() {
    bookCollection.replaceChildren();
    for (book of myLibrary) {
        // console.log(book.info());
        let bookCard = document.createElement("div");
        let bookImage = document.createElement("img");
        let bookTitle = document.createElement("div");
        let bookAuthor = document.createElement("div");
        let bookPages = document.createElement("div");
        let bookRead = document.createElement("div");

        // add bookImage properties
        bookImage.classList.add("bookImage");
        bookImage.src = "./images/book.png";
        bookImage.alt = "Book";
        let hueDegrees = Math.floor(Math.random() * 359);
        bookImage.style.filter = "hue-rotate(" + hueDegrees + "deg)";

        // add bookTitle properties
        bookTitle.classList.add("bookTitle");
        let titleContent = document.createTextNode(book.title);
        bookTitle.appendChild(titleContent);

        // add bookAuthor properties
        bookAuthor.classList.add("bookAuthor");
        let authorContent = document.createTextNode("By: " + book.author);
        bookAuthor.appendChild(authorContent);

        // add bookPages properties
        bookPages.classList.add("bookPages");
        let pagesContent = document.createTextNode(book.pages + " pages");
        bookPages.appendChild(pagesContent);

        // add bookRead properties
        bookRead.classList.add("bookRead");
        let readContent = document.createTextNode(book.haveRead());
        bookRead.appendChild(readContent);

        // add bookCard children
        bookCard.classList.add("bookCard");
        bookCard.appendChild(bookImage);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);

        bookCollection.appendChild(bookCard);
    }
}

displayBooks();
