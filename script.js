const email = 'LAB@THATEYEPLACE.COM';
const toast = document.querySelector('.toast');
let toastTimer;

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email);
  } catch {
    const input = document.createElement('textarea');
    input.value = email;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }

  toast.setAttribute('aria-hidden', 'false');
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    toast.setAttribute('aria-hidden', 'true');
  }, 2600);
}

document.querySelectorAll('.contact-trigger').forEach((button) => {
  button.addEventListener('click', copyEmail);
});
