// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// find() to check account ID with the ID pulled in

function findAccountById(accounts, id) {
   let returnAccountId = accounts.find(account => account.id === id);
  return returnAccountId;//return the account when ID is pulled in
}

function sortAccountsByLastName(accounts) {
  let returnAccountId = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return returnAccountId;// sort() with terniry
}

// not to self: try with an accumalator??
//  for/in to check the key of book array?
//filter for book and accountID for a match and count
//increases count of times borroweed (TimesBorrowed)
function getTotalNumberOfBorrows(account, books) {
    let total = 0; 
  for (let index in books) {
    const TimesBorrowed = books[index].borrows.filter(book => book.id === account.id).length;
    total += TimesBorrowed;
  }
  return total
}

// this can be the helper?
function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = [];

  books.forEach((book) => {
    let bookBorrows = book.borrows;

    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });

  let result = borrowedBooks.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });

  return result;

}
function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
