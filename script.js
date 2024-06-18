// Function to add an item to the list
function addItem() {
    const ul = document.getElementById('item-list');
    const li = document.createElement('li');
    li.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(li);
}

// Function to remove the last item from the list
function removeItem() {
    const ul = document.getElementById('item-list');
    if (ul.children.length > 0) {
        ul.removeChild(ul.lastChild);
    }
}
