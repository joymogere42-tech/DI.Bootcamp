//  Interface Book
interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string; // optional
}

//  Class Library
class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): string {
    const book = this.books.find(b => b.isbn === isbn);

    if (!book) {
      return "Book not found";
    }

    return `Title: ${book.title}, Author: ${book.author}, Year: ${book.publishedYear}, Genre: ${book.genre ?? "N/A"}`;
  }

  //  helper method for subclass
  protected getBooks(): Book[] {
    return this.books;
  }
}

//  Class DigitalLibrary (Inheritance)
class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.getBooks().map(book => book.title);
  }
}

//  Create instance
const myLibrary = new DigitalLibrary("www.mylibrary.com");

// ➕ Add books
myLibrary.addBook({
  title: "The Alchemist",
  author: "Paulo Coelho",
  isbn: "111",
  publishedYear: 1988,
  genre: "Fiction"
});

myLibrary.addBook({
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "222",
  publishedYear: 2008
});

//  Get book details
console.log(myLibrary.getBookDetails("111"));
console.log(myLibrary.getBookDetails("222"));

//  List all books
console.log("All Books:", myLibrary.listBooks());

//  Website
console.log("Website:", myLibrary.website);