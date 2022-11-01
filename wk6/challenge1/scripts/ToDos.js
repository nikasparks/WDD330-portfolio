import * as util from "./utilities.js";
import * as ls from "./ls.js"
export const date = new Date();
let todoList = [];
let taskEntered = document.querySelector('#enterItems').value;
// let todo = {};
let completed = Boolean;
// let taskEntered = document.createElement('li')


function getTodo(event){
    let todo = {};
    let taskEntered = document.querySelector('#enterItems').value;
    document.querySelector('#enterItems').value = "";
    todo.id = event.timeStamp;
    todo.content = taskEntered;
    todo.completed = false;
    todoList.push(todo);
    console.log(todoList)
    util.restList()
    util.buildList(todoList)
    ls.saveTodo('Todo List',todoList)
};

function deleteTodo(){
    // listSection.removeChild(listItem)
};

function filterList(){
    if (filterActive.checked === true){
        let activeList = []
        todoList.forEach(item => {
        if (item.completed === false){
            activeList.push(item)}})
        util.restList()
        util.buildList(activeList)
        totalCount.innerHTML = `Total Count: ${activeList.length}`
    }
    else if (filterDone.checked === true){
        let doneList = todoList.filter((doneTodo) => doneTodo.completed === true)
        util.restList()
        util.buildList(doneList)
        totalCount.innerHTML = `Total Count: ${doneList.length}`
    }
    else{
        let allList = []
        todoList.forEach(item =>        
            allList.push(item))
        util.restList()
        util.buildList(allList)
        totalCount.innerHTML = `Total Count: ${allList.length}`
    }
};

function completeTodo(task){
    if (completeCheck.checked === true){
        task.completed = true;
    }
};

console.log(todoList);
export {getTodo, completeTodo, deleteTodo, filterList}

let totalCount = document.querySelector('#totalTasks')
let filterAll = document.querySelector('#filtAll')
let filterActive = document.querySelector('#filtActive')
let filterDone = document.querySelector('#filtDone')
let completeCheck = document.querySelector('#completed')
let addButton = document.querySelector('#addItem') 
addButton.addEventListener('click',getTodo);
addButton.addEventListener('keydown',getTodo);
let filterBtns = document.querySelectorAll('input[type=radio][name="filter"]')
filterBtns.forEach(btn => btn.addEventListener('change',() =>
    {if (btn.value === 'on'){filterList() }}))

// completeCheck.addEventListener('change',completeTodo);
// let clearButton = document.querySelector('#clearItem') 
// clearButton.addEventListener('click',deleteTodo);
// const input = document.querySelector('input');
// const list = document.querySelector('ul');
// const button = document.querySelector('button');
// const main = document.querySelector('main');

// button.addEventListener('click',() => {
//     let fav = input.value;
//     let blank = ""
//     input.value = "";
//     if (fav != ""){
//         const listItem = document.createElement('li');
//         const listText = document.createElement('span');
//         const listBtn = document.createElement('button');

//         listItem.appendChild(listText);
//         listText.textContent = fav;
//         listItem.appendChild(listBtn);
//         listBtn.textContent = '❌';
//         list.appendChild(listItem);

//         listBtn.addEventListener('click',() => {list.removeChild(listItem);})
//         blank = document.querySelector('p');
//         main.removeChild(blank);
//     }else{
//         blank = document.createElement('p');
//         blank.innerHTML = 'Please enter your favorite chapter from the Book of Mormon.';
//         main.appendChild(blank);
//     }
//     input.focus();
// })