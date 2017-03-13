import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
   render(){
       return <Title text="123123"/>
   }
}
const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
    text(props, propName, component){
        if(!(propName in props)) {
            return new Error(`missing ${propName}`)
        }
        if(props[propName].length <6){
            return new Error (`${propName} was too short`)
        }
    }
}
export default App;
