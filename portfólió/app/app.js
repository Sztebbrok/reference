var throwDice = document.querySelector("#throw");
var score1Value = document.querySelector("#score-1-value");
var score2Value = document.querySelector("#score-2-value");
var dice1 = document.querySelector("#dice1");
var dice2 = document.querySelector("#dice2");
var player1 = document.querySelector("#left");
var player2 = document.querySelector("#right");
var newGameButton = document.querySelector("#newgame");
var losingNumber = diceNumber();


function diceNumber(){
    var random = Math.floor(Math.random() * 6) + 1;
    return random;
}

function newGame(){
    player1.style.background = "white";
    player2.style.background = "white";
    losingNumber = diceNumber();
    score1Value.textContent = 0;
    score2Value.textContent = 0;
    player2.classList = "";
    player1.classList = "active";
    throwDice.style.visibility = "visible";
    dice1.classList.remove("addcube");
    dice2.classList.remove("addcube");
}

function gameEngine(){
    //kattintásra random szám generálása
    var round = diceNumber();
    console.log(round);
    console.log(losingNumber);
    //generált szám értékének megadása
    if(player1.classList == "active"){
    score1Value.textContent = round;
    dice2.classList.remove("addcube");
    dice1.classList.add("addcube");
    dicePic1(round);
    if(round !== losingNumber){
        player1.classList.remove("active");
        player2.classList.add("active");
        score2Value.textContent = 0;
    }
    else{
        score1Value.textContent = "Game Over" ;
        throwDice.style.visibility = "hidden";
        player1.style.backgroundImage = "url(../portfólió/pictures/blood.jpg)"
        
    }
}

    else if(player2.classList == "active"){
        score2Value.textContent = round;
        dice1.classList.remove("addcube");
        dice2.classList.add("addcube");
        dicePic1(round);
        if(round !== losingNumber){
            player2.classList.remove("active");
                player1.classList.add("active");
                score1Value.textContent = 0;
           
        }
        else 
            {
            score2Value.textContent = "Game Over" ;
            throwDice.style.visibility = "hidden";
            player2.style.backgroundImage = "url(../portfólió/pictures/blood.jpg)";
            }
                
            
           
        }
    
    }


function dicePic1(round){
    var dicePic = document.querySelector(".addcube");
    if(round === 1){
        dicePic.style.backgroundImage = "url('../portfólió/pictures/dice1.png')";
    }
    else if(round === 2){
        dicePic.style.backgroundImage = "url('../portfólió/pictures/dice2.png')";
    }
    else if(round === 3){
        dicePic.style.backgroundImage = "url('../portfólió/pictures/dice3.png')";
    }
    else if(round === 4){
        dicePic.style.backgroundImage = "url('../portfólió/pictures/dice4.png')";
    }
    else if(round === 5){
        dicePic.style.backgroundImage = "url('../portfólió/pictures/dice5.png')";
    }
    else if(round === 6){
        dicePic.style.backgroundImage = "url('../portfólió/pictures/dice6.png')";
    }
}


throwDice.addEventListener("click", function(){
    gameEngine()
});

newGameButton.addEventListener("click", function(){
    newGame();
})





