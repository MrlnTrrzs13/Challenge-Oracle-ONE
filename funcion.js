var btnEncriptar= document.getElementById("btn_encriptar");
var btnDesencriptar = document.getElementById("btn_desencriptar");
var btnCopiar = document.getElementById("copiar_texto");
var textoEncriptado = document.getElementById("texto_encriptado");
var textoResultado = document.getElementById("text_resultado");
var sololetras = '^[a-z !ñ]+$';
var textDesceado = document.getElementById("text_desceado");
var msnDesceado = document.getElementById("msn");
var img = document.getElementById("muneco");

document.addEventListener('DOMContentLoaded', () => {
    btnEncriptar.addEventListener('click', encriptacion);
    btnDesencriptar.addEventListener('click', desencriptacion);
    btnCopiar.addEventListener('click', copiarTexto);
});

function encriptacion(e) {
    e.preventDefault();
    textoResultado.value = '';
    let texto = textoEncriptado.value;

    textoResultado.style.display = 'block';
    btnCopiar.style.display = 'block';
    msnDesceado.style.display = 'none';
    textDesceado.style.display = 'none';
    img.style.display = 'none';    
    
    if (texto.match(sololetras)!==null){
        let oracion = texto.split(" ");
        let nuevaOracion = [];

        for (let palabra of oracion) {
            palabra = palabra.replaceAll('e', 'enter');
            palabra = palabra.replaceAll('i', 'imes');
            palabra = palabra.replaceAll('a', 'ai');
            palabra = palabra.replaceAll('o', 'ober');
            palabra = palabra.replaceAll('u', 'ufat');
            nuevaOracion.push(palabra);
        }
        let resultado = nuevaOracion.join(' ');
        textoResultado.value = resultado;
    }

    
}

function desencriptacion(e){
    e.preventDefault();
    textoResultado.value = '';
    let texto = textoEncriptado.value;

    textoResultado.style.display = 'block';
    btnCopiar.style.display = 'block';

    if (texto.match(sololetras)!==null){
        let oracion = texto.split(" ");
        let nuevaOracion = [];

        for (let palabra of oracion) {
            palabra = palabra.replaceAll('enter', 'e');
            palabra = palabra.replaceAll('imes', 'i');
            palabra = palabra.replaceAll('ai', 'a');
            palabra = palabra.replaceAll('ober', 'o');
            palabra = palabra.replaceAll('ufat', 'u');
            nuevaOracion.push(palabra);
        }
        let resultado = nuevaOracion.join(' ');
        textoResultado.value = resultado;
    }
}

function copiarTexto(e) {
    e.preventDefault(); 
    let mensaje = textoResultado.value;
    navigator.clipboard.writeText(mensaje);
    textoEncriptado.value = "";
}