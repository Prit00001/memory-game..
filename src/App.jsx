import {useState,useEffect} from "react"
import Header from "./components/header.jsx"
import Scoreboard from "./components/scoreboard.jsx"
import Cards from "./components/cards.jsx"
import {FetchPokemon} from "./services/pokemon.js"
import './App.css'

function App(){
const [cards,setCards]=useState([])
const [score,setScore]=useState(0)
const [highestScore,setHighestScore]=useState(Number(localStorage.getItem("highestScore")) || 0)
const [clickedCards,setClickedCards]=useState([])

function shuffleCards(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] =
      [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function handleCardClick(cardId) {
  if(clickedCards.includes(cardId)){
    alert("You clicked the same card again! Game Over!");
    setScore(0);
    setClickedCards([]);
  } else {
     const newScore = score +1;
     setScore(newScore);
     if(newScore> highestScore){  
      setHighestScore(newScore);
     }
      setClickedCards((prev) => [...prev, cardId]);
     if (newScore === cards.length) {
  alert("🎉 You Win!");
  setScore(0);
  setClickedCards([]);
}
   
  }
  setCards((prev)=> shuffleCards(prev));
}
useEffect(() => {
  localStorage.setItem("highestScore", highestScore);
}, [highestScore]);
useEffect(() => {
  async function loadPokemon() {
    const pokemonData = await FetchPokemon();
    setCards(shuffleCards(pokemonData));
  }

  loadPokemon();
}, []); 

return (
  <>
  <div className="head">
    < Header />
    < Scoreboard 
    score={score}
    highestScore={highestScore}
     />
     </div>
     <div className="cards">
    < Cards
      cards={cards} 
      handleCardClick={handleCardClick}/>
  </div>
  </>
)
}
export default App;
