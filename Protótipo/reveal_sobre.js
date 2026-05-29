window.revelar = ScrollReveal({
    reset: true,
    distance: "18px",       // distância menor
    duration: 550,          // animações mais rápidas
    easing: "ease-out",
    opacity: 0
});

revelar.reveal(".banner-sobre h1", {
    origin: "top",
    delay: 40
});

revelar.reveal(".banner-sobre p", {
    origin: "bottom",
    delay: 70
});


revelar.reveal(".titulo", {
    origin: "bottom",
    delay: 40
});


revelar.reveal(".passo1", {
    origin: "left",
    delay: 60,
});

revelar.reveal(".passo2", {
    origin: "right",
    delay: 80,
});


revelar.reveal(".passos-flex .passo", {
    origin: "bottom",
    interval: 80,
    scale: 0.96,    
});


revelar.reveal(".contexto-projeto", {
    origin: "left",
    delay: 60
});

revelar.reveal(".participacao-cidada", {
    origin: "right",
    delay: 70
});

revelar.reveal(".tecnologia", {
    origin: "bottom",
    delay: 80
});

revelar.reveal(".icone", {
    scale: 0.92,
    duration: 500,
    interval: 90
});


revelar.reveal(".footer-section", {
    origin: "bottom",
    interval: 70,
});
