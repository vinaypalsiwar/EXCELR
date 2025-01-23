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