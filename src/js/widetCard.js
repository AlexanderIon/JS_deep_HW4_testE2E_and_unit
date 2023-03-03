import isValidLun from './ValidLun.js';
import visa from '../img/visa.png';
import mc from '../img/masterCard.png';
import mir from '../img/mir-logo.png';
import amerexp from '../img/amerexp.png';

export default class AddWidgetCard {
  /** на вход принемает место где будет отрисован наш виджет */
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get getHtml() {
    return `
        <ul class="listImgCards">
        <li class="item" data-name='visa'> 
            <img class="logViza" src=${visa}' alt="VISA">
        </li>
        <li class="item" data-name='mc'>
            <img class="logMasterCard" src=${mc} alt="MasterCard">
        </li>
        <li class="item" data-name='mir'>
            <img src=${mir} alt="MIR">
        </li>
        <li class="item" data-name='american'>
            <img src=${amerexp} alt="American">
        </li>

    </ul>
    <div class="checkCard">
        <input class="cardNumber" >
        <button class="CheckeBtn">Check Card </button>

    </div>
        `;
  }

  static get listlog() {
    return '.listImgCards';
  }

  static get btnchack() {
    return '.CheckeBtn';
  }

  static get cardNumber() {
    return '.cardNumber';
  }

  /** Метод binToDOM() будет изменять наш prentEl
     * методом добавления нашей верстки можно использовать шаблонизатор
     * смотри  pag
     */
  // isValin(anyPar) {
  //   console.log(anyPar);
  // }

  // 4485602681175708 340057177723243 5555555555554444
  binToDOM() {
    this.parentEl.innerHTML = AddWidgetCard.getHtml;// add my html to the index
    this.cardsLog = this.parentEl.querySelector(AddWidgetCard.listlog);
    this.btncheck = this.parentEl.querySelector(AddWidgetCard.btnchack);
    this.cardNumber = this.parentEl.querySelector(AddWidgetCard.cardNumber);
    const listCard = Array.from(this.cardsLog.querySelectorAll('.item'));

    this.cardlog = this.cardsLog.querySelector('.log');

    this.btncheck.addEventListener('click', () => {
      // console.log('CLIckBTn')
      const { value } = this.cardNumber;
      const validCard = isValidLun(value);
      // console.log(`Ошибки при валибации ${validCard.err}`);
      const activ = this.cardsLog.querySelector('.active');
      if (activ) {
        activ.classList.remove('active');
      }

      if (!validCard.err) {
        if (validCard.nameCard === 4) {
          // console.log(validCard);
          listCard.find((el) => el.getAttribute('data-name') === 'visa').classList.add('active');
        } else if (validCard.nameCard === 5) {
          // console.log(validCard);
          listCard.find((el) => el.getAttribute('data-name') === 'mc').classList.add('active');
        } else if (validCard.nameCard === 3) {
          listCard.find((el) => el.getAttribute('data-name') === 'american').classList.add('active');
        } else if (validCard.nameCard === 2) {
          // console.log('МИР');
          listCard.find((el) => el.getAttribute('data-name') === 'mir').classList.add('active');
        } else {
          // console.log('КОД НЕ ОПРЕДЕЛЕН');
          // return false;
        }
      } else {
        // console.log(validCard);
        // return false;
      }
    });
  }
}
