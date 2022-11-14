let addButton = document.getElementById('add');
let itemsContainer = document.getElementById('items-container');
let inputField = document.getElementById('input');

addButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    itemsContainer.appendChild(paragraph);
}
)