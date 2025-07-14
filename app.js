
    let box = document.querySelectorAll(".box");
let reset = document.querySelector(".re");
let msg = document.querySelector(".msg"); 
let newg = document.querySelector(".new");
let para = document.querySelector("p");

let turn = true;

const arr = [
  [0,1,2], [0,3,6], [0,4,8], [1,4,7],
  [2,4,6], [2,5,8], [6,7,8], [3,4,5]
];

// Add click event to each box
box.forEach((boxEl) => {
  boxEl.addEventListener("click", () => {
    console.log("box was clicked");
    
    if (turn) {
      boxEl.innerText = "O";
      turn = false;
    } else {
      boxEl.innerText = "X";
      turn = true;
    }
    
    boxEl.disabled = true;
    win();
  });
});

// Enable all boxes
const enablebox = () => {
  box.forEach(b => {
    b.disabled = false;
    b.innerText = "";
  });
};

// Disable all boxes
const disablebox = () => {
  box.forEach(b => {
    b.disabled = true;
  });
};

// Reset the game
const resetg = () => {
  turn = true;
  msg.classList.add("hide");
  enablebox();
};

// Show the winner message
const winner = (showwinner) => {
  para.innerText = `Congratulations! The winner is ${showwinner}`;
  msg.classList.remove("hide");
};

// Check for a winner
const win = () => {
  for (let pattern of arr) {
    let p1 = box[pattern[0]].innerText;
    let p2 = box[pattern[1]].innerText;
    let p3 = box[pattern[2]].innerText;

    if (p1 !== "" && p2 !== "" && p3 !== "") {
      if (p1 === p2 && p2 === p3) {
        console.log("winner");
        winner(p1);
        disablebox(); // only call when someone wins
        break;
      }
    }
  }
};

// Event listeners for buttons
reset.addEventListener("click", resetg);
newg.addEventListener("click", resetg);
