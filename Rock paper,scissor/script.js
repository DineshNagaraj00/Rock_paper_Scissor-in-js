function play(){
    const moves=['rock','paper','scissor'];
    const player=prompt("Enter your move").toLowerCase();

    if (!moves.includes(player)){
        alert("Invalid Move")
        return;
    }
    const computer =moves[Math.floor(Math.random()*3)];
    let result;

    switch(player){
        case 'rock':
            switch(computer){
                case 'rock':
                    result ="It's a tie"
                    break
                case 'paper':
                    result='Computer wins'
                    break
                case 'scissor':
                    result='You win'
                    break
            }
            break
        case 'paper':
            switch(computer){
                case 'rock':
                    result ="You win"
                    break
                case 'paper':
                    result="It's a tie"
                    break
                case 'scissor':
                    result='Computer wins'
                    break
            }
            break
        case 'scissor':
            switch(computer){
                case 'rock':
                    result ="Computer wins"
                    break
                case 'paper':
                    result='You win'
                    break
                case 'scissor':
                    result="It's a tie"
                    break
            }
            break
    }
    alert(`You chose ${player}, computer chose ${computer}. ${result}`);
}
