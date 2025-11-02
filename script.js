const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('track');
const showBtn = document.getElementById('show-note');
const secret = document.getElementById('secret');

playBtn.addEventListener('click', async () => {
  try {
    if (audio.paused) {
      await audio.play();
      playBtn.textContent = '❚❚ Pausar música';
      playBtn.setAttribute('aria-pressed','true');
    } else {
      audio.pause();
      playBtn.textContent = '▶︎ Tocar música';
      playBtn.setAttribute('aria-pressed','false');
    }
  } catch (err) {
    alert('Não consegui tocar a música. Coloque um arquivo chamado "music.mp3" na mesma pasta do HTML.');
  }
});

showBtn.addEventListener('click', () => {
  if (secret.style.display === 'none') {
    secret.style.display = 'block';
    showBtn.textContent = 'Ocultar nota';
  } else {
    secret.style.display = 'none';
    showBtn.textContent = 'Ler nota secreta';
  }
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden && !audio.paused) audio.pause();
});
