function start(){
    window.location.href = "choisir.html";
}
let images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
];

let i = 0;

setInterval(() => {
    document.body.style.backgroundImage = `url(${images[i]})`;
    i = (i + 1) % images.length;
}, 4000);