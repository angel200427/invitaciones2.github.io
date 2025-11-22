// ACTIVAR MÚSICA AL TOCAR LA PANTALLA
document.addEventListener("click", () => {
  const audio = document.getElementById("musica");
  audio.play().catch(() => {});
}, { once: true });


// FLORES ANIMADAS
const cont = document.getElementById("flores");

for (let i = 0; i < 25; i++) {
  const flor = document.createElement("div");
  flor.classList.add("flor");

  const colores = ["#ff4d6d", "#ff9e00", "#ffdd00", "#9d4edd", "#00bbf9", "#00f5d4"];
  let color = colores[Math.floor(Math.random() * colores.length)];
  flor.style.background = color;

  flor.appendChild(document.createElement("div"));
  flor.appendChild(document.createElement("div"));

  flor.style.left = Math.random() * 100 + "vw";
  flor.style.animationDuration = 4 + Math.random() * 6 + "s";

  cont.appendChild(flor);
}


// CONFIRMAR ASISTENCIA → ENVÍA A WHATSAPP
function confirmarAsistencia() {

  let numero = "593969035183"; // tu número

  let mensaje = "Confirmo mi invitación 🙏✨";

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, "_blank");

  let msg = document.getElementById("mensaje-gracias");
  msg.classList.add("mostrar");

  setTimeout(() => {
    msg.classList.remove("mostrar");
  }, 5000);
}
