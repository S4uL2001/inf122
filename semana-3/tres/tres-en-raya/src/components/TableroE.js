import React from 'react';
import '../style/Tablero.css';
import CuadroB from './CuadroB';

function TableroE({ cuadros, onClick, lineasGanadoras }) {
    function renderizarCuadro(i) {
        const resaltar = lineasGanadoras && lineasGanadoras.includes(i);

        return (
            <CuadroB valor={cuadros[i]} funcion={() => onClick(i)} resaltar={resaltar}/>
        );
    }

    return (
        <div>
            <div className="tablero">
                {renderizarCuadro(0)}
                {renderizarCuadro(1)}
                {renderizarCuadro(2)}
                {renderizarCuadro(3)}
                {renderizarCuadro(4)}
                {renderizarCuadro(5)}
                {renderizarCuadro(6)}
                {renderizarCuadro(7)}
                {renderizarCuadro(8)}
            </div>
        </div>
    );
}

export default TableroE;
