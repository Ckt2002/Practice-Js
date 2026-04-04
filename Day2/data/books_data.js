export default class Books {
    constructor() {
        this.bookArr = [];
    }

    addBook(newBook) {
        for (let book of this.bookArr) {
            if (book.getTitle() === newBook.getTitle()) {
                return;
            }
        }
        this.bookArr.push(newBook);
    }
}