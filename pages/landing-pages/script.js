document.documentElement.classList.add('landing-page-js');

const revealItems = document.querySelectorAll('.landing-page-reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const year = document.getElementById('landing-page-year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const form = document.getElementById('landing-page-form');
const formStatus = document.getElementById('landing-page-form-status');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    if (!name || !email || !message) {
      return;
    }

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      formStatus.textContent = 'Kérlek, töltsd ki a kötelező mezőket.';
      formStatus.classList.add('is-error');
      return;
    }

    const subject = encodeURIComponent('Landing oldal kapcsolatfelvétel');
    const body = encodeURIComponent(
      `Név: ${name.value.trim()}\n` +
      `E-mail: ${email.value.trim()}\n` +
      `Vállalkozás / projekt: ${form.querySelector('input[name="company"]').value.trim() || '-'}\n` +
      `Segítség: ${form.querySelector('select[name="service"]').value}\n\n` +
      `Üzenet:\n${message.value.trim()}`
    );

    formStatus.textContent = 'A levelezőprogram megnyílt. Kérlek, küldd el az üzenetet a megjelenő levélben.';
    formStatus.classList.remove('is-error');
    window.location.href = `mailto:david.naray92@gmail.com?subject=${subject}&body=${body}`;
  });
}
