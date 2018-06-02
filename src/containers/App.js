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
    const url  = 'https://talaikis.com/api/quotes/random/';

      fetch(url)
      .then(response => response.json())
      .then(randomQuote => this.setState({quote: randomQuote.quote, 
        author: randomQuote.author}))
      .catch(err => console.log(err));
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
