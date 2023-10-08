// Function to retrieve items from local storage
function getItemsFromLocalStorage() {
  var items = JSON.parse(localStorage.getItem("items")) || [];
  return items;
}

// Function to set items in local storage
function setItemsInLocalStorage(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

// Function to display items from local storage
function displayItemsFromLocalStorage() {
  var items = getItemsFromLocalStorage();
  var itemList = document.getElementById("items");
  itemList.parentElement.style.backgroundColor = "#f4f4f4";
  var previousElement = itemList.previousElementSibling;

  if (previousElement) {
    var text = previousElement.textContent || previousElement.innerText;
    text = text.toUpperCase();
    previousElement.textContent = text;
    previousElement.style.color = "blue";
  }
  var AddItems = document.querySelector(".container>.card .title");
  AddItems.style.color = "Green";

  items.forEach(function (item) {
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.style.backgroundColor = "#f4f4f4";

    var itemTextDiv = document.createElement("div");
    itemTextDiv.style.fontWeight = "bold";
    itemTextDiv.style.display = "inline-block";
    itemTextDiv.appendChild(document.createTextNode(item.itemName));

    var descriptionDiv = document.createElement("div");
    descriptionDiv.style.fontWeight = "bold";
    descriptionDiv.style.display = "inline-block";
    descriptionDiv.appendChild(document.createTextNode(item.itemDescription));

    var div = document.createElement("div");
    div.className = "btn-group float-right";

    var button_edit = document.createElement("button");
    button_edit.className = "btn btn-info btn-sm edit";
    button_edit.style.marginRight = "5px";
    button_edit.style.borderRadius = "5px";
    button_edit.innerText = "Edit";

    var button_del = document.createElement("button");
    button_del.className = "btn btn-danger btn-sm delete";
    button_del.style.borderRadius = "5px";
    button_del.innerText = "X";

    div.appendChild(button_edit);
    div.appendChild(button_del);

    li.appendChild(itemTextDiv);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(descriptionDiv);
    li.appendChild(div);

    itemList.appendChild(li);
  });
}

// Add Item Event Listener
document.getElementById("addForm").addEventListener("submit", addItem);

// Function to add item
function addItem(e) {
  e.preventDefault();

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

  var newItem = {
    itemName: newItemText,
    itemDescription: newItemDescription,
  };

  var items = getItemsFromLocalStorage();
  items.push(newItem);
  setItemsInLocalStorage(items);

  // Clear the input text fields
  document.getElementById("item").value = "";
  document.getElementById("description").value = "";

  // Display the new item in the list
  var itemList = document.getElementById("items");
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.style.backgroundColor = "#f4f4f4";

  var itemTextDiv = document.createElement("div");
  itemTextDiv.style.fontWeight = "bold";
  itemTextDiv.style.display = "inline-block";
  itemTextDiv.appendChild(document.createTextNode(newItemText));

  var descriptionDiv = document.createElement("div");
  descriptionDiv.style.fontWeight = "bold";
  descriptionDiv.style.display = "inline-block";
  descriptionDiv.appendChild(document.createTextNode(newItemDescription));

  var div = document.createElement("div");
  div.className = "btn-group float-right";

  var button_edit = document.createElement("button");
  button_edit.className = "btn btn-info btn-sm edit";
  button_edit.style.marginRight = "5px";
  button_edit.style.borderRadius = "5px";
  button_edit.innerText = "Edit";

  var button_del = document.createElement("button");
  button_del.className = "btn btn-danger btn-sm delete";
  button_del.style.borderRadius = "5px";
  button_del.innerText = "X";

  div.appendChild(button_edit);
  div.appendChild(button_del);

  li.appendChild(itemTextDiv);
  li.appendChild(document.createTextNode(" "));
  li.appendChild(descriptionDiv);
  li.appendChild(div);

  itemList.appendChild(li);
}

// Delete Item Event Listener
document.getElementById("items").addEventListener("click", removeItem);

// Function to remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li_item = e.target.parentElement.parentElement;
      var itemName = li_item.firstChild.textContent;
      var items = getItemsFromLocalStorage();

      // Remove the item from the local storage
      items = items.filter(function (item) {
        return item.itemName !== itemName;
      });

      setItemsInLocalStorage(items);

      // Remove the item from the UI
      li_item.remove();
    }
  }
}

// Display items from local storage when the page loads
document.addEventListener("DOMContentLoaded", function () {
  displayItemsFromLocalStorage();
});

// Filter Event Listener
document.getElementById("filter").addEventListener("keyup", filterItems);

// Function to filter items
function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var li_items = document.getElementsByTagName("li");
  Array.from(li_items).forEach(function (item) {
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
