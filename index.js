let itemlist=document.getElementById('items');
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.parentElement);
console.log("lastElement child")
console.log(itemlist.lastElementChild);

console.log("last child")

console.log(itemlist.lastChild);

// create child:



console.log("firstElement Child")

console.log(itemlist.firstElementChild);

console.log("first child")

console.log(itemlist.firstChild);

console.log("next sibling")
console.log(itemlist.nextSibling);
console.log("next Element sibling");
console.log(itemlist.nextElementSibling);
console.log("previous sibling");
console.log(itemlist.previousSibling);
console.log("previous element sibling");
console.log(itemlist.previousElementSibling);

// create element:

let newdiv=document.createElement('div');
newdiv.className='newdiv';
newdiv.id='newdiv';
newdiv.textContent='This is new Div';
newdiv.style.color="green";
newdiv.style.backgroundColor='black';
// set attribute
newdiv.setAttribute('title' ,'wow');
let container=document.querySelector('#main-header .container');
let h1=document.getElementById('header-title');

// inserted element


container.insertBefore(newdiv,h1);

let textdiv=document.createTextNode("This is text node");
newdiv.appendChild(textdiv);

