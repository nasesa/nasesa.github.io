let toggled = 1
function toggleMusic() {
    var x = document.getElementById("audiotoggle");
    if (toggled === 1) {
      x.src = "./layout/audio.gif";
      document.getElementById('player').play();
      toggled = 0
    } else {
      x.src = "./layout/audio.png";
      document.getElementById('player').pause();
      toggled = 1
    }
  } 
