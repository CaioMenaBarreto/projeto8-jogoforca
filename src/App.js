import React, { useState } from "react";
import Letras from "./Letras";
import Jogo from "./Jogo";
import palavras from "./palavras";
import forca0 from "./assets/img/forca0.png";
import forca1 from "./assets/img/forca1.png";
import forca2 from "./assets/img/forca2.png";
import forca3 from "./assets/img/forca3.png";
import forca4 from "./assets/img/forca4.png";
import forca5 from "./assets/img/forca5.png";
import forca6 from "./assets/img/forca6.png";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const imgs = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function App() {

  const [letras, setLetras] = useState(alfabeto);
  const [letrasDesabilitadas, setLetrasDesabilitadas]=useState([]);
  const [imagemAtual, setImagemAtual]=useState(imgs[0]);
  const [desabilitarLetra, setDesabilitarLetra] = useState(true);
  const [palavra, setPalavra] = useState("");
  const [palavraEscondida, setPalavraEscondida] = useState("");
  const [indice, setIndice] = useState();
  const [erros, setErros] = useState(0);
  const [color, setColor] = useState("");


  function escolherPalavra() {
    setErros(0);
    setLetrasDesabilitadas([]);
    let palavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(palavra);
    setDesabilitarLetra(false);
    esconderPalavra(palavra);
    setImagemAtual(imgs[0]);
    setColor("");
  }

  function esconderPalavra(palavra) {
    setPalavraEscondida(
      palavra
        .split("")
        .map((letra) => (letra.match(/[a-zA-Z]/) ? "_" : letra))
        .join(" ")
    );
  }
  function verificaLetra(letra) {
    const palavraEscondidaArray = palavraEscondida.split(" ");
    if (palavra.includes(letra)) {
      const palavraArray = palavra.split("");
      for (let i = 0; i < palavraArray.length; i++) {
        if (palavraArray[i] === letra) {
          palavraEscondidaArray[i] = letra;
        }
      }
      setPalavraEscondida(palavraEscondidaArray.join(" "));
    } else {
      let novosErros = erros + 1;
      if (novosErros === 6) {
        setDesabilitarLetra(true);
        console.log("Você perdeu");
        setImagemAtual(imgs[novosErros]);
        setColor("red");
        setPalavraEscondida(palavra);
      } else {
        setErros(novosErros);
        setImagemAtual(imgs[novosErros]);
      }
    }
    if(palavraEscondidaArray.join("")===palavra){
      setDesabilitarLetra(true);
      setColor("green");
    }
  }
  
  

  return (
    <div>
      <Jogo
        palavra={palavra}
        setPalavra={setPalavra}
        indice={indice}
        setIndice={setIndice}
        escolherPalavra={escolherPalavra}
        palavraEscondida={palavraEscondida}
        esconderPalavra={esconderPalavra}
        setPalavraEscondida={setPalavraEscondida}
        imagemAtual={imagemAtual}
        setImagemAtual={setImagemAtual}
        color={color}
      />
      <Letras
        letras={letras}
        setLetras={setLetras}
        desabilitarLetra={desabilitarLetra}
        setDesabilitarLetra={setDesabilitarLetra}
        erros={erros}
        setErros={setErros}
        verificaLetra={verificaLetra}
        letrasDesabilitadas={letrasDesabilitadas}
        setLetrasDesabilitadas={setLetrasDesabilitadas}
      />
    </div>
  );
}
