import React, { useState } from 'react';
import './App.css';
import ChoiceCard from './components/Box'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CHOICES, getRoundOutcome, getRandomChoice } from "./utils";
import ChoiceButtons from './components/ChoiceButtons'


function App() {

  const [prompt, setGamePrompt] = useState("Start");
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);


  const onPlayerChoose = playerChoice => {
    

    const newComputerChoice = getRandomChoice()
    const newPlayerChoice = CHOICES[playerChoice]
    const result = getRoundOutcome(newPlayerChoice.name, newComputerChoice.name);
    
    setPlayerChoice(newPlayerChoice);
    setComputerChoice(newComputerChoice);
    

    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }
  
    setGamePrompt(result);
    gameHistory.push(result);
  }


  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard
              title="Computer"
              previousWinner={previousWinner}
              imgURL={computerChoice && computerChoice.imgUrl}
            />

            <h1>{prompt}</h1>
            <ChoiceButtons onPlayerChoose={onPlayerChoose} />

            <ChoiceCard
              title="You"
              previousWinner={previousWinner}
              imgURL={playerChoice && playerChoice.imgUrl} />
          </div>
       
        <div className="col-md-4 history themed-grid-col">
          <h3>History</h3>
          <ul>
            {gameHistory.map(result => {
              return <li>{result}</li>;
            })}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App












// import React, { Component } from 'react'
// import './App.css';
// import ChoiceCard from './components/Box'


// const CHOICES = {
//   rock:
//     "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
//   paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
//   scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
// };

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       winnerPerson: false
//     }
//   }

//   callHey = () => {
//     console.log("hey")
//     this.setState({ winnerPerson: !this.state.winnerPerson })
//   }

//   render() {
//     return (
//       <div>


//         <ChoiceCard
//           title="You"
//           winner={this.state.winnerPerson}
//           imgURL={choices.rock}
//         />
//         <button onClick={() =>this.callHey()}>Hey</button>

//         <ChoiceCard
//           title="Computer"
//           winner={true}
//           imgURL={choices.paper}
//         />
//       </div>
//     )
//   }
// }

