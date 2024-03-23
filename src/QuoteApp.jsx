// QuoteApp.js
import React, { useState } from 'react';
import Quote from './components/Quote';
import fetchRandomQuote from './components/FetchRandomQuote';
import './QuoteApp.css';

const QuoteApp = () => {
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });

  const getQuote = async () => {
    const newQuoteData = await fetchRandomQuote();
    setQuoteData({ quote: newQuoteData.quote, author: newQuoteData.author });
  };

  return (
    <div className="quote-card">
      <Quote text={ quoteData.quote } author={ quoteData.author } />
      <button className="quote-button" onClick={ getQuote }>
        Click To Get New Quote
      </button>
    </div>
  );
};

export default QuoteApp;
