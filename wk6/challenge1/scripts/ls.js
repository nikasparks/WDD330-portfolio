import {date} from "./ToDos.js";

function saveTodo(key, value){
// send the information to local storage
    if (window.localStorage.getItem(key)){
        delTodo(key);
        window.localStorage.setItem(key, JSON.stringify(value));}
    else{
        window.localStorage.setItem(key, JSON.stringify(value))
    }
};

function readTodo(key){
    // get data from local storage
    let value = window.localStorage.getItem(key);
    return JSON.parse(value);
};

function delTodo(key){
// delete from local storage
    window.localStorage.removeItem(key);
};

export{saveTodo, readTodo, delTodo};