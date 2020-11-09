let form = document.getElementById("formulario")
let lista = document.getElementById("lista-tweets")

form.addEventListener("submit", cargarTweet)
lista.addEventListener("click", borrar)
let agregar = []


function cargarTweet() {
    let campoTexto = document.querySelector("#tweet").value
    let li = document.createElement("li")
    let p = document.createElement("p")
    let btnBorrar = document.createElement("button")
    let btnActualizar = document.createElement("button")
    btnBorrar.classList = "borrar-tweet"
    btnActualizar.classList = "actualizar-datos"

    btnBorrar.innerText = "X"
    btnBorrar.id = "borrar-tweet"

    lista.appendChild(li)
    li.appendChild(p)
    li.appendChild(btnBorrar)
    let carga = p.innerText += campoTexto;


    convertir(carga);
}

function cargarLocalStorage(agregar) {
    let local = localStorage.setItem('Tweets', JSON.stringify(agregar));
}

function convertir(carga) {

    if (carga) {
        agregar.push(carga)
    }
    cargarLocalStorage(agregar);
}

function agregarLocal() {

    mostrar = localStorage.getItem("Tweets");
    let ver = JSON.parse(mostrar)
    console.log(ver);

    ver.forEach(function(mirar) {

        let li = document.createElement("li");
        let p = document.createElement("p")
        let btnBorrar = document.createElement("button")
        btnBorrar.classList = "borrar-tweet"

        btnBorrar.innerText = "X"
        btnBorrar.id = "borrar-tweet"

        lista.appendChild(li)
        li.appendChild(p)
        li.appendChild(btnBorrar)

        p.innerText = mirar

        console.log(mirar)
    });
}
agregarLocal();

function borrar(e) {
    let carga;
    if (e.target.classList.contains("borrar-tweet")) {
        e.target.parentElement.remove();
        carga = e.target.parentElement.innerText
            //console.log(carga)
    }
    borrarLocalStorage(carga);
}

function borrarLocalStorage(carga) {
    mostrar = localStorage.getItem("Tweets");
    let ver = JSON.parse(mostrar)
        //console.log(ver);
    let numero = carga.substring(0, carga.length - 1);
    console.log(numero)
    ver.forEach(function(mirar, index) {
        console.log(index)

        if (numero === mirar) {
            ver.splice(index, 1)
        }
    })
    console.log(ver)
    localStorage.setItem("Tweets", JSON.stringify(ver))

}