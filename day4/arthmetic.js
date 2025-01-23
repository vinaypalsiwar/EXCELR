//to create fe to perform arthemetic operation for 3 numbers and find largest of three numbers and input from end user
let main = function()
{
    let a = Number(prompt("enter a value"))
    let b = Number(prompt("enter b value"))
    let c = Number(prompt("enter c value"))

    let d = a + b + c
    console.log(d);
    let e = a * b * c
    console.log(e);
    let f = a / b /c
    console.log(f);

    if(a>=b && a>=c){
        console.log("a is the largest");
    }else if(b>=a && b>=c){
        console.log("b is largest");
    }else{
        console.log("c is largest");
    }}
    main()