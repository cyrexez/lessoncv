import React from 'react';
import './App.css';
import {Home} from './component/Initials';
import {Details} from './component/details';
import {Submit} from './component/submit';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
<Home/>
<Details/>
<Submit/>
<Button className="mx-2" variant="primary">Submit</Button>

  
    </div>
  );
}

export default App;
