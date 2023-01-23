import React from "react";
import QuoteButton from "./QuoteButton";

const QuoteBox = ({ quote, newQuote, color }) => {
  return (
    <div>
        <h1 className="titlePro">PROJECT 1</h1>
    <div className="quoteBox" style={{color: color}}>
      <p className="quotebox__quote">{quote.quote}</p>
      <h3 className="quoteBox__author">{quote.author}</h3>
      <i className="quoteBox__icon bx bxs-quote-left"></i>
      <QuoteButton color={color} newQuote={newQuote} />
    </div>
    </div>
  );
};

export default QuoteBox;
