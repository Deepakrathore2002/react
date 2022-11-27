import React from "react";

function App() {
  var name = "deepak";
  var date = new Date(2022, 11, 26, 16);
  const currtime = date.getHours();

  const customstyle = {
    color: " "
  };
  let greeting;
  if (currtime < 12) {
    greeting = "morning";
    customstyle.color = "red";
  } else if (currtime > 12 && currtime < 18) {
    greeting = "afternoon";
    customstyle.color = "green";
  } else {
    greeting = "Night";
    customstyle.color = "blue";
  }

  return (
    <h1 style={customstyle}>
      Good {greeting} {name}
    </h1>
  );
}
export default App;
