// Snappar upp knappen, listan och textfältet innan jag arbetar med dem 
let addToDoButton = document.getElementById('addItemBtn');
let toDoList = document.getElementById('toDoList');
let doneList = document.getElementById('doneList');
let textfield = document.getElementById('textfield');

// Skapa en array för att lagra uppgifter
let tasks = [];

addToDoButton.addEventListener('click', function () {
    let taskDescription = textfield.value;

    let newToDo = document.createElement('li');
    let input = document.createElement('input');
    input.value = taskDescription;
    input.disabled = true;

    let editButton = createButton('Ändra', function() {
        if (editButton.innerText === 'Ändra') {
            editButton.innerText = 'Spara';
            input.disabled = false;
        } else {
            editButton.innerText = 'Ändra';
            input.disabled = true;
        }
    });

    let doneButton = createButton('Färdig', function() {
        doneList.appendChild(newToDo);
        newToDo.removeChild(doneButton);
    });

    let deleteButton = createButton('Radera', function() {
        if (newToDo.parentNode === doneList || newToDo.parentNode === toDoList) {
            newToDo.remove();
            tasks = tasks.filter(task => task !== taskDescription);
        }
        doneButton.remove();
    });

    newToDo.appendChild(input);
    newToDo.appendChild(editButton);
    newToDo.appendChild(doneButton);
    newToDo.appendChild(deleteButton);

    toDoList.appendChild(newToDo);

    textfield.value = "";
});

function createButton(text, clickHandler) {
    let button = document.createElement('button');
    button.innerText = text;
    button.addEventListener('click', clickHandler);
    return button;
}





