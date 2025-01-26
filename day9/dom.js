console.log(window);
console.log(window.document);
console.log(typeof document);
console.log(document.url);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "flipkart"
console.log(document.body);


let link = document.links
console.log(link);
console.log(link[0]);
console.log(link[1]);

for(let i = 0;i<link.length;i++)
{
    console.log(link[i]);
    link[i].className="demo"
    link[i].href = "https://www.youtube.com"
    link[i].target = "_blank"
}

// //indirect-access(methods in dom)
// document.getElementById("value")
// document.getElementsByClassName("value")
// document.getElementsByTagName("value")
// document.getElementByName("value")
// document.querySelector("value")
// document.querySelectorAll("value")

let a = document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent="batch 6"
console.log(a.textContent);
a.style.backgroundColor="red"
a.style.textAlign="center"

let b = document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0].textContent);
b[0].style.backgroundColor="blue"

console.log(b[1]);

let c = document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
c[1].style.color="red"
c[1].textContent="hello"

let d = document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);
console.log(d[0]);
d[1].style.backgroundColor = "crimson"
// console.log(document.body.childNodes);

//document.queryselector
//->we have to pass value with css symbol.
//-->will return reference of first element

let e = document.querySelector("#demo")
console.log(e);

let e1 = document.querySelector(".demo1")
console.log(e1);

//document.queryselectorall
//->we have to pass value with css symbol.
//-->will return reference in a node-list.
let f = document.querySelectorAll("#demo")
console.log(f);
console.log(f[0]);

let f1 = document.querySelectorAll(".demo1")
console.log(f1);
console.log(f1[0]);
