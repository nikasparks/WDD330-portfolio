import {date} from "./ToDos.js"

function buildList(taskEntered){
// send the information to the webpage
    let input = document.querySelector('#enterItems');
    let listSection = document.querySelector('#itemList');
    let main = document.querySelector('main');
    let blank = "";

    if (taskEntered != ""){
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');
        listBtn.setAttribute('id','clearItem');
        const listComplete = document.createElement('input');
        listComplete.setAttribute('type','checkbox');


        listItem.appendChild(listText);
        listText.textContent = taskEntered;
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        listItem.appendChild(listComplete);
        listSection.appendChild(listItem);

        // listBtn.addEventListener('click',() => {listSection.removeChild(listItem);})
       
    }
    // else{
    //     blank = document.createElement('p');
    //     blank.innerHTML = 'Please enter your favorite chapter from the Book of Mormon.';
    //     main.appendChild(blank);
    // }
    input.focus();
};

export {buildList};