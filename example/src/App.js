import React , {Component} from 'react'

import { ExampleComponent } from 'ui-library'
import {Button} from 'ui-library'
import {Input} from 'ui-library';
import 'ui-library/dist/index.css'

class App extends Component{

  render(){
    return(
      <div className="parent">

        <ExampleComponent text="Create React Library Example 😄" />
        <Button>Mi primer botón</Button>
        <Input placeholder = "Enter Text" type = "text" color = "primary" ></Input>


      </div>

    );
  }


}


export default App
