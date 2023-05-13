export default function Jogo(props) {
    
    console.log(props.palavraEscondida, props.palavra);

    return (
        <div className="conteinerJogo">
        <div className="Jogo">
            <img data-test="game-image" className="forca" src={props.imagemAtual} alt="imagem" />
            <button data-test="choose-word" onClick={props.escolherPalavra} disabled={props.desabilitarBotão} className="botão">Escolher palavra</button>
        </div>
        <p data-test="word" className={`palavraDoJogo ${props.color}`}>{props.palavraEscondida}</p>
        </div>
    );
}