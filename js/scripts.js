
let low = 1;
let high = 10;
let currectAns = Math.floor(Math.random() * 5);
let win;
let msgBox = document.querySelector(".message");

while(low <= 3){
    let ans = prompt("Guess a number between 1-10");
    if(ans === ""){
        alert("Please type you answer");
    } else {
        if(ans < currectAns){
            alert("Correct answer is greater!");
        }else if (ans > currectAns){
            alert("Correct answer is smaller!");
        }else if(ans == currectAns){
            win = "You Win!";
            alert(win);
            msgBox.innerHTML = "You Win!";
            break;
        }
        low++;
    }
    
}

if (win){
    console.log("You Win!");
} else {

    alert("You Lose");
    msgBox.innerHTML = "You Lose!";
}
