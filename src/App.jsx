import React from 'react'

const App = () => {
  return (
    <>
    <div className=''>App</div>
    <Person></Person>
    <Device name="laptop" price="55"></Device>
    <Device name="moblie" price="20"></Device>
    </>
  )
}

function Person() {
  const age = 18;
  const money = 188;
  const person = {name:"Sami", age:12}

  return <h3>I am {person.name} with age:{age+money}</h3>
}

function Device(props){
  console.log(props);
  return <h2>This Device: {props.name} price:{props.price}</h2>
}

export default App