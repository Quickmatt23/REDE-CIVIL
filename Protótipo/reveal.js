window.revelar = ScrollReveal({
    reset: true
});

// /===== Destaque =====\

revelar.reveal('.destaque', {
    duration: 500,
    distance: '20px',
    origin: 'bottom',
    delay: 40
});

revelar.reveal('.img-dest', {
    duration: 700,
    distance: '15px',
    opacity: 0,
    delay: 60
});

// /===== Como funciona =====\

revelar.reveal('.titulo-1', {
    duration: 600,
    distance: '20px',
    origin: 'top',
    delay: 40
});

revelar.reveal('.passo1', {
    duration: 650,
    distance: '18px',
    origin: 'left',
    delay: 80
});

revelar.reveal('.passo2', {
    duration: 650,
    distance: '18px',
    origin: 'right',
    delay: 100
});

revelar.reveal('.passo3', {
    duration: 650,
    distance: '18px',
    origin: 'bottom',
    delay: 120
});

revelar.reveal('.passo4', {
    duration: 650,
    distance: '18px',
    origin: 'top',
    delay: 140
});

revelar.reveal('.passo', {
    duration: 600,
    scale: 0.95,
    delay: 90
});

// /===== Tipos de Denúncia =====\

revelar.reveal('.titulo-2', {
    duration: 650,
    distance: '18px',
    origin: 'left',
    delay: 40
});

revelar.reveal('.tipos', {
    duration: 700,
    distance: '20px',
    origin: 'left',
    scale: 0.92,
    delay: 90,
    interval: 80
});


revelar.reveal('.alerta-emergencia', {
  duration: 600,
  distance: '20px',
  origin: 'top'
});

revelar.reveal('.lista-opcoes .opcao', {
  duration: 700,
  distance: '18px',
  origin: 'right',
  interval: 80
});

revelar.reveal('.img-dest, .solicitacao, .titulo-2', {
  duration: 650,
  distance: '18px',
  origin: 'bottom'
});