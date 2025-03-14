import React, { useState } from 'react';

import { useEffect } from 'react';
import { addClickAnimation } from '../animations/animations.js';

import './Calculator.css';
import divide from "../Images/divide.png"; 
import back from "../Images/back-button.png"; 
import {inputNum, Apagar, clearNum, porgentagem, inverterOperador, calcular, adicao, subtracao, multiplicacao, divisao, virgula} from '../functions/functions.jsx';

<link href="/your-path-to-uicons/css/uicons-rounded-regular.css" rel="stylesheet"/>


export default function Calculator() {
    
    const [num, setNum] = useState("0");
    const [numAnt, setNumAnt] = useState("");
    const [apagar, setApagar] = useState(false);
    const [limpar, setLimpar] = useState(true);
    


    useEffect(() => {
        addClickAnimation(".button-gray");
    }, []);

    useEffect(() => {
        addClickAnimation(".button-zero");
    }, []);
    
    useEffect(() => {
        addClickAnimation(".button-orange");
    }, []);

    return (
        
        <div className='container'>
            <div id='block' className='block'>                
                <h1 className='resultAnt'>{numAnt}</h1>
                <h1 className='result'>{num}</h1>

                <button hidden={apagar} className='button-white' onClick={() => clearNum(setNum, setNumAnt)}>AC</button>
                <button hidden={limpar} className='back-button' onClick={() => Apagar(num, setNum, setNumAnt, setApagar, setLimpar)}>'<img className='img-back-button' src={back} /></button>

                <button className='button-white' onClick={() => inverterOperador(num, setNum, setApagar, setLimpar)}>+/-</button>
                <button className='button-white' onClick={() => porgentagem(num, setNum, setApagar,setLimpar)}>%</button>
                <button className='button-orange' onClick={() => divisao(num, setNum,setApagar, setLimpar)}><img className='divisao' src={divide} /></button>

                <button className='button-gray' onClick={(e) => inputNum(e, num, setNum, setApagar, setLimpar)} id='7' value={7}>7</button>
                <button className='button-gray' onClick={(e) => inputNum(e, num, setNum, setApagar, setLimpar)} value={8}>8</button>
                <button className='button-gray' onClick={(e) => inputNum(e, num, setNum, setApagar, setLimpar)} value={9}>9</button>
                <button className='button-orange' onClick={() => multiplicacao(num, setNum, setApagar, setLimpar)}>X</button>

                <button className='button-gray' onClick={(e) => inputNum(e, num, setNum, setApagar, setLimpar)} value={4}>4</button>
                <button className='button-gray' onClick={(e) => inputNum(e, num, setNum, setApagar, setLimpar)} value={5}>5</button>
                <button className='button-gray' onClick={(e) => inputNum(e, num, setNum, setApagar, setLimpar)} value={6}>6</button>
                <button className='button-orange' onClick={() => subtracao(num, setNum, setApagar, setLimpar)}>-</button>

                <button className='button-gray' onClick={(e) => inputNum(e, num, setNum, setApagar, setLimpar)} value={1}>1</button>
                <button className='button-gray' onClick={(e) => inputNum(e, num, setNum, setApagar, setLimpar)} value={2}>2</button>
                <button className='button-gray' onClick={(e) => inputNum(e, num, setNum, setApagar, setLimpar)} value={3}>3</button>
                <button className='button-orange' onClick={() => adicao(num, setNum, setApagar, setLimpar)}>+</button>

                <button className='button-zero' onClick={(e) => inputNum(e, num, setNum, setApagar, setLimpar)} value={0}>0</button>
                <button className='button-gray' onClick={(e) => virgula(num, setNum, setApagar, setLimpar)}>,</button>
                <button className='button-orange' onClick={() =>calcular(num, setNum, setNumAnt, numAnt, apagar, setApagar, limpar, setLimpar)}>=</button>
            </div>
        </div>
    )
}
