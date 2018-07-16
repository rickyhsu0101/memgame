import React, { Component } from 'react';
import imageData from './utils/imageData.js';
import Card from './components/Card.js';
class App extends Component {
  state = {
    score: 0,
    imageLinks: imageData.get()
  };
  click = (event) =>{
    console.log(event.target);
    let url = event.target.src;
    if(imageData.clicked(url)){
      imageData.reset();
      imageData.shuffle();
      this.setState({score: 0});
      this.setState({imageLinks: imageData.get()});
    }else{
      imageData.set(url);
      if(imageData.checkFinish()){
        imageData.reset();
        imageData.shuffle();
        this.setState({score: 0});
        this.setState({imageLinks: imageData.get()});
      }else{
        this.setState({score: this.state.score + 1});
        imageData.shuffle();
        
        this.setState({imageLinks: imageData.get()});
      }
    }
  }
  render() {
    return(
      <div className = "container">
        <h1>Score: <span>{this.state.score}</span></h1>
        <div className = "row">
          {this.state.imageLinks.map(data => (
            <div className = "col-4">
              <Card url = {data.imageLink} clickCard = {this.click}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
