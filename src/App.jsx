import React from 'react'

const App = () => {

  function handleClick(){
    alert('button click')
  }

  return (
    <>
      <h1>amr nam Sami ami try korsi joto tartari pari react sikar</h1>
      <button onClick={handleClick} className='bg-orange-600 text-black px-4 py-2 rounded-lg hover:opacity-90 active:opacity-70'>click me</button>
    </>
  )
}




export default App