import * as td from "./ToDos.js"
import * as ls from "./ls.js"

function buildList(taskList){
// send the information to the webpage
    let input = document.querySelector('#enterItems');
    let listSection = document.querySelector('#itemList');
    let main = document.querySelector('main');
    let blank = "";
        
    if (taskList != "" && Array.isArray(taskList) === true){
        taskList.forEach(task => {
            const listItem = document.createElement('li');
            const listText = document.createElement('span');
            const listBtn = document.createElement('button');
            listBtn.setAttribute('class','clearItem');
            const listComplete = document.createElement('input');
            listComplete.setAttribute('type','checkbox');
            listComplete.setAttribute('class','completed');
            listComplete.checked = task.completed

            listItem.appendChild(listComplete);
            listItem.appendChild(listText);
            listText.textContent = task.content;
            listItem.appendChild(listBtn);
            listBtn.textContent = '❌';
            listSection.appendChild(listItem);

            listBtn.addEventListener('click',() => {listSection.removeChild(listItem);
            let oldList = ls.readTodo("Todo List")
            // let removeItem = oldList.findIndex(function(item) {
            //     return item.fiel === 'money';
            //   });
              
              // proceed to remove an item only if it exists.
            if(taskList.length > 0){
            ls.saveTodo("Todo List",oldList.splice(task, 1));
            }
            ls.saveTodo
            })
            listComplete.addEventListener('change',() =>
            {if (listComplete.value === 'on'){task.completed = true}})
    
    }
    )};
    
    input.focus();
};

function restList(){
    const clearList = document.querySelector('#itemList');
    while (clearList.hasChildNodes()) {
        clearList.removeChild(clearList.firstChild);}
};

export {buildList, restList};