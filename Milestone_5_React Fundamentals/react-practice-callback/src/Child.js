import React from "react";

const Child = ({ onClick }) => {
  console.log("Child rendered");

  return (
    <div>
      <button onClick={onClick}>Click from Child</button>
    </div>
  );
};

export default React.memo(Child);