import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTolltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetchanimais.js';
import initFetchBitcoin from './modules/fetchbitcoin.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initTabNav();
initModal();
initTolltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
