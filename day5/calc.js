//to create fe to perform arthemetic operation for 3 numbers and find largest of three numbers and input from end user
let operation = (a,b,task)=>{
    console.log(task(a,b));

}
operation( a = Number(prompt("enter a value for add")),
    b = Number(prompt("enter b value for b")),
    (a,b) => {
        return a + b
    })
    operation( a = Number(prompt("enter a value for mul")),
    b = Number(prompt("enter b value for mul")),
    (a,b) => {
        return a * b
    })