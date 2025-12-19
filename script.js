// Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('.nav a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault();
    const destino = document.querySelector(enlace.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Formulario de contacto en modo demostrativo
const form = document.querySelector('.form-contacto');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(
      'Este es un formulario de ejemplo.\nPara contacto real, use los canales oficiales de la Escuela Militar de Sargentos del Ejército.'
    );
    form.reset();
  });
}
