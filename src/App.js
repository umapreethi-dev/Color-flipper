import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import ColorGenerate from './ColorGenerate.js'

class App extends React.Component {
   constructor(){
     super()
     let backgroundColor = document.body.style.backgroundColor;
     console.log(backgroundColor);
     this.state = {
         backgroundColor: "#eee" 
     }
     this.handleClick = this.handleClick.bind(this)
   }
handleClick(){
 let color = this.randomColor();
 //document.body.style.backgroundColor = color;
   this.setState(prevState => {
    return {
      backgroundColor: color
    }
  }
  )
  //console.log(backgroundColor);
}
randomColor(){
  let randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  return randomColor;
}
render(){
  return (
    <div className="body" style={{backgroundColor: this.state.backgroundColor}}>
      <ColorGenerate 
      randomColor = {this.randomColor}
      handleClick = {this.handleClick}
      bgColor = {this.state.backgroundColor}
      />
      
    </div>
  );
}
}

export default App;
