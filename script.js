function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensagem = document.getElementById("titulo-mensagem");
  let paragrafo = document.getElementById("paragrafo");
  let imagemPrincipal = document.getElementById("imagemPrincipal");

  let textoCifrado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensagem.textContent = "Texto encriptado com sucesso!";
    paragrafo.textContent = "";
    imagemPrincipal.src = "./img/imagem-encriptado.png";
  } else {
    imagemPrincipal.src = "./img/imagem-interrogacao.png";
    tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
    paragrafo.textContent = "Informe o texto ou palavra desejada.";
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Você precisa inserir o texto ou palavra!",
    });
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensagem = document.getElementById("titulo-mensagem");
  let paragrafo = document.getElementById("paragrafo");
  let imagemPrincipal = document.getElementById("imagemPrincipal");

  let textoCifrado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensagem.textContent = "Texto desencriptado com sucesso!";
    paragrafo.textContent = "";
    imagemPrincipal.src = "./img/imagem-descriptado.png";
  } else {
    imagemPrincipal.src = "./img/imagem-interrogacao.png";
    tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
    paragrafo.textContent = "Informe o texto ou palavra desejada.";
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Você precisa inserir o texto ou palavra!",
    });
  }
}

function copiar() {
  let textoCop = document.getElementById("texto").value;

  if (textoCop.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Você precisa inserir o texto ou palavra!",
    });
    return;
  }

  navigator.clipboard
    .writeText(textoCop)
    .then(() => {
      Swal.fire({
        title: "Texto copiado!",
        icon: "success"
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao copiar texto!", 
      });
      console.error("Erro ao copiar texto: ", err);
    });
}
