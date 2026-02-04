const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];


const playlistGrid = document.querySelector('#playlists - grid')
const nowPlaying = document.querySelector('#now-playing-title')

playlists.forEach((playlist) => { 
  const li = document.createElement('li')
  li.className = 'playlist-card'
  li.setAttribute('data-title', playlist.title)

  const img = document.createElement('img')
  img.src = playlist.image
  img.alt = `${playlist.title} playlist cover`
  
  const p = document.createElement('p')
  p.textContent = playlist.title

  li.append(img, p)
  playlistGrid.append(li)

})

playlistGrid.addEventListener('click', (event) => { 
  const clicked = event.target.closest('.playlist-card')
  if (!clicked) return

  const previous = document.querySelector('.playlist-card.selected')
  if (previous) { 
    previous.classList.remove('selected')
  }
  clicked.classList.add('selected')
  const playlistTitle = clicked.getAttribute('data-title')
  nowPlaying.textContent = playlistTitle
})
