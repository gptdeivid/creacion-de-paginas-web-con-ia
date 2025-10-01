// Animación typing en el hero
const typingElement = document.querySelector('.typing');
const words = ['David Cuéllar', 'Ingeniero de IA', 'Profesor de Ciberseguridad'];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingElement.textContent += words[wordIndex][charIndex];
    charIndex++;
    setTimeout(type, 120);
  } else {
    typing = false;
    setTimeout(erase, 1200);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    typing = true;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 400);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (typingElement) type();

  // Modales de proyectos
  document.querySelectorAll('.project button').forEach(btn => {
    btn.addEventListener('click', e => {
      const modalId = btn.parentElement.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'flex';
    });
  });
  document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', e => {
      closeBtn.closest('.modal').style.display = 'none';
    });
  });
  window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });

  // Formulario de contacto funcional (simulado)
  const form = document.getElementById('contactForm');
  const formMsg = document.querySelector('.form-message');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMsg.textContent = 'Enviando...';
    setTimeout(() => {
      formMsg.textContent = '¡Mensaje enviado! Gracias por contactarme.';
      form.reset();
    }, 1200);
  });

  // Animación de revelación al hacer scroll
  const sections = document.querySelectorAll('.about, .portfolio, .contact');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});
