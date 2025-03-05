const songs = [
    {src:'Zoé - Soñe.mp3', img: 'Zoe Soñe.jpg', color: '#C8E6C9'},
    {src:'Zoé - Love.mp3', img: 'Zoe love.jpg', color: '#FF1744'},
    {src: 'Zoé - Labios rotos.mp3', img: 'Zoe Labios Rotos.jpg', color: '#FFD180'},
    {src: 'Zoé - En tu planeta.mp3 ', img: 'Zoe love.jpg', color: '#8E24AA'},
    {src: 'Zoé - Azul.mp3', img: 'Zoe Azul.jpg', color: '#5472d3'},
    {src: 'Zoe - Luna.mp3', img: 'Zoe Soñe.jpg', color: '#B3E5FC'},
    {src: 'Zoé - El Duelo.mp3', img: 'Zoe El duelo.jpg', color: '#00897B'},
    {src: 'Zoé - Karmadame.mp3', img: 'Zoe Karmadame.jpg', color: '#C8E6C9'},
    {src: 'Zoé - Vía Láctea.mp3', img: 'Zoe Via lactea.jpg', color: '#FF4081'},
    {src: 'Zoé - Ella Es Magia.mp3', img: 'Zoe Ella es magia.jpg', color: '#00796B'}
];
let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const songImage = document.getElementById('songImage');
const body = document.getElementById('body');
const playlist = document.getElementById('playlist').children;

audioPlayer.addEventListener('ended', nextSong);

function updatePlayer() {
    audioPlayer.src = songs[currentSongIndex].src;
    songImage.src = songs[currentSongIndex].img;
    body.style.backgroundColor = songs[currentSongIndex].color;
    for (let i = 0; i < playlist.length; i++) {
        playlist[i].classList.remove('active');
    }
    playlist[currentSongIndex].classList.add('active');
}

function selectSong(index) {
    currentSongIndex = index;
    updatePlayer();
    audioPlayer.play();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlayer();
    audioPlayer.play();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer();
    audioPlayer.play();
}

document.getElementById('prevButton').addEventListener('click', prevSong);
document.getElementById('nextButton').addEventListener('click', nextSong);

// Controlar con el teclado
document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowLeft') {
        prevSong();
    } else if (event.code === 'ArrowRight') {
        nextSong();
    }
});
let currentIndex = 0;

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images'); // función para actualizar un carrusel de imágenes
    const images = document.querySelectorAll('.carousel-images img'); // función para actualizar un carrusel de imágenes
    const imageWidth = images[0].clientWidth;

    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function showNextImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + 1) % images.length; 
    updateCarousel();
}

function showPreviousImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

document.getElementById('prevButton').addEventListener('click', showPreviousImage);
document.getElementById('nextButton').addEventListener('click', showNextImage);


window.addEventListener('resize', updateCarousel); //Carrusel regreso

setInterval(showNextImage, 30000); //Duracion del carrusel


document.addEventListener('keydown', (event) => { // Detecta la tecla
    if (event.key === 'ArrowRight') {
       
        showNextImage();
    } else if (event.key === 'ArrowLeft') { // Flecha derecha
        
        showPreviousImage(); // Flecha izquierda
    }
});
