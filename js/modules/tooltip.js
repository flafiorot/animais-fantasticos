export default function initTolltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]'); // seleciona elementos tooltip

  tooltips.forEach((item) => {
    function criarTooltipBox(element) {
      const tooltipBox = document.createElement('div'); // cria uma div
      const text = element.getAttribute('aria-label'); // seleciona o texto que será obtido do atributo aria -label
      tooltipBox.classList.add('tooltip'); // adiciona classe tooltip na div
      tooltipBox.innerText = text; // diz que o texto da div será o selecionado acima
      document.body.appendChild(tooltipBox); // insere a div no final do body
      return tooltipBox;
    }

    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`; // define que o css top será o pageY capturado ao passar o mouse. como é um valor inteiro, tem que acrescentar px para funcionar. acrescentamos 20px tmbem para distanciar da seta do mouse e nao ficar piscando a caixinha
        this.tooltipBox.style.left = `${event.pageX + 20}px`;
      },
    };
    const onMouseLeave = {
      tooltipBox: '', // poderia excluir essas propriedades vazias, pois é possivel criá-las com a função acima. deixei para ficar melhor de visualizar
      element: '',
      handleEvent() {
        // criamos um objeto com essa função handleEvent dentro, para não ter que criar a função onMouseLeave dentro da OnMouseOver.
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave); // para remover o event de addlistener
        this.element.removeEventListener('mousemove', onMouseMove); // para remover o event de addlistener
      },
    };

    function onMouseOver() {
      const tooltipBox = criarTooltipBox(this); // função mouse chama a função criartooltipbox

      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener('mousemove', onMouseMove); // para acompanhar o mouse se movendo

      onMouseLeave.tooltipBox = tooltipBox; // altera o objeto tooltipBox da função onMouseLeave abaixo
      onMouseLeave.element = this; // altera o element da função abaixo

      this.addEventListener('mouseleave', onMouseLeave);
    }

    item.addEventListener('mouseover', onMouseOver); // para cada elemento selecionado, ficar atento ao evento de passar o mouse por cima e fazer função onMouseOver
  });
}
