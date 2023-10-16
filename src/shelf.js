function shelfBook(book, shelf) {
  // if (book.genre === 'sciFi') {
    if (shelf.length < 3)
    return shelf.unshift(book);
    }
  // }

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1); 
    }
  }
}

function listTitles(fantasyShelf) {
  var titlesList = []
  for (var i = 0; i < fantasyShelf.length; i++) {
    titlesList.push(fantasyShelf[i].title)
  }
  var titles = titlesList.join(', ');
  return titles;
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true
    }   
  }
  return false;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};