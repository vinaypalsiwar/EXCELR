// function createTable(rows, cols) {
//     const table = document.createElement('table');
//     table.style.border = 'black';
  
//     for (let i = 0; i < rows; i++) {
//       const row = document.createElement('tr');
  
//       for (let j = 0; j < cols; j++) {
//         const cell = document.createElement('td');
//         cell.textContent = `4x4`;
//         cell.style.border = '1px solid black';
//         cell.style.padding = '10px';
//         row.appendChild(cell);
//       }
  
//       table.appendChild(row);
//     }
  
//     document.body.appendChild(table);
//   }
  
//   // Create a 4x4 table
//   createTable(4, 4);




// Create a table

let table=document.createElement("table")
console.log(table);
document.body.appendChild(table)

let tr1=document.createElement("tr")
console.log(tr1);
// append to table tag
table.appendChild(tr1)

let td1=document.createElement("td")
console.log(td1);
td1.textContent="Hello"

// append
tr1.appendChild(td1)

table.setAttribute("border", "2px solid")

//  creating row 2........................

let td2=document.createElement("td")
console.log(td2);
td2.textContent="Hello"

// append
tr1.appendChild(td2)

// Creating row 3

let td3=document.createElement("td")
console.log(td3);
td3.textContent="Hello"

// append
tr1.appendChild(td3)

// Creating row 4

// let td4=document.createElement("td")
// console.log(td4);
// td3.textContent="Hello"

// // append
// tr1.appendChild(td4)

let tr2=document.createElement("tr")
console.log(tr2);
// append to table tag
table.appendChild(tr2)

let td11=document.createElement("td")
console.log(td11);
td11.textContent="Hello"

// append
tr2.appendChild(td11)

let td12=document.createElement("td")
console.log(td12);
td11.textContent="Hello"

// append
tr2.appendChild(td12)