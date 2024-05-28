import { useState } from 'react'
import './App.css'

function App() {
  let [numLikes, setNumLikes] = useState(0)
  //! State for the name to be displayed on DOM
  let [name, setName] = useState("Sam")
//! need state for the input value
  let [nameInput, setNameInput] = useState("")


  let handleClick = () => {
setNumLikes(numLikes + 1)

  }
 const handleSubmit = () => {
  console.log("handle submit has been activated", nameInput)
  // * Use setter for setName to pass nameInput. 
  setName(nameInput)
  //* after update the name we want to clear the form. 
  setNameInput("")
  
 }

  //! need handler for submit button. 
  //! rendering section where jsx is written. jsx is html like syntax that can be mixed with javascript
  return (
    <div>
     <h1>React Form</h1>
    Hello {name}.
    <br/>
    <button onClick={() => handleClick()}>Like ❤️ {numLikes}</button>
<br></br>
<hr></hr>
<br></br>


<input value={nameInput} onChange={(event)=>setNameInput(event.target.value)}></input>
<button onClick={()=>handleSubmit()}>Submit</button>
<br/>


    </div>
  )
}

export default App
