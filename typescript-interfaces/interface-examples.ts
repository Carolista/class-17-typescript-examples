interface Book {
  title: string;
  author: string;
  numPages: number;
  series?: string;
}

// TODO: assign Book as the type for currentBook
let currentBook = {
  title: "How To Be an Antiracist",
  author: "Ibram X. Kendi",
  numPages: 238,
}

// TODO: assign Book as the type for lastBook
// TODO: correct the error by adding the missing property with the value 362
let lastBook = {
  title: "Harry Potter and the Prisoner of Azkaban",
  author: "J. K. Rowling",
  series: "Harry Potter",
}

// TODO: assign Book as the type for lastBook
// TODO: correct the error by adding an optional property 'format' to the interface definition
let futureBook = {
  title: "Hidden Figures",
  author: "Margot Lee Shetterly",
  numPages: 271,
  format: "hardcover",
}
