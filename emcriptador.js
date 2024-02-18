function encriptarTexto() {
    let mensaje = document.getElementById("mensajeUsuario").value;

    let mensajeRemplazo = mensaje.replace(/[aeiou]/ig, function (letra) {
        switch (letra.toLowerCase()) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return letra;
        }
    });
    document.getElementById("textoEncriptado").value = mensajeRemplazo;
    textoGlobal = mensajeRemplazo;
    document.getElementById("mensajeUsuario").value = "";
}

function desencriptarTexto() {
    let mensajeEncriptado = document.getElementById("mensajeUsuario").value;

    let mensajeDescomponido = mensajeEncriptado.replace(/(ai|enter|imes|ober|ufat)/ig, function (letra, palabras) {
        switch (palabras.toLowerCase()) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            default:
                return letra;
        }
    });
    document.getElementById("textoEncriptado").value = mensajeDescomponido;

    document.getElementById("mensajeUsuario").value = "";
}

function copiarTexto() {
    let textarea = document.createElement("textarea");
    textarea.value = textoGlobal;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(textarea);

    document.getElementById("textoEncriptado").value = "";
}

function pegarTexto() {
    document.getElementById("mensajeUsuario").value = textoGlobal;
}
