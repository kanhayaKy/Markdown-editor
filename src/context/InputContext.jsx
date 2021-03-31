import React, { createContext, useEffect, useState } from "react";

export const InputContext = createContext();

export const InputProvider = (props) => {
  const [text, setText] = useState();

  useEffect(() => {
    const storedText = localStorage.getItem('text') || "# Welcome to the markdown editor";
    setText(storedText);
  },[]);
  return (
    <InputContext.Provider value={[text, setText]}>
      {props.children}
    </InputContext.Provider>
  );
};
