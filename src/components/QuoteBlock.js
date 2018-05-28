import React from 'react';
import './QuoteBlock.css';

const QuoteBlock = ({quote, author, onClickNewQuote, onClickTweetIt}) => {
    const tweet = encodeURIComponent(quote +' --' +author);
    return (
        
        <div className="block">
            <blockquote>
                <p>
                    <i class="fas fa-quote-left"></i>
                    {quote} 
                    <i class="fas fa-quote-right"></i>
                </p>
                <footer >-- {author}</footer>
            </blockquote>
            <div className="btnBlock">
                <button onClick={onClickNewQuote}>New Quote</button>
                <a href={`https://twitter.com/intent/tweet?text=${tweet} target='_blank'`}>
                    <button>
                        Tweet It!
                        <i class="fab fa-twitter"></i>
                    </button>
                </a>
                     
                    
                
            </div>
            
        </div>
    );
}

export default QuoteBlock;