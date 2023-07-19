export default function initModal() {
  const botaoLogin = document.querySelector('[data-modal="abrir"');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"');

  function abreFechaModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle('ativo');
  }

  function cliqueFora(event) {
    if (event.target === this) {
      abreFechaModal(event);
    }
  }

  if (botaoLogin && botaoFechar && modalContainer) {
    botaoLogin.addEventListener('click', abreFechaModal);
    botaoFechar.addEventListener('click', abreFechaModal);
    modalContainer.addEventListener('click', cliqueFora);
  }
}
