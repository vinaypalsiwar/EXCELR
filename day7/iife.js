(function(){
    console.log("hello");
    })()
    ;
    ((a,b)=>{
        console.log(a+b);
    })(10,10);

    (function demo() {
        console.log("hii");
        })();

 //Array
//declaration way
        let arr = [10,"hello",true,1n,undefined]
        console.log(arr);
//new keyword
        let arr1=new Array(10, 20, 30)
        console.log(arr1);

//object
//declaration way
let obj = {
    name:"Rahul",
    id  : 1,
    boolean: true,
    arr : [10,20,30],
    null : null,
    undefined : undefined,
    demo : function()
    {
    console.log("hello")
    }}
   console.log(obj);
   console.log(obj.name);
   console.log(obj.undefined);
   obj.demo();

//constructor function
function obj1(name,id)
    {
     this.name = name;
     this.id = id;
    }
    let p1 = new obj1("Rahul",1);
    console.log(p1);
    console.log(p1.name);
    console.log(p1.id);