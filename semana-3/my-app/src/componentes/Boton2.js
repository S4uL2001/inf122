import '../Estylo/Boton1.css';

function Boton({ texto, esBotonClick, funcionClick }) {

    return (
        <button className={esBotonClick ? "boton-click" : "boton-reinciar"}
            onClick={funcionClick}>
            {texto}
        </button>
    )
}

export default Boton;