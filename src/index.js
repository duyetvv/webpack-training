import _ from 'lodash';

import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  element.appendChild(btn);

  console.log(Data);

  return element;
}

document.body.appendChild(component());


/**
 * code demo for dynamic imports
 */
// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
//     const element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
//     return element;
//   }).catch(error => 'An error occurred while loading the component');
// }

// getComponent().then(component => {
//   document.body.appendChild(component);
// });