import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
export class Home extends Component{
render(){
    return(
      <form>
      <label>Name:</label>
      <input type="text"/><br></br>
      
      <label>Email:</label>
      <input type="text"></input><br></br>
      <label>Phone number:</label>
      <input type="text"></input><br></br>
      </form>
    )
  }

}
