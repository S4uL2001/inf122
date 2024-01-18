import "./styles.css";
import { useState } from "react";

export default function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <div className="caja">
        <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
        {show ? <h1>Desaparese el texto</h1> : null}
      </div>
    </div>
  );
}
