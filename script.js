const container = document.getElementById("array-container");
const btn_map = document.getElementById("btn-map");
const btn_filter = document.getElementById("btn-filter");
const btn_reset = document.getElementById("btn-reset");
const statusOperacao = document.getElementById("status-operacao")

const numeros = [10, 20, 30, 40];
console.log("Meu array inicial é:", numeros);

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
   btn_reset.hidden = emModoOriginal
}

btn_map.addEventListener("click", () => {
    const numerosDobrados = numeros.map(numero => numero * 2);
    atualizarEstado(numerosDobrados, false, "numeros.map(numero => numero * 2)")
});
btn_filter.addEventListener("click", () => {
    const maioresQueVinte = numeros.filter(numero => numero > 20);
    atualizarEstado(maioresQueVinte, false, "numeros.filter(numero => numero > 20");
})
btn_reset.addEventListener("click", () => {
    atualizarEstado(numeros, true)
})
