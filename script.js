// Function to add an item
function addItem() {
    let name = document.getElementById('itemName').value;
    let quantity = document.getElementById('itemQuantity').value;

    if (name === '' || quantity === '') {
        alert('Please enter both name and quantity');
        return;
    }

    let items = JSON.parse(localStorage.getItem('inventory')) || [];
    items.push({ name, quantity });
    localStorage.setItem('inventory', JSON.stringify(items));

    alert('Item added successfully!');
    document.getElementById('itemName').value = '';
    document.getElementById('itemQuantity').value = '';
}

// Function to display items
function displayItems() {
    let table = document.getElementById('inventoryTable');
    table.innerHTML = '';

    let items = JSON.parse(localStorage.getItem('inventory')) || [];

    items.forEach((item, index) => {
        let row = table.insertRow();
        row.insertCell(0).innerText = item.name;
        row.insertCell(1).innerText = item.quantity;

        let actions = row.insertCell(2);
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() { deleteItem(index); };
        actions.appendChild(deleteButton);
    });
}

// Function to delete an item
function deleteItem(index) {
    let items = JSON.parse(localStorage.getItem('inventory')) || [];
    items.splice(index, 1);
    localStorage.setItem('inventory', JSON.stringify(items));
    displayItems();
}

// Load items on view_items.html
if (document.getElementById('inventoryTable')) {
    displayItems();
}
