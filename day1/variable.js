console.log("start")
//global -scope

var a =10;
console.log(a);

//local-scope
 //using const and let are local
let b =20;
console.log(b);

const c = 30;
console.log(c)

//block-scope
{
    var m =200;
    console.log(m);

    let n = 'hello'
    console.log(n);

    const o = 300;
    console.log(o);
}
console.log("stop");