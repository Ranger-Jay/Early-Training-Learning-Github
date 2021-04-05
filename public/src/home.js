// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//Get total books in array, returns zero if none
function getTotalBooksCount(books) {
  let result = 0;
    for (let iteration = 0; iteration < books.length; iteration++){
    result += 1;
  }
  return result;
}
 // Return  number of accounts in  array
  //
//function getTotalAccountsCount(accounts) {}
function getTotalAccountsCount(accounts) {
//    for (let iteration = 0; iteration < books.length; iteration++){
  return accounts.length;
}

//Return books name that iss checked out
// try accumaltor??
  //reduce to get results
//Use .reduce to go through array and accumulate  books meet the "if" condition
//function getBooksBorrowedCount(books) {}
function getBooksBorrowedCount(books) {
  const borrowedBooks = books.reduce((acc, book) => {
    if(!(book.borrows[0].returned)) {
      acc.push(book);
    }
    return acc;
  }, []);
  return borrowedBooks.length;
}

//Return  list of genres
//Use map to identify genres
//new array from genres identified
//try reduce ?? 
//Use if statement
// 
function getMostCommonGenres(books) {
    const commonGenres = [];

  for (let book of books) {
    const genre = commonGenres.find(
      (currentGenre) => currentGenre.name === book.genre
    );
    if (genre) {
      genre.count++;
    } else {
      commonGenres.push({ name: book.genre, count: 1 });
    }
  }

  return topFive(commonGenres);
 }

function getMostPopularBooks(books) {
 let result = [];

  const borrows = books.reduce((acc, book) => {
    result.push({ name: book.title, count: book.borrows.length });
  }, []);

  return topFive(result);
}

  
 //Return array of most popular authors
//for loop to iterate through authors
// need an emmpty array to story authors
//template literal to declare names???
//Use for loop within another for loop to check through books array
//if for conditon, compare IDs of book that match authors

function getMostPopularAuthors(books, authors) {
  let array = [];
  for (let iteration = 0; iteration < authors.length; iteration++) {
    let writer = {};
    writer.name = `${authors[iteration].name.first} ${authors[iteration].name.last}`
    writer.count = 0
    for (let jX = 0; jX < books.length; jX++) {
      if (books[jX].authorId === authors[iteration].id) {
        writer.count += books[jX].borrows.length
      }
    }
    array.push(writer)
  }
  const final = array.sort((authorA, authorB)=> authorA.count < authorB.count ? 1 : -1)
  return final.slice(0, 5)
}
function topFive(array) {
  let result = array
    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);

  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

//move
