const ingresoTexto = document.getElementById("ingresoTexto");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const tituloMensaje = document.getElementById("tituloMensaje");
const muneco = document.getElementById("Muneco");
const mensajeInformacion = document.getElementById("mensajeInformacion");
const textoEncriptado = document.getElementById("textoEncriptado") ;

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const subtituir = (nuevoValor) => {
    tituloMensaje.innerText = nuevoValor;
    muneco.style.display = "none";
    ingresoTexto.value = "";
    mensajeInformacion.style.display = "none";
    btnCopiar.style.display = "block";
    textoEncriptado.classList.add("ajuste");
    tituloMensaje.classList.add("ajuste");
}

const suprimir = () =>{
    tituloMensaje.innerText = "";
    muneco.style.display = "block";
    mensajeInformacion.style.display = "block";
    btnCopiar.style.display = "none";
    textoEncriptado.classList.remove("ajuste");
    tituloMensaje.classList.remove("ajuste");
    ingresoTexto.focus();
}

btnEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != "") {
        function encriptar(newText) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newText.includes(remplazar[i][0])) {
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1])
                };
            };
            return newText;
        };
    } else {
        alert("Ingrese el texto a encriptar");
        suprimir();
    }
    subtituir(encriptar(texto));
})

btnDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != "") {
        function desencriptar(newText) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newText.includes(remplazar[i][1])) {
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0])
                };
            };
            return newText
        };
    }else{
        alert("Ingrese el texto a desencriptar");
        suprimir();
    }
    subtituir(desencriptar(texto));

})

btnCopiar.addEventListener("click", () => {
    let texto = tituloMensaje;
    texto.select();
    document.execCommand('copi');
    alert("Texto Copiado")
    suprimir();
    
})