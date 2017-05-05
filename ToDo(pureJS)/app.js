const toggleList = document.getElementById('toggleList');
const toggleButton = document.getElementById('hideD');
const toggleText = document.querySelector('.toggleL');
const toggleBText = document.querySelector('.toggleB');
const list = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = list.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
lis.input = document.createElement('input');
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = '#591fa5';
lastListItem.style.backgroundColor = 'crimson';

function attachListItemNotes(li) {
    let noteInput = document.createElement('input');
    noteInput.className = 'noteInput';
    noteInput.value = 'Write Notes Here';
    li.appendChild(noteInput);
}

function attachListItemButtons(li) {
    //Creates up button
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);
    //Creates down button
    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);
    //Creates remove button
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
    //Creates Edit button
    let notes = document.createElement('button');
    notes.className = 'notes';
    notes.textContent = 'Notes';
    li.appendChild(notes);
}
//loops through list items/adds buttons to the page for each item.
for (let i = 0; i < lis.length; i += 1) {
    attachListItemNotes(lis[i])
    attachListItemButtons(lis[i])

}

//Adds functionality to Up, Down, and Remove.
listUl.addEventListener('click', (event) => {

    if (event.target.tagName == 'BUTTON') {

        if (event.target.className == 'remove') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }

        if (event.target.className == 'up') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }

        if (event.target.className == 'down') {
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if (nextLi) {
                ul.insertBefore(nextLi, li);
            }
        }
        if (event.target.className == 'notes') {
            let li = event.target.parentNode;
            let noteInput = li.children[0]
            if (noteInput.style.display == 'block') {
                noteInput.style.display = 'none';
            } else {
                noteInput.style.display = 'block';
            }
            console.log(noteInput.style.display);
        }
    }
});

//Hides/Shows List.
toggleList.addEventListener('click', () => {
    toggleText.textContent = 'Hide List';
    if (list.style.display == 'none') {
        toggleList.textContent = '-';
        list.style.display = 'block';
    } else {
        toggleText.textContent = 'Show List';
        toggleList.textContent = '+';
        list.style.display = 'none';
    }
    console.log(list.style.display)
});

//Hides/Shows Change List Descrption button.
toggleButton.addEventListener('click', () => {
    toggleBText.textContent = 'Hide Description Buttion';
    if (descriptionButton.style.display == 'inline-block') {
        toggleButton.textContent = '+';
        descriptionButton.style.display = 'none';
        descriptionInput.style.display = 'none';
    } else {
        toggleBText.textContent = 'Show Description Buttion';
        toggleButton.textContent = '-';
        descriptionButton.style.display = 'inline-block';
        descriptionInput.style.display = 'inline-block';
    }
});

descriptionButton.addEventListener('click', () => {
    if (descriptionInput.value === "") {
        alert("Please enter a Description");
    } else {
        descriptionP.innerHTML = descriptionInput.value + ':';
    }
});
//Adds items to list
addItemButton.addEventListener('click', () => {
    if (addItemInput.value === "") {
        alert('Please enter an Item');
    } else {
        let ul = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');
        let liNotes = document.createElement('input');
        li.textContent = addItemInput.value;
        attachListItemNotes(li)
        attachListItemButtons(li);
        ul.appendChild(li);
        addItemInput.value = '';
    }
});
