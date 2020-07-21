export const CHOICES = {
    rock: { imgUrl: "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png", name: "rock" },
    paper: { imgUrl: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png", name: "paper" },
    scissors: { imgUrl: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png", name: "scissors" }
  };


  export const getRandomChoice = () => {
    let choiceNames = Object.keys(CHOICES);
    let randomIndex = Math.floor(Math.random() * 3);
    let choiceName = choiceNames[randomIndex];
    return CHOICES[choiceName];
  };

  export const getRoundOutcome = (user, computer) => {

    let result;
    // console.log("ddddd",user,computer)
  
  
    if (user === "rock") {
      result = computer === "scissors" ? "Victory!" : "Defeat!";
    }
    if (user === "paper") {
      result = computer === "rock" ? "Victory!" : "Defeat!";
    }
    if (user === "scissors") {
      result = computer === "paper" ? "Victory!" : "Defeat!";
    }
  
    if (user === computer) result = "Tie game!";
    return [result];
  
  };