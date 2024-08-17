import React from 'react'
import { useState } from 'react'

function Form() {
const [name, setName] = useState("");
const [email,setEmail] = useState("");
const [text,setText] = useState("");

const OnSubmit =(event)=>{
event.preventDefault();
console.log(text,name,email);

    setName("");
    setEmail("");
    setText("");

}


  return (
    <div className='flex'>

<form onSubmit={OnSubmit} className="flex flex-col mt-4">
  <div className="relative mt-6">
    <label 
      htmlFor="name" 
      className="absolute left-4 bg-white px-2" 
      style={{ marginTop: "-17px" }}
    >
      Name
    </label>
    <input 
      type="text" 
      name="name" 
      className="border-black border-2 pl-4" 
      style={{ width: "24rem" }} 
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>

    <div className="relative mt-6">
  <label htmlFor="email" className="absolute left-4 bg-white px-2 " 
      style={{ marginTop: "-17px" }} >Email</label>
  <input 
    type="email" 
    name="email" 
    className="border-black border-2 pl-4" 
    style={{ width: "24rem" }} 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  </div>

    <div className="relative mt-6">
  <label htmlFor="feedback" className="absolute left-4 bg-white px-2 "
  style={{ marginTop: "-17px" }} >Text</label>
  <input 
    type="text" 
    name="feedback" 
    className="border-black border-2 pl-4" 
    style={{ width: "24rem", height: "7rem" }} 
    value={text}
    onChange={(e) => setText(e.target.value)}

  />
  </div>

  <button 
    type="submit" 
    className="bg-black text-white px-4 py-2 mt-6 rounded-md ml-48"
    style={{width:"12rem"}}
  >
    Submit
  </button>
</form>

    </div>
  )
}

export default Form