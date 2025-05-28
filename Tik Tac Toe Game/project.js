
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgconatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //player0
let winPattern = [
    [ 0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7], 
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    boxes.forEach((box) => {
        box.innerText = "";
        enablebtns();
    });
    
    msgconatiner.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;

        } else { //playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disablebtns = () => {
    for (let box of boxes) {
        box.disabled = true;
        // box.innerText = "";
    }
};

const enablebtns = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgconatiner.classList.remove("hide");
    disablebtns();
};

const checkWinner = () => {
    for(let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
}
newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);

//1D Array
// let one_D = ["abcd", "hfd", "sdkjf"];
//2D Array
// let two_D = [["potato", "tomato", "apple"], ["rice", "vegetables"], ["pen", "book"]];