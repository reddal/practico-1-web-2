document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let resultado = document.getElementById("resultado");
    let operacion = new URLSearchParams(new FormData(this));
    fetch('php/calcular.php', {
        method: 'POST',
        body: operacion
    }).then(function (response) {
        response.text().then(function (numeroResultado) {
            resultado.innerHTML = numeroResultado;
        })
    })
});