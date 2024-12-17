
import React from "react";
import './../styles/App.css';

const App = () => {
  const[name,setName]=useState("")

  return (
    <div>
        {/* Do not remove the main div */}
     <input type="text" className="form-control w-25 m-3 bg-light " placeholder="name" onChange={(e)=>{setName(e.target.value)}} />
      {name ? <h2>My name is {name}</h2> : "" }
    </div>
  )
}

export default App
