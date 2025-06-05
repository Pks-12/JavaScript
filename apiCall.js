fetch('https://api.github.com/users/UserID')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data.id);
})
.catch((error)=>console.log(error)
)