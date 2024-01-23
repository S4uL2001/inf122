import React from 'react';
import '../style/Historial.css'
function Historial({ historial, saltarA }) {
    const movimientos = historial.map((paso, movimiento) => {
        const descripcion = movimiento ?
            `Ir al movimiento #${movimiento}` :
            'Ir al inicio del juego';
        return (
            <li key={movimiento}>
                <button onClick={() => saltarA(movimiento)}>{descripcion}</button>
                <span>{descripcion}</span>
            </li>
        );
    });

    return (
        <React.Fragment>
            <div className="informacion-juego">
                <p>Historial de movimientos:</p>
                <ol>{movimientos}</ol>
            </div>
        </React.Fragment>
    );
}

export default Historial;
