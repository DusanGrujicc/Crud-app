import React, {useState} from "react";


function CustomForm({addTask}) {
  const [userInput, setUserInput] = useState(""); //initialize state for input field to empty string

  function handleChange(event) { 
    setUserInput(event.target.value); //update state with user input
  }

  function handleSubmit(event) { 
    event.preventDefault(); 
    addTask(userInput); 
    setUserInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userInput} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default CustomForm;