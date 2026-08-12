// let buttons = document.querySelectorAll(".cell");

// let playerTurn = true;
// let gameActive = true;
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (button.innerText == "" && gameActive == true) {
//       if (playerTurn == true) {
//         button.innerText = "X";

//         winGame("X");
//         playerTurn = false;
//       } else {
//         button.innerText = "O";
//         if (checkDraw() == false) {
//           console.log("draw");
//         } else {
//           winGame("O");
//           playerTurn = true;
//         }
//       }
//     }
//   });
// });

// let resetBtn = document.querySelector(".reset-btn");
// resetBtn.addEventListener("click", (e) => {
//   buttons.forEach((button) => {
//     button.innerText = "";
//     gameActive = true;
//   });
// });

// let winPattern = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// function winGame(winner) {
//   for (pattern of winPattern) {
//     let post1 = buttons[pattern[0]].innerText;
//     let post2 = buttons[pattern[1]].innerText;
//     let post3 = buttons[pattern[2]].innerText;

//     if ((post1 !== "", post1 == winner && post2 == winner && post3 == winner)) {
//       console.log(`${winner} is winner`);
//       gameActive = false;
//     }
//   }
// }

// let checkDraw = () => {
//   for (val of buttons) {
//     if (val.innerText === "") {
//       return true;
//     }
//   }

//   return false;
// };
