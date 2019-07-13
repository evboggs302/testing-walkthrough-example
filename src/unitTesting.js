import React from "react";

function Johnny() {
  const squared = num => num * num;
  const addString = str => {
    const original = "Hello World";
    return original + str;
  };
  return { squared, addString };
}

export default Johnny;
