export function inputNum(e, num, setNum, setApagar, setLimpar) {
    if (num == "0") {
        setApagar(true);
        setLimpar(false);
        setNum(num = e.target.value);
    } else {
        setApagar(true);
        setLimpar(false);
        setNum(num = (num + e.target.value));
    }
}

export function Apagar(num, setNum, setNumAnt, setApagar, setLimpar) {
    if (num == "0") {

    } else if ((num.slice(0, -1)) == "") {
        setNum("0");
        setNumAnt("");
        setApagar(false);
        setLimpar(true);
    } else {
        setNum(num.slice(0, -1))
        setNumAnt("");
    }
}

export function clearNum(setNum, setNumAnt, num) {
    setNum("0");
    setNumAnt("");
}

export function porgentagem(num, setNum, setApagar, setLimpar) {
    setNum(num = num / 100);
    setNum(num = num.toString());
    setApagar(false);
    setLimpar(true);
}

export function inverterOperador(num, setNum) {
    if (num > 0) {
        setNum("-" + num);
    } else {
        setNum(num = -(num));
        setNum(num.toString());
    }
}

export function calcular(num, setNum, setNumAnt, numAnt, apagar, setApagar, limpar, setLimpar) {

    if (['+', '-', '*', '/', '.'].includes(num.trim().slice(-1))) {
        window.alert('Formato usado inváido!')
    } else  {
        setNumAnt(num);
        setNum(num = eval(num));
        setNum(num = num.toString());
        setApagar(false);
        setLimpar(true);
    }

}

export function adicao(num, setNum, setApagar, setLimpar) {
    if (['+', '-', '*', '/', '.'].includes(num.trim().slice(-1))) {
        setNum(num.slice(0, -1) + "+");
        setApagar(true);
        setLimpar(false);
    } else {
        setNum(num + "+");
        setApagar(true);
        setLimpar(false);
    }
}

export function subtracao(num, setNum, setApagar, setLimpar) {
    if (['+', '-', '*', '/', '.'].includes(num.trim().slice(-1))) {
        setNum(num.slice(0, -1) + "-");
        setApagar(true);
        setLimpar(false);
    } else {
        setNum(num + "-");
        setApagar(true);
        setLimpar(false);
    }
}

export function multiplicacao(num, setNum, setApagar, setLimpar) {
    if (['+', '-', '*', '/', '.'].includes(num.trim().slice(-1))) {
        setNum(num.slice(0, -1) + "*");
        setApagar(true);
        setLimpar(false);
    } else {
        setNum(num + "*");
        setApagar(true);
        setLimpar(false);
    }
}

export function divisao(num, setNum, setApagar, setLimpar) {
    if (['+', '-', '*', '/', '.'].includes(num.trim().slice(-1))) {
        setNum(num.slice(0, -1) + "/");
        setApagar(true);
        setLimpar(false);
    } else {
        setNum(num + "/");
        setApagar(true);
        setLimpar(false);
    }
}

export function virgula(num, setNum, setApagar, setLimpar) {
    if (['+', '-', '*', '/', '.'].includes(num.trim().slice(-1))) {
        setNum(num = num + "0.");
        setApagar(true);
        setLimpar(false);
    } else {
        setNum(num + ".");
        setApagar(true);
        setLimpar(false);
    }
}
