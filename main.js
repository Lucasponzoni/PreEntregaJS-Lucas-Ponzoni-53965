document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btnJugar").addEventListener("click", function() {
      function jugar() {
          let puntaje = 0
          let puntajeConsola = 0

          while (true) {
              let jugador;
              let consola;

              while (true) {
                  jugador = prompt("Elige: piedra, papel o tijera").toLocaleLowerCase();

                  if (jugador === "piedra" || jugador === "papel" || jugador === "tijera") {
                      break;
                  } else {
                      alert("Opción no válida. Inténtalo de nuevo.");
                  }
              }

              const opciones = ["piedra", "papel", "tijera"];
              const indiceConsola = Math.floor(Math.random() * 3);
              consola = opciones[indiceConsola];

              console.log("Jugador eligió: " + jugador);
              console.log("Consola eligió: " + consola);

              if (jugador === consola) {
                  console.log("Empate")
                  puntaje++, puntajeConsola++;;
              } else if (
                  (jugador === "piedra" && consola === "tijera") ||
                  (jugador === "papel" && consola === "piedra") ||
                  (jugador === "tijera" && consola === "papel")
              ) {
                  console.log("¡Ganaste!");
                  puntaje++;
              } else {
                  console.log("La consola gana.");
                  puntajeConsola++;
              }

              console.log(`+++--- Puntaje: Jugador ${puntaje} Vs Consola ${puntajeConsola} ---+++`);
              console.log("+++---+++---+++---+++---+++---+++---+++---+++")

              const jugarNuevamente = confirm("¿Quieres jugar de nuevo?");
              if (!jugarNuevamente) {
                  console.log("Gracias por jugar, hasta la proxima") 
                  break;
              }
              else {
                  console.log("sigamos jugando :)");
              }
          }
      }

      jugar();
  });
});
