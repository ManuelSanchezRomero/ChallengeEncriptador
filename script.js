let btnEncriptar = document.querySelector(".btnEncrip");
let btnDesencriptar = document.querySelector(".btnDes");
let imgPlace = document.querySelector(".imgPlace");
let parrafo = document.querySelector(".parrafo");
let resultado = document.querySelector(".resultado");



btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    let cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarAdelante();
    let cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    let cajatexto = document.querySelector(".cajaTexto");
    return cajatexto.value
}

function ocultarAdelante() { 
    imgPlace.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal= "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"; 
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"; 
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"; 
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"; 
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"; 
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
        
    }
    return textoFinal

}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal= "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1; 
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4; 
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i +3; 
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i +3; 
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i +3; 
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
        
    }
    return textoFinal

}


const btnCopiar = document.querySelector(".btnCopiar");

btnCopiar.addEventListener("click", copiar = ()=>{
    let contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Hola");
})