// elreproductor.js
// Este archivo se encarga de inicializar Clappr dentro del div #player

function initPlayer() {
  var player = new Clappr.Player({
    source: streamUrl, // viene de tu script principal
    parentId: "#player",
    autoPlay: true,
    mute: false,
    width: "100%",
    height: "100%"
  });

  // Eventos básicos para depuración
  player.on(Clappr.Events.PLAYER_PLAY, function() {
    console.log("▶️ Reproduciendo transmisión");
  });

  player.on(Clappr.Events.PLAYER_PAUSE, function() {
    console.log("⏸️ Transmisión en pausa");
  });

  player.on(Clappr.Events.PLAYER_ERROR, function(err) {
    console.error("❌ Error en el reproductor:", err);
  });
}
