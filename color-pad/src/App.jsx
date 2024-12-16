import { useState } from "react";
import Button from "./Components/Button/Button";

function App() {
  const [colorPads, setColorPads] = useState([
    { id: 1, rgb: "rgb(255, 200, 200)", toggle: "on" },
    { id: 2, rgb: "rgb(200, 255, 200)", toggle: "off" },
    { id: 3, rgb: "rgb(200, 200, 255)", toggle: "on" },
    { id: 4, rgb: "rgb(255, 255, 200)", toggle: "off" },
    { id: 5, rgb: "rgb(255, 200, 255)", toggle: "on" },
    { id: 6, rgb: "rgb(200, 255, 255)", toggle: "off" },
    { id: 7, rgb: "rgb(255, 230, 200)", toggle: "off" },
    { id: 8, rgb: "rgb(230, 200, 255)", toggle: "on" },
    { id: 9, rgb: "rgb(200, 230, 230)", toggle: "on" },
    { id: 10, rgb: "rgb(220, 220, 220)", toggle: "off" },
    { id: 11, rgb: "rgb(200, 200, 200)", toggle: "on" },
    { id: 12, rgb: "rgb(255, 220, 230)", toggle: "on" },
    { id: 13, rgb: "rgb(230, 200, 200)", toggle: "off" },
    { id: 14, rgb: "rgb(200, 230, 200)", toggle: "on" },
    { id: 15, rgb: "rgb(200, 200, 230)", toggle: "on" },
    { id: 16, rgb: "rgb(220, 200, 255)", toggle: "off" },
  ]);

  function toggleButton(id) {
    setColorPads((prevPads) =>
      prevPads.map((pad) =>
        pad.id === id
          ? { ...pad, toggle: pad.toggle === "on" ? "off" : "on" }
          : pad
      )
    );
  }

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
          padding: "20px",
        }}
      >
        {colorPads.map((colorPad) => (
          <Button
            key={colorPad.id}
            color={colorPad.rgb}
            toggle={colorPad.toggle}
            toggleButton={() => toggleButton(colorPad.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
