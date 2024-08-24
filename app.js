function encriptar() {
    let input = document.getElementById("texto");
    let texto = String(input.value);
  
    if (texto) { // Verifica se há texto no input
      let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
  
      let aside = document.getElementById("root");
  
      let p = document.createElement("p");
      p.classList.add("texto");
      p.textContent = textoEncriptado;
      p.id = "encriptado";
  
      let button = document.createElement("button");
      button.textContent = "Copiar";
      button.id = "copiar";
      button.classList.add("botao__descripto");
  
      let conteudo = document.getElementById("conteudo");
      conteudo.remove();
  
      aside.appendChild(p);
      aside.appendChild(button);
  
      // Adiciona o listener ao botão após ele ser criado e inserido no DOM
      document.querySelector("#copiar").addEventListener("click", () => {
        navigator.clipboard.writeText(
          document.getElementById("encriptado").textContent
        );
        document.getElementById("encriptado").textContent = "";
        alert("Texto copiado para a área de transferência!");
      });
  
      input.value = ""; // Limpa o valor do input
    }
  }
  
  function desencriptar() {
    let input = document.getElementById("texto");
    let textoEncriptado = String(input.value);
  
    if (textoEncriptado) { // Verifica se há texto no input
      let textoDesencriptado = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
  
      let p =  document.getElementById("encriptado");
      p.textContent = textoDesencriptado;
      input.value = "";
    }
  }