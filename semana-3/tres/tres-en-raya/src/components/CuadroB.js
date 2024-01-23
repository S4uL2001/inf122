import React from 'react';
import '../style/Cuadro.css';

function CuadroB({ valor, funcion, esGanador }) {
    const clasesCuadro = `cuadro ${esGanador ? 'cuadro-ganador' : ''}`;

    return (
        <button className={clasesCuadro} onClick={funcion}>
            {valor}
        </button>
    );
}

export default CuadroB;

