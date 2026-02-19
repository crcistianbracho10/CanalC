// playerjs.js
// Configuración avanzada de Clappr en un archivo JS independiente

(function() {
  // Configuración inicial
  var streamUrl = "https://vs20.live.opencaster.com/cristianhilos_314b91b0/index.m3u8";
  var containerId = "#player";

  // Inicializa el reproductor
  var player = new Clappr.Player({
    source: streamUrl,
    parentId: containerId,
    autoPlay: true,
    mute: false,
    width: "100%",
    height: "100%",
    playback: { playInline: true }
  });

  // Función para alternar mute
  function toggleMute() {
    if (player.isMuted()) {
      player.unmute();
      console.log("🔊 Sonido activado");
    } else {
      player.mute();
      console.log("🔇 Sonido silenciado");
    }
  }

  // Función para pausar/reanudar
  function togglePlay() {
    if (player.isPlaying()) {
      player.pause();
      console.log("⏸️ Pausado");
    } else {
      player.play();
      console.log("▶️ Reproduciendo");
    }
  }

  // Función para cambiar la fuente del stream
  function changeSource(newUrl) {
    player.load(newUrl);
    console.log("🔄 Fuente cambiada a: " + newUrl);
  }

  // Eventos del reproductor
  player.on(Clappr.Events.PLAYER_PLAY, function() {
    console.log("▶️ El reproductor comenzó a reproducir");
  });

  player.on(Clappr.Events.PLAYER_PAUSE, function() {
    console.log("⏸️ El reproductor está en pausa");
  });

  player.on(Clappr.Events.PLAYER_STOP, function() {
    console.log("⏹️ El reproductor se detuvo");
  });

  player.on(Clappr.Events.PLAYER_ERROR, function(err) {
    console.error("❌ Error en el reproductor:", err);
  });

  // Exponer funciones globales para control manual
  window.PlayerControls = {
    toggleMute: toggleMute,
    togglePlay: togglePlay,
    changeSource: changeSource
  };

  console.log("✅ PlayerJS inicializado correctamente");
})();
