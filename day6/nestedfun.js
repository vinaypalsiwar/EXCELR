// function parent()
// {
//   function child()
//   {
//     console.log("Child function");
//     } 
//      child()
// }
// parent()

//diadvantege of closure memory wastage
//if i  called a child function ,when evar we call the child function, multiple times closure will be created heap areas 
function parent()
{
function child1(){
    console.log("child1");
    
}
    function child2(){
        console.log("Child2");
    }
return [child1,child2]
}
parent()[0]()
parent()[1]()
