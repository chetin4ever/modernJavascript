// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);

// let val;

// val= document;
// val= document.links[0];
// scripts = document.scripts;
// let scriptArr = Array.from(scripts);
// scriptArr.forEach(function(script){
//   console.log(script.getAtrribute('src'));
// });
// console.log(val);


// console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);
// document.getElementById('task-title').style.backgroundColor="#CCC";
// document.getElementById('task-title').style.color='#fff';
// document.getElementById('task-title').textContent="My List";
// //document.getElementById('task-title').style.display='none';
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// document.querySelector('li').style.color='red';
// document.querySelector('li:last-child').style.color='blue';
// document.querySelector('li:nth-child(2)').style.color='cyan';
// document.querySelector('li:nth-child(3)').style.color='orange';
// document.querySelector('li:nth-child(odd)').style.color='#CCC';

// multiple selector


// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[3]);

// lis= Array.from(items);
// lis.reverse();
// lis.forEach( function (li, index){
//   //console.log(index +':'+li);
//   //console.log(index + ":" + li.className);
//   li.textContent= `${index}:hello`;
// });
// const items= document.querySelectorAll('ul.collection li.collection-item');
// //console.log(items);
// items.forEach(function(item, index){
//   item.texContent = `${index}`;

// });
// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li,index){
//   li.style.background= '#ccc';
// });
// liEven.forEach(function(li, index){
//   li.style.background='yellow';
// });

// for(let i=0; i<liEven.length;i++){
//   liEven[i].style.background='green';
// }
// let val;
// const list = document.querySelector('ul.collection');
// console.log(list);
// // const listItem = document.querySelectorAll('ul.collection-item:first-child');
// // val =listItem;
// val=list;

// val=list.chlidren;
// val=list.childNodes;
// val=list.childNodes[3];
// //val=list.childNodes[3].textContent="chetan";
// val=list.childNodes[3].style.color="blue";
// val=list.children[3].children[0].id="chetan";
// //val=list.children[3].children[0].classList.add="ABC";

// val=list.children[3].children[0];

// //val=list.chlidren[3];



// //val=list.childNodes[1].name;
// console.log(val);


// const li = document.createElement('li');
// li.className="collection-item";
// li.id="new-item";
// li.setAttribute('title','New Item');
// li.appendChild(document.createTextNode('hello-world'));
// const link= document.createElement('a');
// link.className="delete-item secondary-content";
// link.innerHTML=' <i class="fa fa-remove"></i>';
// li.appendChild(link);
// document.querySelector('ul.collection').append(li);
// console.log(li);
//=========================================================================

//examining the object  lec 22

let val;
val = document; // gives the whole document code in html form
val = document.all // gives the all html collection (44)
val = document.all[3];// we can traverse all the element by index;
val = document.all.length;//give the length of element in document
val = document.head;
val = document.body;
val = document.URL;
val = document.scripts;
scriptArr = Array.from(val);
scriptArr.forEach(function(element) {
 //console.log(element);
});
val = document.scripts[1].getAttribute('src');
val = document.all[5].getAttribute('href') // getatrribute returns the value of attribuite
val = document.forms; //returns the forms in the element
val = document.forms[0];
val = document.links; // retuens all the links tag i.e. <a>
val=document.links[0].className //delete-item secondary-content
val = document.links[0].classList[0]; //returns the first classname of link i.e delete-item
console.log(val);

//single document selector
//console.log(document.getElementById('task-title'));
//console.log(document.getElementById('task-title').id);
//console.log(document.getElementById('task-title').className);
//console.log(document.getElementById('task-title').style.color='red');
document.getElementById('task-title').style.backgroundColor='black';
document.getElementById('task-title').style.padding='5px';
//document.getElementById('task-title').style.display='none';
 document.getElementById('task-title').innerText="hello world";
 document.getElementById('task-title').textContent="again hello world";
 document.getElementById('task-title').innerHTML='<span style="color:yellow">Task-List</span>';

 //document queryselector for multiple element
 let items=document.getElementsByClassName('collection-item');
 let lis = Array.from(items);
 lis.forEach(function(li){
    console.log(li);
 });
 items[0].style.color='green';
 items[4].textContent='my New Task';
 querySelector= document.querySelector('.delete-item');
 document.querySelector('li').style.color='red';
 document.querySelector('ul li:nth-child(4)').style.color='blue';
console.log(querySelector);

let itemslist= document.querySelectorAll('ul.collection li.collection-item')// returns nodelist
let itemslist1=Array.from(itemslist);
itemslist1.reverse();
itemslist1.forEach(function(item,index){
    item.textContent=`${index}:hellooo`;
})
let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

 let items4=document.getElementsByClassName('collection-item'); //
 list= document.querySelector('ul.collection');
 listItem= document.querySelector('li.collection-item:first-child ');

val=list.children[3].textContent='heellllllo';


 //console.log(listitem.childNodes);
//console.log(listitem.childNodes[9].nodeType);


const li = document.createElement('li');
li.className='collection-item';
li.id="new-item";
//li.textContent="this is new item";
li.style.color="green";
// add the text node
li.appendChild(document.createTextNode('liiist itemmm'));
//create link
const link = document.createElement('a');
//add class to link
link.className='delete-item secondary-content';
// add X button to the link
link.innerHTML='<i class="fa fa-remove"></i>'
// append the list of created item in ul list
li.appendChild(link);
document.querySelector('ul.collection').appendChild(li);


console.log(li);





