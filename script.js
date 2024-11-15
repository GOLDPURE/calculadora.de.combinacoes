// Função para calcular o fatorial de um número
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Função para calcular a combinação
function calcularCombinacao() {
    const n = parseInt(document.getElementById('n').value);
    const p = parseInt(document.getElementById('p').value);

    if (isNaN(n) || isNaN(p) || n < 0 || p < 0 || p > n) {
        alert("Por favor, insira valores válidos para n e p.");
        return;
    }

    // Calculando a combinação usando a fórmula C(n, p) = n! / (p!(n-p)!)
    const combinacao = fatorial(n) / (fatorial(p) * fatorial(n - p));

    // Exibindo o resultado
    document.getElementById('resultado').textContent = combinacao;
}
