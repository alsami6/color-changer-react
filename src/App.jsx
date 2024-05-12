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

function App(){
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}


export default App