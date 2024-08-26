function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensagem = document.getElementById("titulo-mensagem");
  let paragrafo = document.getElementById("paragrafo");
  let imagemPrincipal = document.getElementById("imagemPrincipal");

  let textoCifrado = texto
    .replace(/e/, "enter")
    .replace(/i/, "imes")
    .replace(/a/, "ai")
    .replace(/o/, "ober")
    .replace(/u/, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensagem.textContent = "Texto encriptado com sucesso!";
    paragrafo.textContent = "";
    imagemPrincipal.src = "./img/imagem-encriptado.png";
  } else {
    imagemPrincipal.src = "./img/imagem-interrogacao.png";
    tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
    paragrafo.textContent = "Informe o texto ou palavra desejada.";
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensagem = document.getElementById("titulo-mensagem");
  let paragrafo = document.getElementById("paragrafo");
  let imagemPrincipal = document.getElementById("imagemPrincipal");

  let textoCifrado = texto
    .replace(/enter/, "e")
    .replace(/imes/, "i")
    .replace(/ai/, "a")
    .replace(/ober/, "o")
    .replace(/ufat/, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensagem.textContent = "Texto desencriptado com sucesso!";
    paragrafo.textContent = "";
    imagemPrincipal.src = "./img/imagem-descriptado.png";
  } else {
    imagemPrincipal.src = "./img/imagem-interrogacao.png";
    tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
    paragrafo.textContent = "Informe o texto ou palavra desejada.";
  }
}

function copiar() {
  let textoCop = document.getElementById("texto").value;

  if (textoCop.trim() === "") {
    alert("O campo de texto está vazio. Por favor, digite algo para copiar.");
    return;
  }

  navigator.clipboard
    .writeText(textoCop)
    .then(() => {
      alert("Texto copiado.");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
}
