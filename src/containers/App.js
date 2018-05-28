import React, { Component } from 'react';
import './App.css';
import QuoteBlock from '../components/QuoteBlock';


class App extends Component {

  constructor() {
    super();
    this.state = {
      author: '',
      quote: ''
    }
  }

  getQuote = () => {
    const url  = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    
      fetch(url, {
        headers: {
          'Access-Control-Allow-Origin':'*'
          },
        mode: 'cors'
      })
      .then(response => response.json())
      .then(randomQuote => this.setState({quote: randomQuote.quoteText, 
        author: randomQuote.quoteAuthor}))
      .catch(() => this.getQuote());
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    const {quote, author} = this.state;
    return (
      <div className="App">
        <section>
          <h1 className="title">Random Quote Machine</h1>

          <div className="qBlock">
            <QuoteBlock 
              quote = {quote}
              author = {author}
              onClickNewQuote = {this.getQuote}
              onClickTweetIt = {this.onClickTweetIt}
            />
          </div>
        </section>
        
        
      </div>
    );
  }
}

export default App;
