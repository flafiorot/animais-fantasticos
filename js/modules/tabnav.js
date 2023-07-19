export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  // if é para que o codigo seja executado apenas se existir esses itens na pagina (poderia estar em outra pg do site, por ex), para prevenir que de erro no console. Ambos tem que ter mais que um elemento na length para retornar true
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  if (tabMenu.length && tabContent.length) {
    // para primeiro item começar com a classe ativo para nao ficar sem sessao no site
    tabContent[0].classList.add('ativo');

    // função para cada elemente de texto adicionar a classe ativo de acordo com o index que foi passado. O remove é para que sempre tenha apenas 1 item com a classe ativo por vez.

    // função para cada item da li, verificar o item e o index(nr da array), no click passar funcao activeTab com o index que foi verificado nesse mesmo forEach
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
