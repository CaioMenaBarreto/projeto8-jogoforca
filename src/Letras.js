export default function Alfabeto(props) {
  
    const primeiraLinha = props.letras.slice(0, 13);
    const segundaLinha = props.letras.slice(13, 26);

    console.log(props.desabilitarLetra);
    

    function handleClick(letra) {
        props.verificaLetra(letra);
        props.letrasDesabilitadas.push(letra);
        props.setLetrasDesabilitadas(props.letrasDesabilitadas);
    }

    return (
        <div className="alfabeto">
            <div className="linha">
                {primeiraLinha.map((letra) => (
                    <button onClick={() => handleClick(letra)} disabled={props.desabilitarLetra === true ? true : props.letrasDesabilitadas.includes(letra) ? true : false} className="letra" key={letra}>{letra}</button>
                ))}
            </div>
            <div className="linha">
                {segundaLinha.map((letra) => (
                    <button onClick={() => handleClick(letra)} disabled={props.desabilitarLetra === true ? true : props.letrasDesabilitadas.includes(letra) ? true : false} className="letra" key={letra}>{letra}</button>
                ))}
            </div>
        </div>
    );
}