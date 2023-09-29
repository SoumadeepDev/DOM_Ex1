console.log(document.body);
console.log(document.all);
console.log(document.head);
// console.log(document.getElementById("header-title").innerHTML); //This will return all html contents inside the fetched id
// console.log(document.getElementById("header-title").textContent); //This will return all elements irrespective of their style & attribute
var header = document.getElementById("main-header");
var headerTitle = document.getElementById("header-title"); //This will only return element considering all the attributes & style.
headerTitle.textContent = "Hello";
headerTitle.textContent = "List Title";
console.log(headerTitle);
// headerTitle.style.borderBottom = "solid 2px #000";
header.style.borderBottom = "solid 2px #000";

var items = document.getElementsByClassName("list-group-item");
console.log(items);
items[1].textContent = "Hello 2 ";

for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
}

var AddItems = document.querySelector(".container #main .title");
AddItems.style.fontWeight = "900";
AddItems.style.color = "rgb(0, 200, 0)";
