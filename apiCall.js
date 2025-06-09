// fetch('https://fakerestapi.azurewebsites.net/api/v1/Books')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     data.forEach(book=>{
//         console.log(data.title);
//         console.log(data.id);
        
//     });
// })
// .catch((error)=>console.log(error)
// )

// fetch('https://fakerestapi.azurewebsites.net/api/v1/Books')
//   .then((response) => response.json())
//   .then((data) => {
//     // Loop through all books and log each title
//     const totalID = data.length;
//     console.log(`Total length of book${totalID}`);
    
//     data.forEach(book => {
//       console.log(book.id); 
//       console.log(book.title);
//       console.log(book.pageCount);
      
//       // "title" is correct
//     });
//   })
//   .catch((error) => console.log('Error:', error));



// fetch("https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data.url);
// })
// .catch((error)=>console.log(error)//    i cannot access the value because of this array not object. if this is object we can access the single value.
// )

fetch("https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos")
.then((response)=> response.json())
.then ((data)=>{
    console.log(data);
    data.forEach(photo=>{
        
        // console.log(photo.url);
        
    })
})