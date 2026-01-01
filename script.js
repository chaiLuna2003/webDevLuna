const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn?.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Botones
const verMasBtn = document.querySelector('.ver-mas-btn');
const verDetalleBtn = document.querySelector('.ver-detalle-btn');

// Modales
const modal = document.getElementById('miModal');
const modalDetail = document.getElementById('modaldetail');

// Fondos
const backdropModal = modal?.querySelector('.modal-backdrop');
const backdropDetail = modalDetail?.querySelector('.modal-backdrop');

// Botones cerrar
const cerrarBtns = document.querySelectorAll('.cerrar-modal');

// Funciones reutilizables
const abrirModal = (modal) => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

const cerrarModal = (modal) => {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
};

// Abrir
verMasBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  abrirModal(modal);
});

verDetalleBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  abrirModal(modalDetail);
});

// Cerrar botones
cerrarBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    cerrarModal(modal);
    cerrarModal(modalDetail);
  });
});

// Cerrar fondo
backdropModal?.addEventListener('click', () => cerrarModal(modal));
backdropDetail?.addEventListener('click', () => cerrarModal(modalDetail));

// ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    cerrarModal(modal);
    cerrarModal(modalDetail);
  }
});
