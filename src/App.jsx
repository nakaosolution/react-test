import React from "react";

const App = () => {
  const onClickButton = () => alert("hey");
  const contentStyle = {
    color: "blue",
    fontsize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>HELLOWORLD</h1>
      <p style={contentStyle}>how are you?</p>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
