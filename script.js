const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// Seleccionar elementos
const verMasBtn = document.querySelector('.ver-mas-btn');
const modal = document.getElementById('miModal');
const cerrarBtns = document.querySelectorAll('.cerrar-modal');
const fondoModal = modal.querySelector('.fixed.inset-0.bg-black');

// Abrir modal
verMasBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Evitar scroll
});

// Cerrar modal
cerrarBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });
});

// Cerrar al hacer clic fuera del contenido
fondoModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
});

document.addEventListener()