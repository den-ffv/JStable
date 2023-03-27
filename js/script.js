import {dataTadle} from "./data.js";
const UL = document.querySelectorAll('ul>li>span');

const table = document.querySelector('#table');

dataTadle.forEach((elem) => {
  const row = document.createElement('tr');
  row.innerHTML = `
        <td>${elem.coutru}</td>
        <td>${elem.city}</td>
        <td>${elem.currency}</td>
  `;
  table.appendChild(row)
})


document.querySelector('table').onclick = function(event) {
  
  if(event.target.tagName !== 'TD') return false;
 let data = [...event.target.parentNode.children];
 let text = getDataFromTD(data);
 outText(text);
};
function getDataFromTD(tdArr) {
  // return tdArr.map(item => item.textContent);
  let arr = [];
  for(let i = 0; i < tdArr.length; i++){
    arr.push(tdArr[i].textContent);
  }
  return arr;
}
function outText(text) {
  // text.forEach((item, index) => UL[index].textContent = item);
  for(let i = 0; i < text.length; i++){
    UL[i].textContent = text[i];
  }
}