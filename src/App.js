import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(){
        super();
        this.state = {currentEvent: '---'}
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({currentEvent: e.type})
    }
   render(){
       return(
           <div>
               <textarea cols="30" rows="10"
               onKeyPress={this.update}
               onKeyDown={this.update}
               onCut={this.update}
               onPaste={this.update}
               onCopy={this.update}
               onFocus={this.update}
               onBlur={this.update}
               onTouchMove={this.update}
               />
               <h1>{this.state.currentEvent}</h1>
           </div>
           )
   }
}
export default App;
