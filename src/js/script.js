// Animação de fade-in usando Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
document.querySelectorAll('.skill-box').forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.1}s`;
});
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    // ativa botão
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    cards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category.includes(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

  });
});

// Inicializa EmailJS (conecta com sua conta)
(function () {
  emailjs.init("CWUJYtFQRhksIonYO"); 
})();

const form = document.getElementById('contact-form');
const successMsg = document.getElementById("success-msg");
const btn = document.getElementById("submit-btn");

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  // validação
  if (message.length > 500) {
    successMsg.style.display = "block";
    successMsg.style.color = "red";
    successMsg.innerText = "Mensagem muito longa (máx. 500 caracteres)";
    return;
  }

  btn.innerText = "Enviando...";
  btn.disabled = true;

  emailjs.send('service_sr8y8ho', 'template_f4ttrzh', {
    name: name,
    email: email,
    message: message
  })

  .then(function () {
    successMsg.style.display = "block";
    successMsg.style.color = "green";
    successMsg.innerText = "Mensagem enviada com sucesso!";

    form.reset();

    btn.innerText = "Mensagem enviada!";
    
    setTimeout(() => {
      btn.innerText = "Enviar mensagem";
      btn.disabled = false;
    }, 3000);
  })

  .catch(function (error) {
    successMsg.style.display = "block";
    successMsg.style.color = "red";
    successMsg.innerText = "Erro ao enviar. Tente novamente.";

    btn.innerText = "Enviar mensagem";
    btn.disabled = false;

    console.log("ERRO DETALHADO:", error);
  });

});


function toggleTheme() {
  const body = document.body;

  const isLight = body.classList.toggle('light');

  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  updateThemeButton(isLight);
}

function updateThemeButton(isLight) {
  const btn = document.getElementById('theme-btn');

  btn.innerHTML = isLight 
    ? "🌙 Dark" 
    : "☀️ Light";
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light');
    updateThemeButton(true);
  } else {
    updateThemeButton(false);
  }
});

//scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
