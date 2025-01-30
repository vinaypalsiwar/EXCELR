// let obj = {
//     name: "Kumar",
//     id : 1,
//     designation : "developer"
// }

// console.log(obj);

// let obj1  = JSON.stringify(obj)
// console.log(obj1);

// let obj2 = JSON.parse(obj1)
// console.log(obj2);

//fetching json by 3 ways
// 1.fetch
// 2.AJAX
// 3.Axios

// let a = window.fetch()
// console.log(a);

 window.fetch("data.json")
.then((data) => data.json())
.then((res) => {
    // console.log(res)

res.map((x) => {
console.log(x);
console.log(x.name);
console.log(x.id);
console.log(x.designation);

document.body.innerHTML +=  `<h1>${x.name}</h1>`
document.body.innerHTML +=     `<h1>${x.id}</h1> `  
document.body.innerHTML += ` <h1>${x.designation}</h1>`
    })
})