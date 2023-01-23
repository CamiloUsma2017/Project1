import { useState } from "react";
import "./App.css";
import QuoteBox from "./Components/QuoteBox";
import db from "./db/quotes.json";

/* Componentes que no cambian */
const arrayColors = [
  "#273a2d",
  "#6f7357",
  "#223026",
  "#416864",
  "#6aa3b4",
  "#3f8880",
  "#0c181c",
  "#1d3d33",
  "#5c5e36",
  "#394651",
  "#4fa8fb",
  "#525558",
  "#ffa43a",
  "#b38471",
  "#000020",
  "#2f2c79",
  "#171a4a"
];

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
};

/* Todo lo que varía en su estado */
function App() {
  const [quote, setQuote] = useState(getRandom(db));

  const [color, setcolor] = useState(getRandom(arrayColors));

  const newQuote = () => {
    setQuote(getRandom(db));
    setcolor(getRandom(arrayColors));
  };

  console.log(getRandom(db));
  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox 
      quote={quote} 
      newQuote={newQuote} 
      color={color} 
      />
    </div>
  );
}

export default App;
