const inputBox = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const tasklist = document.getElementById('list-container');

//function to add task to the task list

function addTask() {
    if (inputBox.value.trim() === '') {
        alert('You have to write something');
    } else {
        let task = inputBox.value;
        let li = document.createElement('li');
        li.textContent = task; 
        
        tasklist.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}



// Handle both click and Enter key press when adding tasks

addBtn.addEventListener('click', addTask);
inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

//add checked class to the list item , delete the list item if the clicked element is span (the delete button) 

tasklist.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});

//save data to local stroage

function saveData(){
    localStorage.setItem('data', tasklist.innerHTML);
}

//load data from local storage

function loadData(){
    tasklist.innerHTML = localStorage.getItem('data');
}

// Call the loadData function to load the data from local storage when the page is loaded

loadData();