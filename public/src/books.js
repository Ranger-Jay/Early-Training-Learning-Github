// Note: Please do not change the name of the functions. The tests use those names to validate your code.


//find to  compare author id with id pulled in
function findAuthorById(authors, id) {
  const result = authors.find(author => author.id === id);
  return result;
}
/// return book when ID is pulled in 
//find to compare book ID
function findBookById(books, id) {
  const result = books.find(book => book.id === id);
  return result;
}

//filter to check book status and pass in array list as borrowed or returned 
//two arguments,  can try else?  
function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter(book => book.borrows[0].returned == false);
  //else if books.filter(book => book.borrows[0].returned == true
  let returnedBooks = books.filter(book => book.borrows[0].returned == true);
  return [borrowedBooks, returnedBooks];
}

//return borrowers of a book with  account ID info
//declare variable as borrows object in books array
//neeed empty array 
//find to check accounts and ID
//make it thee objecct variable
//push  into the array
//use the 10 item limit
function getBorrowersForBook(book, accounts) {
  let checkout = book.borrows;
  let results = [];
  for (let item in checkout) {
    const accountInfo = accounts.find(account => account.id === checkout[item].id);
    const object = {"id" : checkout[item].id, ...checkout[item], ...accountInfo};
    results.push(object);
  }
  return results.splice(0, 10);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
