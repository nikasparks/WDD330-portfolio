import {date} from "./ToDos.js";

function saveTodo(key, value){
// send the information to local storage
    window.localStorage.setItem(key, value);
};

function readTodo(key){
    // get data from local storage
    let value = window.localStorage.getItem(key);
    return value
};

function delTodo(key){
// delete from local storage
    window.localStorage.removeItem(key);
};

export{saveTodo, readTodo, delTodo};