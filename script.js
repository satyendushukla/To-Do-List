const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value ===''){
        alert("you must write");
    }
else{
    const li = document.createElement('li');
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = '';
}
}