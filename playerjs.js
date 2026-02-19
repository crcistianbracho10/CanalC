// Asegúrate de tener Clappr cargado en tu página antes de este script
// <script src="https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js"></script>

(function() {
  // URL base de la miniatura generada por tu servidor con FFmpeg
  var posterBase = "https://tuservidor.com/thumb.jpg";

  // Inicializa el reproductor
  var player = new Clappr.Player({
    source: "https://vs20.live.opencaster.com/cristianhilos_314b91b0/index.m3u8",
    parentId: "#player", // el contenedor debe existir en tu HTML
    autoPlay: true,
    width: "100%",
    height: "100%",
    poster: posterBase + "?t=" + Date.now()
  });

  // Función para refrescar la miniatura cada 20 segundos
  function refreshPoster() {
    var newPoster = posterBase + "?t=" + Date.now();
    player.options.poster = newPoster;
    var posterEl = player.core.$el.find('.poster-background');
    if (posterEl.length) {
      posterEl.css('background-image', 'url(' + newPoster + ')');
    }
  }

  // Ejecuta la actualización cada 20 segundos
  setInterval(refreshPoster, 20000);
})();
