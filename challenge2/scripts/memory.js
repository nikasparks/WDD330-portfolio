const board = document.querySelectorAll('#board button');
const themeHolder = document.querySelectorAll('.themeChoice button');
console.log(theme)
let dataURL
// const dataURL = `./${theme.}`;
let characterList = [];
themeHolder.forEach((theme) => {
    theme.addEventListener('click',(choosenTheme) =>{
        if (choosenTheme.){};});});

function outputData(characters){
    // console.log(characters)
    let character1st = 0
    let character2nd = 0
    let cardNums = []
    let i2 = 8
    let i1 = 0
    const indexNums = new Set();
    
    while (indexNums.size < 16){
        let x = getRndInteger(1,16)
        indexNums.add(x) 
    }
    indexNums.forEach((index) => {
        cardNums.push(index);
    })
    
    
    for (character1st of characters) {
        let card1 = document.querySelector(`#card${cardNums[i1]}`);
        let info1 = document.createElement('div')
        let charName1 = document.createElement('h3');

        let charPic1 = document.createElement('img');
        // console.log(card1);
        
        info1.setAttribute('class','gameCard');
        // charPic1.setAttribute('class',' hide');
        charPic1.setAttribute('src',character1st.image);
        charPic1.setAttribute('alt',character1st.name);
        charPic1.setAttribute('class', 'gameCardPic');
        charName1.innerHTML = character1st.name;

        console.log(charPic1)

        info1.appendChild(charPic1);
        info1.appendChild(charName1);
        card1.appendChild(info1);
        i1++
        
    };
    
    for (character2nd of characters){
        let card2 = document.querySelector(`#card${cardNums[i2]}`);
        let info2 = document.createElement('div')
        let charName2 = document.createElement('h3');
        
        let charPic2 = document.createElement('img');
        // console.log(card2);

        info2.setAttribute('class','gameCard');
        // charPic2.setAttribute('class',' hide');
        charPic2.setAttribute('src',character2nd.image);
        charPic2.setAttribute('alt',character2nd.name);
        charPic2.setAttribute('class', 'gameCardPic');
        charName2.innerHTML = character2nd.name;
    
        console.log(charPic2)

        info2.appendChild(charPic2);
        info2.appendChild(charName2);
        card2.appendChild(info2);
        i2++
        
    };
};

function pickCharacters(characters){
    const charactersFiltered = characters.filter((index) => index.image !== "");
    let gameList = []
    const indexNums = new Set();
    while (indexNums.size < 8){
        let x = getRndInteger(0,charactersFiltered.length-1)
        indexNums.add(x) 
    }
    indexNums.forEach((index) => {
        gameList.push(charactersFiltered[index]);
    })
    outputData(gameList)
    console.log(charactersFiltered);
    console.log(indexNums);
    console.log(gameList);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

async function getCharacters(url) {
    const response = await fetch(url);
    if (response.ok) {
        list = await response.json();
        characterList = list;
        pickCharacters(characterList)

    }
}

// 

getCharacters(dataURL);
playGame();


function playGame(){
    let cardSeclected1st
    let cardSelected2nd
    let userPick1
    // let pA2
    let userPick2
    // let pB2
    let guess1 = 0;
    let guess2 = 0;
    let attempts = 0;
    let wins = 0;
    let message = document.querySelector('#message')
    board.forEach((item) =>{
        item.addEventListener('click',(e) => {
            if (guess1 === 0 && guess2 === 0){
                userPick1 = e.currentTarget
                userPick1.classList.add('selected')
                cardSeclected1st = userPick1.querySelector('.gameCardPic').alt
   
                console.log(cardSeclected1st)
                guess1++
                // attempts++
            
            }
            else if (guess1 === 1 && guess2 === 0){
                userPick2 = e.currentTarget
                userPick2.classList.add('selected')
                cardSelected2nd = userPick2.querySelector('.gameCardPic').alt
                
                console.log(cardSelected2nd)
                guess2++
                // attempts++
            
            if (guess1 === 1 && guess2 === 1){
                if (cardSeclected1st === cardSelected2nd){
                    message.innerHTML = 'You found a match.'
                    message.classList.remove('hiding')
                    guess1 = 0
                    guess2 = 0
                    attempts++
                    wins++
                }
            
                else if (cardSeclected1st !== cardSelected2nd){
                    message.innerHTML = 'Not a match! Try again.'
                    message.classList.remove('hiding')
                    guess1 = 0
                    guess2 = 0
                    attempts++
                    setTimeout(() => {userPick1.classList.remove('selected');userPick2.classList.remove('selected');},1200)
                    
                //     message.addEventListener('click',()=>{
                        
                //             userPick1.classList.remove('hide')
                //             pA2.classList.add('hide')
                //             userPick2.classList.remove('hide')
                //             pB2.classList.add('hide')
                //             message.classList.add('hide')
                    
                // })
                }
            }
            if (wins === 8){
                message.innerHTML = `Good job, you found all the matches! You finished in ${attempts} attempts`
            }
            }
            ; 
        console.log(e,guess1,guess2,attempts,wins);
        })
    })}
// const menuButton = document.querySelector('.ham');
// const mainNav = document.querySelector('.navlist')

// menuButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

// // to solve the mid resizing issue with responsive class
// window.onresize = () => {if (window.innerWidth > 760)
// mainNav.classList.remove('responsive')};