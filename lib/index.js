"use strict";

var _fslightbox = _interopRequireDefault(require("fslightbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

fsLightboxInstances['first-lightbox'].open(0);

fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');
};
import {suma, saludo} from "./operaciones";
import Swal from 'sweetalert2';

/* document.write(`<h2>${suma()}</h2>`); */

/* console.log(suma(4, 4)); */

/* console.log(saludo); */

/* Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
}) */

/* let timerInterval
Swal.fire({
  title: 'Victor H a punto de bloquearse... ',
  html: 'I will close in <b>12000</b> milliseconds.',
  timer: 8000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */

/* if (result.dismiss === Swal.DismissReason.timer) {
  console.log('I was closed by the timer')
}
}) */

/* ------ */

/* import _ from 'lodash';
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component()); */