import React from "react";

export default function Button({ onClick, children }) {
  return (
    <button 
      onClick={onClick}
      style={{
        margin: "5px",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#4CAF50",
        color: "white",
        cursor: "pointer",
        fontSize: "16px"
      }}
    >
      {children}
    </button>
  );
}
