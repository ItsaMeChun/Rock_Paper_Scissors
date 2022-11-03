let possibleChoice = document.querySelectorAll('button');
let yourChoice, computerChoice;
for(let i=0; i<possibleChoice.length; i++){
    possibleChoice[i].addEventListener('click', function(element){
        yourChoice = element.target.id;

        document.getElementById('yourChoice').innerText = element.target.textContent;
        
        //RANDOM FOR COMPUTER
        computerChoice = Math.floor(Math.random() * 3);
        
        //COMPUTER CHOICE SHOW
        switch(computerChoice){
            case 0:
                document.getElementById('computerChoice').innerText = "Rock";
                break;
            case 1:
                document.getElementById('computerChoice').innerText = "Paper";
                break;
            case 2:
                document.getElementById('computerChoice').innerText = "Scissors";
                break;
        }
        
        //RESULT 
        if(computerChoice == yourChoice){
            document.getElementById('result').innerText = 'Draw';
        } 
        // 0: Rock, 1: Paper, 2: Scissors
        if(computerChoice == 0 && yourChoice == 1){
            document.getElementById('result').innerText = 'Win';
        } else if (computerChoice == 0 && yourChoice == 2){
            document.getElementById('result').innerText = 'Lose';
        }
        
        if(computerChoice == 1 && yourChoice == 0){
            document.getElementById('result').innerText = 'Lose';
        } else if (computerChoice == 1 && yourChoice == 2){
            document.getElementById('result').innerText = 'Win';
        }
        
        if(computerChoice == 2 && yourChoice == 0){
            document.getElementById('result').innerText = 'Win';
        } else if (computerChoice == 2 && yourChoice == 1){
            document.getElementById('result').innerText = 'Lose';
        }
    });
}