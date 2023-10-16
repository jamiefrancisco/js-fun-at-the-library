function createLibrary(libraryName) {
  return library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

  function addBook(library, book) {
    var genre = book['genre'];
     return library.shelves[genre].push(book);
  }

function checkoutBook(library, title, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === title) {
      library.shelves[genre].splice(i, 1);
      return `You have now checked out ${title} from the ${library.name}.`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
}

function takeStock(library, genre) {
  var totalBookCount = 0;
  var genres = Object.keys(library.shelves);

  if (genre) {
    totalBookCount = library.shelves[genre].length;
  } else {
    for (var i = 0; i < genres.length; i++) {
      totalBookCount += library.shelves[genres[i]].length;
    }
  }

  var shelfGenre = genre ? `${genre} ` : '';
  return `There are a total of ${totalBookCount} ${shelfGenre}books at the ${library.name}.`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};