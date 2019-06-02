import _ from 'lodash';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);

export default function printMe() {
  console.log('I get called from print.js! Hello, My name is Vo Van Duyet');
}


// function printComponent() {
//   console.log(
//     _.join(['Another', 'module', 'loaded!'], ' ')
//   );
// }

// printComponent().then(component => {
//   document.body.appendChild(component);
// });