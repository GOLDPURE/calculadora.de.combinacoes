function calcularCombinacoes() {
    const n = parseInt(document.getElementById('n').value);
    const p = parseInt(document.getElementById('p').value);
    const resultadoElemento = document.getElementById('resultado');

    if (isNaN(n) || isNaN(p) || n < 0 || p < 0 || n < p) {
        resultadoElemento.innerText = 'Por favor, insira valores válidos para n e p.';
        return;
    }

    const resultado = combinacao(n, p);
    resultadoElemento.innerText = `Resultado: ${resultado}`;
}

function combinacao(n, p) {
    return fatorial(n) / (fatorial(p) * fatorial(n - p));
}

function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}
