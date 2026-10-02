
let boxes=document.querySelectorAll('.box');
let resetButton=document.querySelector('#reset');
let newGameButton=document.querySelector('#new-game');
let msg=document.querySelector('#message');
let msgcontainer=document.querySelector('.msg-container');
let turn = true;
let gameOver = false;
const WinCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let object = {
    'X': 0,                                                                             
    'O': 0
};
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (box.textContent === '') {
            box.textContent = turn ? 'X' : 'O';
            turn = !turn;
        }

        checkWinner();
    });
});

resetButton.addEventListener('click', () => {
    enableBoxes();
    msgcontainer.classList.add('hide');
    boxes.forEach(box => {
        box.textContent = '';
    });
    turn = true;
    gameOver = false;
});

newGameButton.addEventListener('click', () => {
    enableBoxes();
    boxes.forEach(box => {
        box.textContent = '';
    });
    turn = true;
    msgcontainer.classList.add('hide');
    gameOver = false;
    
});

const checkWinner = () => {
    for( let pattern of WinCombinations){
        console.log(boxes[pattern[0]].textContent, boxes[pattern[1]].textContent, boxes[pattern[2]].textContent);
    
    if( boxes[pattern[0]].textContent === boxes[pattern[1]].textContent && boxes[pattern[1]].textContent === boxes[pattern[2]].textContent && boxes[pattern[0]].textContent !== ''){
        let winner = boxes[pattern[0]].textContent;
        document.getElementById('message').innerHTML = `Player ${winner} wins!`;
        object[winner]++;
        disableBoxes();
        document.getElementById('message').innerHTML += `<br>Score - X: ${object.X}, O: ${object.O}`;
        gameOver = true;
        msgcontainer.classList.remove('hide');
    }

    let count = 0;
    for(let box of boxes){
        if(box.textContent !== ''){
            count++;
        }
        if (count === 9 && !gameOver){
            document.getElementById('message').innerHTML = `It's a draw!`;
            msgcontainer.classList.remove('hide');
        }
    }
}};
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    }  
};