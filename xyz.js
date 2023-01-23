function xyz(){
return Promise.reject('rejected')
}
xyz().then(()=>{
          
})
.catch(next);


function next(d){
console.log(d)
}