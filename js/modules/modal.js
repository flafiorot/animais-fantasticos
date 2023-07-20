export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    // bind this ao callback para fazer referencia ao objeto da classe
    this.eventAbreFechaModal = this.eventAbreFechaModal.bind(this);
    this.cliqueFora = this.cliqueFora.bind(this);
  }

  // adiciona o evento de toggle ao modal
  abreFechaModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // abre ou fecha o modal
  eventAbreFechaModal(event) {
    event.preventDefault();
    this.abreFechaModal();
  }

  // fecha modal ao clicar do lado de fora
  cliqueFora(event) {
    if (event.target === this.containerModal) {
      this.abreFechaModal(event);
    }
  }

  // adiciona os eventos ao elemento do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventAbreFechaModal);
    this.botaoFechar.addEventListener('click', this.eventAbreFechaModal);
    this.containerModal.addEventListener('click', this.cliqueFora);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
