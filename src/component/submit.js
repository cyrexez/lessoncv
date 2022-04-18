import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
export class Submit extends Component{
render(){
    return(
      <form>
      <label>Company Name:</label>
        <input type="text"></input><br></br>
        <label>Position Title:</label>
        <input type="text"></input><br></br>
        <label>Task of Job:</label>
        <textarea type="text"></textarea><br></br>
        <label>Duration of Job:</label>
        <input type="text"></input><br></br>
        </form>
    )
  }

}
