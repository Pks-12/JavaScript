const myNums = [1,2,3,4,5,6,7,8,9,19];
// const newNums = myNums.filter( (nums)=>{
//     return nums > 4;
// })

const newNums = [] 
myNums.forEach( (num)=>{
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  //    let userBooks = books.filter( (bk) =>{bk.genre === 'History'}) // if you use the {} bracket then you return the value. if you not using the {} bracket then no value show in result.

 let  userBooks = books.filter( (bk)=>{
    return bk.publish>=1995 && bk.genre === "History"
  })

  console.log(userBooks);

console.log("Only print the title of book");


let titleOfBook = books.map((rk) => rk.title);
console.log(titleOfBook);



  console.log('Only Edition will print here');
  

  let book = books.filter( (vk)=>vk.edition)
  const countBookLength = book.length
  console.log(countBookLength);
  console.log(book);


  