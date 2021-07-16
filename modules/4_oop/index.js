/**
 * Point
 *
 * @param {number} x
 * @param {number} y
 */
export class Point {
    constructor(x, y){
        if(!x || !y) {
            throw 'x or y is not provided'
        }
        this.x = x
        this.y = y
    }

    plus(point){
        return new Point(this.x + point.x, this.y + point.y)
    }
}

/**
 * Speaker and Screamer ES5
 */
export function SpeakerES5(name) {
    if(!name) throw "name is empty"
    this.name = name
    this.speak = function speak(sound) {
        console.log(sound)
    }
}
export function ScreamerES5(name) {
    SpeakerES5.call(this, name)
    this.speak = function speak(sound) {
        console.log(sound.toUpperCase())
    }
}

/**
 * Speaker and Screamer ES6
 */
export class SpeakerES6 {
    constructor(name){ 
        if(!name) throw "name is empty"
        this.name = name
    }
    speak(sound){
        console.log(sound)
    }
}
export class ScreamerES6 {
    constructor(name) {
        super(name)
    }
    speak(sound) {
        console.log(sound.toUpperCase())
    }
}

/**
 * The Reading list
 */
export class BookList {
    constructor(){
        this.booksFinished = 0
        this.nextBook = null
        this.currentBook = null
        this.lastBook = null
        this.books = []
        this.notReadBooks = []
    }

    add(book){
        if (!book || !Book.prototype.isPrototypeOf(book)) {
            throw 'please provide a valid book'
        }
        this.books.push(book)
        this.notReadBooks.push(book)
        if(this.notReadBooks.length === 1) this.currentBook = book
    }
    finishCurrentBook(){
       this.currentBook.markAsRead()
       this.lastBook = this.currentBook
       
       var index = this.notReadBooks.indexOf(this.currentBook);
       if (index > -1) {
           this.notReadBooks.splice(index, 1);
       }
       if (this.notReadBooks.length > 0){
           this.currentBook = this.notReadBooks[0]
       } else {
           this.currentBook = null
       }

       if(this.notReadBooks.length > 1){
           this.nextBook = this.notReadBooks[1]
       }else{
           this.nextBook = null
       }
    }
}
export class Book {
    constructor(book){
        if(!book || !book.title){
            throw 'book title is required'
        }

        this.title = book.title
        this.genre = !book.genre ? null : book.genre
        this.isRead = !book.isRead ? false : book.isRead
        this.dateFinished = !book.dateFinished ? null : book.dateFinished 

    }

    markAsRead(){
        this.isRead = true
        this.dateFinished = Date.now()
    } 
}
