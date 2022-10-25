import * as util from "./utilities.js";
import * as ls from "./ls.js"
export const date = new Date();
let todoList = null;
let taskEntered = document.querySelector('#enterItems').value;
let todo = {};
let completed = Boolean;
// let taskEntered = document.createElement('li')

function saveTodo(task,key){

};

function getTodo(){
    let taskEntered = document.querySelector('#enterItems').value;
    // let blank = ""
    // tdItem.value = "";
    let id = date.getTime();
    todo.id = id;
    todo.content = taskEntered;
    todo.completed = false;
    todoList = [todo];
    console.log(todoList)

    util.buildList(taskEntered)
    
};

function deleteTodo(){
    listSection.removeChild(listItem)
};

function filterList(){

};

export {getTodo, saveTodo, deleteTodo, filterList}




let addButton = document.querySelector('#addItem') 
addButton.addEventListener('click',getTodo);
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