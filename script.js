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
  items[i].style.fontWeight = "bold";
}
items[2].style.backgroundColor = "rgb(0,200,0)";

var AddItems = document.querySelector(".container #main .title");
AddItems.style.fontWeight = "900";
AddItems.style.color = "rgb(0, 200, 0)";

//new task from here ...

// Creating a new element with different className
const newItem = document.createElement("li");
newItem.innerHTML = "New Item";
newItem.className = "list-newItem";

// Remove dot style from newItem
newItem.style.listStyleType = "none";
newItem.style.paddingLeft = "0";
newItem.style.marginLeft = "0";
newItem.style.borderLeft = "none";
newItem.style.borderRadius = "0";

const ul = document.getElementsByTagName("ul")[0]; //because this returns an array so we use first index to access it
ul.appendChild(newItem);

newItem_className = document.getElementsByClassName("list-newItem")[0];

// Add the same styles to the newItem as other li elements
newItem_className.style.backgroundColor = "#f4f4f4";
newItem_className.style.fontWeight = "bold";
newItem_className.style.textAlign = "left";
newItem_className.style.padding = "10px 15px";
newItem_className.style.border = "1px solid #dbdbdb";
