import React from 'react'
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Signer';

const App = () => {

  const actors = ['Sakib', 'Raj', 'Ratul', 'Elius']
  const singers = [
    {name: "Dr. Mahafuzur Rahman", age: 68},
    {name: 'Eva Rahman', age: 38},
    {name: 'Shuvro Dev', age: 58},
    {name: 'Pritom', age:28}
  ]



  return (
    <>
    <div className=''>App</div>

    {
      singers.map(singer => <Singer></Singer>)
    }




    <Actor name={"sami"}></Actor>
    {
      actors.map(actor => <Actor name={actor}></Actor>)
    }


    {/* <Todo task="learn React" isDone={true}></Todo>
    <Todo task="Core Concepts" isDone={false}></Todo>
    <Todo task="Try Jsx" isDone={true}></Todo> */}
    {/* <Person></Person> */}
    {/* <Device name="laptop" price="55"></Device>
    <Device name="moblie" price="20"></Device>
    <Student grade="7" score="99"></Student>
    <Student grade="8" score="67"></Student> */}
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


function Student({grade, score}){
  console.log(grade, score);
  return(
    <div>
      <h3>This is student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}



export default App