import React from "react";

const GenericHeader = (props) => {
  return (
    <header
      className="text-center"
      style={{
        backgroundColor: "grey",
        color: "white",
        fontFamily: "Times New Roman",
      }}
    >
      <h1 style={{ fontSize: "75px", margin: "0" }}>The Generics</h1>
    </header>
  );
};

export default GenericHeader;
