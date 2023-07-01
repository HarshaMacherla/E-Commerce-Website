import React from "react";
import "bootstrap/dist/css/bootstrap.css";

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
      <h1 className="mx-auto" style={{ fontSize: "75px" }}>
        The Generics
      </h1>
    </header>
  );
};

export default GenericHeader;
