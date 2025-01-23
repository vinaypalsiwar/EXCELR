// two types of return
//1>implicit
//2>explicit

//1>implicit return arrow function 
//
//   >no nedd of using return keyword 

// let a = () => console.log("hello");
// console.log(a);
// a()

//> fat arrow 
//>explicit  return arrow  function
//> return keyword is mandatory

// let b =() =>{return "hello"}
// console.log(b);
// console.log(b());

let main1 = (task)=>{
    console.log(task);
    console.log(task());
}
main1(()=>{
    return "i am call back 1"
})