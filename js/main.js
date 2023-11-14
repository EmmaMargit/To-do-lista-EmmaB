// Snappar upp knappen, listan och textfältet innan jag arbetar med dem 
let addToDoButton = document.getElementById('addItemBtn');
let toDoList = document.getElementById('toDoList');
let doneList = document.getElementById('doneList');
let textfield = document.getElementById('textfield');

// Skapa en array för att lagra uppgifter
let tasks = [];

addToDoButton.addEventListener('click', function () {
    // Hämta texten från input-fältet
    let taskDescription = textfield.value;

    // Skapa ett nytt listelement
    let newToDo = document.createElement('li');

    // Skapa ett textfält 
    let input = document.createElement('input')
    input.value = taskDescription;
    input.disabled = true; // Avaktivera input initialt

    // Skapa 'Ändra' knappen
    let editButton = document.createElement('button');
    editButton.textContent = 'Ändra';

    // Skapa 'Färdiga' knappen
    let doneButton = document.createElement('button');
    doneButton.textContent = 'Färdig';

    // Skapa Radera knappen 
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Radera';

    // Lägg till händelselyssnare för ändra-knappen
    editButton.addEventListener('click', function(){
        // Aktivera/avaktivera textfältet
       // textfield.disabled = !textfield.disabled;
       input.disabled = false;
       


    });

    // Lägg till händelselyssnare för färdiga-knappen
    doneButton.addEventListener('click', function(){
        // Flytta sysslan till färdiga listan
        doneList.appendChild(newToDo);

        // Ta bort färdiga knappen
        newToDo.removeChild(doneButton);
    });

    // Lägg till händelselyssnare för radera-knappen
    deleteButton.addEventListener('click', function(){
        if (newToDo.parentNode === doneList || newToDo.parentNode === toDoList) {
            // Radera uppgiften
            newToDo.remove();
    
            // Ta bort uppgiften från arrayen
            tasks = tasks.filter(task => task !== taskDescription);
        }


    });

    // Lägg in alla komponenter i listItem
    newToDo.appendChild(input);
    newToDo.appendChild(editButton);
    newToDo.appendChild(doneButton);
    newToDo.appendChild(deleteButton);

    // Lägg in listItem i 'att göra' listan 
    toDoList.appendChild(newToDo);

    // Rensa textfältet och avaktivera det 
    textfield.value = "";
});
