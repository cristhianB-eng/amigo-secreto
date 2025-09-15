// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  // Agregar al array
  amigos.push(nombre);

  // Mostrar en la lista
  actualizarLista();

  // Limpiar input
  input.value = "";
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar lista antes de volver a mostrar

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  // Elegir un índice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[indice];

  // Mostrar el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}