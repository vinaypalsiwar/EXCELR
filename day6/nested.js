// var a = 10;
// let b = 20;
// function parent1()
// {
//     var a = "hello"
//     let b = "hii"
//     console.log(a);
//     console.log(b);
//     console.log(this.a);
//     console.log(this.b);
// }
// parent1();

//lexical-scope / scope - chaine
// -> the ability of js-engine search for variablke i n
//local -scope if it is not available it will
// search in outer scope and so on
function Main(){
let a =10;
function child()
{
console.log(a);
}
child()
}
Main()