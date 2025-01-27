let a = document.createElement("h1")
console.log(a)
a.textContent = "Hello, World!"
document.body.appendChild(a)
a.style.backgroundColor = "red"

//--------------------------------
//create - a  div tag
let div  = document.createElement("div")
console.log(div);

//appened div-tag to 
document.body.appendChild(div)

div.style.border = "5px solid"
//create a ol-tag
let ol = document.createElement("ol")
console.log(ol);

//append ol-tag to div-tag
div.appendChild(ol)

//create a li-tag
let li1 = document.createElement("li")
console.log(li1);
li1.textContent="react"

//append li-tag to ol-tag
ol.appendChild(li1)

let li2  = document.createElement("li")
console.log(li2);
li2.textContent = "express"

//append li-tag to ol-tag
ol.appendChild(li2)

ol.setAttribute("type","A")
