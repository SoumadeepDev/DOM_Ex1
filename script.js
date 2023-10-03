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
// items[1].textContent = "Hello 2 ";

for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
  items[i].style.fontWeight = "bold";
}
items[2].style.backgroundColor = "rgb(0,200,0)";

var AddItems = document.querySelector(".container #main .title");
AddItems.style.fontWeight = "900";
AddItems.style.color = "rgb(0, 200, 0)";

//new task from here ...

// // Creating a new element with different className
// const newItem = document.createElement("li");
// newItem.innerHTML = "New Item";
// newItem.className = "list-newItem";

// Remove dot style from newItem
// newItem.style.listStyleType = "none";
// newItem.style.paddingLeft = "0";
// newItem.style.marginLeft = "0";
// newItem.style.borderLeft = "none";
// newItem.style.borderRadius = "0";

// const ul = document.getElementsByTagName("ul")[0]; //because this returns an array so we use first index to access it
// ul.appendChild(newItem);

// newItem_className = document.getElementsByClassName("list-newItem")[0];

// // Add the same styles to the newItem as other li elements
// newItem_className.style.backgroundColor = "#f4f4f4";
// newItem_className.style.fontWeight = "bold";
// newItem_className.style.textAlign = "left";
// newItem_className.style.padding = "10px 15px";
// newItem_className.style.border = "1px solid #dbdbdb";

//Next Task from here using querySelectorAll();
/**
 *Deliverable using querySelector:- 
  1.Make the 2nd item have green background color
  2.Make the 3rd item invisible
 
  Using QuerySelectorALL:-
  1.Change the font color to green for 2nd item in the item list.
  2.Choose all the odd elements and make their background green.

const secondItem = document.querySelector("#items li:nth-child(2)");
secondItem.style.backgroundColor = "#7ddb7d";

const thirdItem = document.querySelector("#items li:nth-child(3)");
thirdItem.style.display = "none";

const li = document.querySelectorAll("li");
li[1].style.color = "#018901";

const oddItems = document.querySelectorAll("#items li:nth-child(odd)");
oddItems.forEach((item) => {
  item.style.backgroundColor = "green";
});
*/
//New Tasks :
/*
manipulate the DOM using the following words...

parentElement
lastelementchild
lastchild
createchild
firstelementchild
firstchild
nextsibling
nextelementsibling
previoussibling
previouselementsibling
createelement
setAttribute
createtesxtnode
appendchild

1.add HEllo word before Item Lister
2.add HEllo word before Item 1

*/
//Traversing The DOM
//ParentNode
// const itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);

//ParentElement
var itemList = document.querySelector("#items");

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentElement.parentElement);

//childNodes && children
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

//FirstChild
console.log(itemList.firstChild); // This will return the first Node either element or Node or whiteSpace or anything
//FirstElementChild
console.log(itemList.firstElementChild); // This will return only element
// itemList.firstElementChild.textContent = "Item 1";
//LastElementChild
console.log(itemList.lastChild);
console.log(itemList.lastElementChild.textContent);
// itemList.lastElementChild.textContent = "Hello 5";

//nextSibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
//PreviousSibling && PreviousElementSibling
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "Blue";

//create  a div
var newDiv = document.createElement("div");
//add class
newDiv.className = "hello-class";
//add Id
newDiv.id = "hello-id";
//add attribute
newDiv.setAttribute("title", "Hello div");
//create a text node
var newDiv_Text = document.createTextNode("Hello World");
newDiv.appendChild(newDiv_Text);
// console.log(newDiv);

//Task -1 : add HEllo word before Item Lister
const header_word = document.getElementById("header-title");
header_word.textContent = "HEllo " + header.innerText;
//If we use something like `textContent`, the `<span>` section will also be included. If we use `innerHTML`, all the elements, nodes, and objects will be included, so we need to choose wisely.

//Task-2: Now go head and add HEllo word before Item 1
const newFirstItem = document.createElement("li");
newFirstItem.className = "list-group-item";
newFirstItem.innerText = "HEllo";

//New Task From Here...
//creating a div
const div = document.createElement("div");
div.className = "btn-group float-right";

//creating an edit button
const button_edit = document.createElement("button");
button_edit.className = "btn btn-info btn-sm edit";
button_edit.style = "margin-right: 5px; border-radius: 5px";
button_edit.innerText = "Edit";
//creating a delete button
const button_del = document.createElement("button");
button_del.className = "btn btn-danger btn-sm delete";
button_del.style = "border-radius: 5px";
button_del.innerText = "X";

div.appendChild(button_edit);
div.appendChild(button_del);
newFirstItem.append(div);

const firstChild = document.querySelector("li:nth-child(1)");

firstChild.parentNode.insertBefore(newFirstItem, firstChild);

const form = document.getElementById("addForm");
//Form Submit Event
form.addEventListener("submit", addItem);

//Add Item
function addItem(e) {
  e.preventDefault();

  // Get input values
  var newItemText = document.getElementById("item").value;
  var newItemDescription = document.getElementById("description").value;

  if (!newItemText) {
    alert("Please enter an item.");
    return;
  }
  if (!newItemDescription) {
    alert("Please enter item description.");
    return;
  }

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  li.style.backgroundColor = "#f4f4f4";

  // Create a div for the item text
  var itemTextDiv = document.createElement("div");
  // Adding styles
  itemTextDiv.style.fontWeight = "bold";
  itemTextDiv.style.display = "inline-block";
  itemTextDiv.appendChild(document.createTextNode(newItemText));

  // Create a div for the description text
  var descriptionDiv = document.createElement("div");
  // Adding styles
  descriptionDiv.style.fontWeight = "bold";
  descriptionDiv.style.display = "inline-block";
  descriptionDiv.appendChild(document.createTextNode(newItemDescription));

  // Create the button div
  var div = document.createElement("div");
  div.className = "btn-group float-right";

  // Create the edit button
  var button_edit = document.createElement("button");
  button_edit.className = "btn btn-info btn-sm edit";
  button_edit.style.marginRight = "5px";
  button_edit.style.borderRadius = "5px";
  button_edit.innerText = "Edit";

  // Create the delete button
  var button_del = document.createElement("button");
  button_del.className = "btn btn-danger btn-sm delete";
  button_del.style.borderRadius = "5px";
  button_del.innerText = "X";

  // Append the buttons to the button div
  div.appendChild(button_edit);
  div.appendChild(button_del);

  // Append the item text div, description div, and button div to the li element
  li.appendChild(itemTextDiv);
  li.appendChild(document.createTextNode(" ")); // Add a space between item and description
  li.appendChild(descriptionDiv);
  li.appendChild(div);

  // Append the li element to the itemList
  itemList.appendChild(li);

  // Clear the input text fields
  document.getElementById("item").value = "";
  document.getElementById("description").value = "";
}

//delete event
itemList.addEventListener("click", removeItem);
//function removeItem
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li_item = e.target.parentElement.parentElement;
      itemList.removeChild(li_item);
    }
  }
}

//New TASKS FROM HERE.....
//Filter Event
document.getElementById("filter").addEventListener("keyup", filterItems);
//Filter Items
function filterItems(e) {
  //convert entered text to lowerCase
  var text = e.target.value.toLowerCase();
  //get lis
  var li_items = document.getElementsByTagName("li");
  //convert all the lis to array
  Array.from(li_items).forEach((item) => {
    var itemName = item.firstChild.textContent.toLowerCase();
    var itemDescription =
      item.lastChild.previousSibling.textContent.toLowerCase();

    if (
      itemName.toLowerCase().indexOf(text) != -1 ||
      itemDescription.indexOf(text) !== -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
