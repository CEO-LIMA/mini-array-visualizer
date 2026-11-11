const container = document.getElementById("array-container");
const btn_map = document.getElementById("btn-map");

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

btn_map.addEventListener("click", () => {
    const novo = numeros.map(numero => numero * 2);
    renderizarDados(novo);
});
