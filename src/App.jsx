import {useState} from 'react'
function Counter () {
  const [count, setCount] = useState(10);
  
  function addOne(){
    setCount(count+1); 
  }
  
  return (
    <>
      <button onClick={addOne} className='text-xl bg-blue-100 m-10 p-2 rounded-md'>Click={count}</button>
    </>
  )
}

function NameList(){
  const [list , listCount] = useState(["Sami" , "Ratul" , "Anas" , "Elius"])
  const [name , setName] = useState("");

  const onAddName = () => {
    list.push(name)
    listCount([...list, name])
  }

  return(
    <div className='m-10 p-2'>
      <ul>
          {list.map((name) => ( <li key={name}> {name} </li> ))}
      </ul>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={onAddName} >Add Name</button>
    </div>
  )

}


function App(){
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />

      <NameList />

    </div>
  );
}


export default App