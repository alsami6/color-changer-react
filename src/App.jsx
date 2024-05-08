import React from "react";

const App = () => {
  const name = "sami";
  const x = 10;
  const y = 20;
  const names = ["Sami", "Ratul", "Mir"];
  
  return (
    <>
      <div className="text-2xl">ami sami</div>
      <p>hello {name}</p>
      <p>The sum of {x} and {y} is {x + y} </p>
      <ul>
        { names.map((name ,index) => (
          <li key={index}>{ name }</li>
        ))}
      </ul>
    </>
  );
};

export default App;
