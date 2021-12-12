import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert("hey");
  // const contentStyle = {
  //   color: "blue",
  //   fontsize: "18px"
  // };
  return (
    <>
      <h1 style={{ color: "red" }}>HELLOWORLD</h1>
      <ColorfulMessage color="pink">howareyou</ColorfulMessage>
      <ColorfulMessage color="blue" message="HOW ARE YOU" />
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
