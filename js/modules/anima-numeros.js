export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      // fazer isso para que o numero alto incremente mais que um por vez, e os numeros cheguem ao total juntos.
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;// se nao colocar essa instrução o numero que aparecerá na tela será maior que o definido, pois a função é quebrada
          clearInterval(timer);
        }
      }, 25 * Math.random()); // faz o tempo de cada um ficar random, para nao ficar tao mecanico
    });
  }

  // as funções e constantes abaixo são criadas para existir um observador, cada vez que um atributo mude, ativará a função - o atributo irá mudar pois no scroll definimos que colocara a classe ativo em outro js

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observeTarget = document.querySelector('.numeros');
  observer = new MutationObserver(handleMutation);

  observer.observe(observeTarget, { attributes: true });
}
