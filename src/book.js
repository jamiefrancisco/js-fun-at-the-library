function createTitle(title) {
  return modifiedTitle = `The ${title}`;
}

function buildMainCharacter(characterName, characterAge, characterPronouns) {
  return character = {
    name: characterName,
    age: characterAge,
    pronouns: characterPronouns
  }
}
function saveReview(newReview, reviews) {
  if (reviews.includes(newReview)) {
    return reviews;
  } else {
    return reviews.push(newReview);
  }
}

function calculatePageCount(bookTitle) {
  return bookPageCount = (bookTitle.length) * 20;
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  };
}

function editBook(book) {
  return book.pageCount = (book.pageCount) * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}