const input = document.getElementById("texto");
const cresultado = document.getElementById("resultado");

input.addEventListener("input", () => {
    resultado.textContent = input.value.length;
});

