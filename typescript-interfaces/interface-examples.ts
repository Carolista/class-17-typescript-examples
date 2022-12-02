interface Book {
  title: string;
  author: string;
  numPages: number;
  series?: string;
  format?: string;
}

let currentBook: Book = {
  title: "How To Be an Antiracist",
  author: "Ibram X. Kendi",
  numPages: 238,
}

let lastBook: Book = {
  title: "Harry Potter and the Prisoner of Azkaban",
  author: "J. K. Rowling",
  numPages: 362,
  series: "Harry Potter",
}

let futureBook: Book = {
  title: "Hidden Figures",
  author: "Margot Lee Shetterly",
  numPages: 271,
  format: "hardcover",
}

console.log(currentBook.title);
console.log(lastBook.title);
console.log(futureBook.title);
