import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
export class Details extends Component{
render(){
    return(
      <form>
      <label>Course:</label>
        <input type="text"></input><br></br>
        <label>Title of Study:</label>
        <input type="text"></input><br></br>
        <label>Date of Study:</label>
        <input type="text"></input><br></br>
        </form>
    )
  }

}
