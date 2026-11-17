const container = document.getElementById("array-container");
const btn_map = document.getElementById("btn-map");
const btn_filter = document.getElementById("btn-filter");
const btn_find = document.getElementById("btn-find");
const btn_reset = document.getElementById("btn-reset");
const statusOperacao = document.getElementById("status-operacao");
const cardExplicacao = document.getElementById("card-explicacao");
const explicacaoTitulo = document.getElementById("explicacao-titulo");
const explicacaoOQueFaz = document.getElementById("explicacao-o-que-faz");
const explicacaoRetorno = document.getElementById("explicacao-retorno");

const explicacoes = {
    map: {
        titulo: ".map()",
        oQueFaz: "Percorre todo o array original e transforma cada item aplicando uma regra.",
        retorno: "Um novo array com exatamente o mesmo tamanho do original."
    },
    filter: {
        titulo: ".filter()",
        oQueFaz: "Testa cada item com uma condição (true ou false) e mantém apenas os aprovados.",
        retorno: "Um novo array apenas com os itens que passaram no teste (pode vir vazio)."
    },
    find: {
        titulo: ".find()",
        oQueFaz: "Procura o primeiro item que satisfaz a condição e para a busca imediatamente.",
        retorno: "Apenas o primeiro valor encontrado (ou undefined, se não achar ninguém)."
    }
};

const numeros = [10, 20, 30, 40];
console.log("Meu array inicial é:", numeros);

const mostrarExplicacao = (metodo) => {
    const info = explicacoes[metodo];

    explicacaoTitulo.textContent = info.titulo;
    explicacaoOQueFaz.textContent = info.oQueFaz;
    explicacaoRetorno.textContent = info.retorno;
    explicacoes.hidden = false;
}

const renderizarDados = (novo) => {
    container.innerHTML = ""
    novo.forEach((numero) => {
    const elemento = document.createElement("div");
    elemento.classList.add("item")
    elemento.textContent = numero;
    container.appendChild(elemento);
});
}
renderizarDados(numeros);

const atualizarEstado = (lista, emModoOriginal, descricao = "numeros (original)") => {
   renderizarDados(lista);
   statusOperacao.textContent = descricao;
   btn_map.hidden = !emModoOriginal
   btn_filter.hidden = !emModoOriginal
   btn_find.hidden = !emModoOriginal
   btn_reset.hidden = emModoOriginal
   cardExplicacao.hidden = emModoOriginal;
}

btn_map.addEventListener("click", () => {
    const numerosDobrados = numeros.map(numero => numero * 2);
    atualizarEstado(numerosDobrados, false, "numeros.map(numero => numero * 2)")
    mostrarExplicacao("map");
});
btn_filter.addEventListener("click", () => {
    const maioresQueVinte = numeros.filter(numero => numero > 20);
    atualizarEstado(maioresQueVinte, false, "numeros.filter(numero => numero > 20");
    mostrarExplicacao("filter");
})
btn_find.addEventListener("click", () => {
    const encontrado = numeros.find(numero => numero > 25);
    atualizarEstado([encontrado], false, "numeros.find(numero => numero > 25)")
    mostrarExplicacao("find");
})
btn_reset.addEventListener("click", () => {
    atualizarEstado(numeros, true)
})
