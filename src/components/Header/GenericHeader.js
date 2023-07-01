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
      <h1 className="mx-auto p-4" style={{ fontSize: "75px" }}>
        The Generics
      </h1>
    </header>
  );
};

export default GenericHeader;
