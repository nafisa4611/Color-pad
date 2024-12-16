import React from "react";

export default function Button({ color, toggle, toggleButton }) {
  return (
    <button
      onClick={toggleButton}
      style={{
        backgroundColor: color,
        opacity: toggle === "on" ? 1 : 0.5, // Change opacity based on toggle state
        color: "#333",
        border: "1px solid #ddd",
        padding: "20px 40px",
        cursor: "pointer",
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s, opacity 0.2s", // Smooth transition for opacity
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.05)";
        e.target.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
    >
    </button>
  );
}
