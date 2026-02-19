// Asegúrate de tener Clappr cargado en tu página:
// <script src="https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js"></script>

(function() {
  var player = new Clappr.Player({
    source: "https://vs20.live.opencaster.com/cristianhilos_314b91b0/index.m3u8",
    parentId: "#player",
    autoPlay: true,
    mute: false,
    width: "100%",
    height: "100%"
  });
})();
