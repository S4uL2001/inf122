import './App.css';
import Boton from './componentes/Boton1';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks + 1);
    console.log("click");
  }

  const reiniciarClicks = () => {
    setNumClicks(0);
    console.log("reiniciar clicks");
  }

  const [contador, setContador] = useState(0);

  const sumarUno = () => {
    setContador(contador + 1);
  };

  const restarUno = () => {
    setContador(contador - 1);
  };

  const sumarTres = () => {
    setContador(contador + 3);
  };

  const restarTres = () => {
    setContador(contador - 3);
  };

  const reiniciarContador = () => {
    setContador(0);
  };

  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador contador={contador} />
        <div className='contendedor-botones'>
          <Boton texto="Click" esBotonClick={true} funcionClick={click} />
          <Boton texto="Reiniciar Clicks" esBotonClick={false} funcionClick={reiniciarClicks} />
        </div>
      </div>
      <div className='contenedor-principal'>
        <Contador nroClicks={nroClicks} />
        <div className='c'>
          <Boton texto="+1" esBotonClick={true} funcionClick={sumarUno} />
          <Boton texto="-1" esBotonClick={true} funcionClick={restarUno} />
          <Boton texto="+3" esBotonClick={true} funcionClick={sumarTres} />
          <Boton texto="-3" esBotonClick={true} funcionClick={restarTres} />
        </div>
        <Boton texto="Reiniciar Contador" esBotonClick={false} funcionClick={reiniciarContador} />
        <Boton texto="Reiniciar Clicks" esBotonClick={false} funcionClick={reiniciarClicks} />
      </div>
    </div>
  );
}

export default App;
