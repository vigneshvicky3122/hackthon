 var navigation = document.createElement('nav');
 var order = document.createElement('ul');
 var list = document.createElement('li');
 var list1 = document.createElement('li');
 var list2 = document.createElement('li');
 var list3 = document.createElement('li');
 var list4 = document.createElement('li')
var head = document.createElement('head');
var anger = list.innerHTML="<a class='page-link' onclick='myData()' href='#'>previous</a>";
var anger1 = list1.innerHTML="<a class='page-link' onclick='myData()' href='#' target='blank'>1</a>";
var anger2 = list2.innerHTML="<a class='page-link' onclick='myData()' href='#' target='blank'>2</a>";
var anger3 = list3.innerHTML="<a class='page-link' onclick='myData()' href='#' target='blank'>3</a>";
var anger4 = list4.innerHTML="<a class='page-link' onclick='myData()' href='#' target='blank'>next</a>";
order.style.display='flex',order.style.flexDirection='row', order.style.justifyContent="space-evenly", order.style.listStyle='none';
order.append(list);
order.append(list1);
order.append(list2);
order.append(list3);
order.append(list4);
navigation.append(order);
document.body.append(navigation)


navigation.setAttribute('class','Page navigation');
order.setAttribute('class','pagination');
list.setAttribute('class','page-item');
list1.setAttribute('class','page-item1');
list2.setAttribute('class','page-item2');
list3.setAttribute('class','page-item3');
list4.setAttribute('class','page-item4');
document.getElementsByClassName('page-link').innerHTML = res();
  

async function myData() {
  try{
  let data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  let res = await data.json ();
    console.log(res);
  }
catch(error) {
    console.log(error);
}}

function data(){
  return new Promise((resolve , reject)=>resolve("data promise resolved"));
}
function res(){
  return new promise ((resolve , reject)=>resolve("res promise resolved"));
};
