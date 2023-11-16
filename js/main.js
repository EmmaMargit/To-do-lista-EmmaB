// Snappar upp knappen, listan och textfältet innan jag arbetar med dem 
let addToDoButton = document.getElementById('addItemBtn');
let toDoList = document.getElementById('toDoList');
let doneList = document.getElementById('doneList');
let textfield = document.getElementById('textfield');

// Skapa en array för att lagra uppgifter
let tasks = [];

addToDoButton.addEventListener('click', function () {
    // Hämta texten från input-fältet
    // DENNA KOD ÄR JAG OSÄKER PÅ 
    let taskDescription = textfield.value;

    // Skapa ett nytt listelement
    let newToDo = document.createElement('li');

    // Skapa ett textfält i att göra listan 
    let input = document.createElement('input')
    input.value = taskDescription;
    input.disabled = true; // Avaktivera input initialt

    // Skapa 'Ändra' knappen i att göra listan 
    let editButton = document.createElement('button');
    editButton.innerText = 'Ändra';

    // Ändra knappen 'ändra' till 'spara' när jag ändrar slyssan 
    editButton.addEventListener('click', function(){
        // Byta ut texten på knappen och aktivera textfältet
        if (editButton.innerText === 'Ändra'){
            editButton.innerText = 'Spara'
            input.disabled = false;
        } else {
            editButton.innerText = 'Ändra';
            input.disabled = true;
        }
    })

    // Skapa 'Färdiga' knappen i att göra listan 
    let doneButton = document.createElement('button');
    doneButton.innerText = 'Färdig';

    // Skapa Radera knappen i att göra listan 
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Radera';

    // Lägg till händelselyssnare för färdiga-knappen
    doneButton.addEventListener('click', function(){
        // Flytta sysslan till färdiga listan
        doneList.appendChild(newToDo);

        // Ta bort färdiga knappen
        newToDo.removeChild(doneButton);
    });

    // Lägg till händelselyssnare för radera-knappen i färdiga listan 
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
