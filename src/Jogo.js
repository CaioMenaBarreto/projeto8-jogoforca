export default function Jogo(props) {
    
    console.log(props.palavraEscondida, props.palavra);

    return (
        <div className="conteinerJogo">
        <div className="Jogo">
            <img className="forca" src={props.imagemAtual} alt="imagem" />
            <button onClick={props.escolherPalavra} disabled={props.desabilitarBotão} className="botão">Escolher palavra</button>
        </div>
        <p className={`palavraDoJogo ${props.color}`}>{props.palavraEscondida}</p>
        </div>
    );
}