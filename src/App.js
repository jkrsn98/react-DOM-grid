import React, {Component} from 'react';
import './App.css';
import Table from './components/Table'

export default class App extends Component{
  render(){
    return(
      <>
        <h1 className="heading">create a grid!</h1>
       <center> <Table /> </center>
      </>
    )
  }
}