(function () {
  const audio = document.getElementById("wedding-audio");

  if (!audio) {
    return;
  }

  audio.volume = 0.72;

  const playSong = () => {
    audio.play().catch(() => {
      // Some browsers allow sound only after the first user interaction.
    });
  };

  playSong();

  ["pointerdown", "touchstart", "keydown"].forEach((eventName) => {
    window.addEventListener(eventName, playSong, { once: true, passive: true });
  });
})();
