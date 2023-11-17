// Snappar upp knappen, listan och textfältet innan jag arbetar med dem 
let addToDoButton = document.getElementById('addItemBtn');
let toDoList = document.getElementById('toDoList');
let doneList = document.getElementById('doneList');
let textfield = document.getElementById('textfield');
let errorMessage = document.getElementById('errorMessage');

// Skapa en array för att lagra uppgifter
let tasks = [];

addToDoButton.addEventListener('click', function () {
    let taskDescription = textfield.value;

    // Inte skapa några tomma listor 
    if (taskDescription.trim() !== "") { 
        let newToDo = document.createElement('li');
        let input = document.createElement('input');
        input.value = taskDescription;
        input.disabled = true;

    // HA KOMMENTARE!!!!!!!!!!!!!!!!!!!!!!
        let editButton = createButton('Ändra', function() {
            if (editButton.innerText === 'Ändra') {
                editButton.innerText = 'Spara';
                input.disabled = false;
            } else {

                 // Kontrollera om användaren försöker spara en tom uppgift
                if (input.value.trim() === "") {
                    // Visa felmeddelande om användaren försöker spara en tom uppgift
                    errorMessage.style.display = 'block';
                    return; // Avsluta funktionen om uppgiften är tom
                } else {
                    errorMessage.style.display = 'none'; // Dölj felmeddelandet
                    editButton.innerText = 'Ändra';
                    input.disabled = true; 
                }
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
        //newToDo.appendChild(errorMessage); om jag ska i de andra 2 listorna
     

        toDoList.appendChild(newToDo);

        textfield.value = "";
        // Felmeddlandet ska ej visas
        errorMessage.style.display = 'none';
    } else {
        // Meddlandet kommer upp när man försöker skapa tom lista
        errorMessage.style.display = 'block';
    }
});

function createButton(text, clickHandler) {
    let button = document.createElement('button');
    button.innerText = text;
    button.addEventListener('click', clickHandler);
    return button;
}

