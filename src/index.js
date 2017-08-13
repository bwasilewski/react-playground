import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



// function paintBody(boxnumber=45) {
//     for (let i = 0; i <= boxnumber; i++) {
//         var box = document.createElement('div');
//         var parent = document.getElementById('boxes');

//         box.onclick = function () {
//             console.log('you clicked on box number ' + i);
//         }

//         parent.appendChild(box);
//     }
// }

// paintBody();

// function print(firstName='Ben') {
//     console.log( `Hello, ${firstName}!` );
// }

// print();

// function createEmail(firstName='Benjamin', purchasePrice=100) {
//     var shipping = 5.95
//     console.log(`
//         Hi, ${firstName}, thank you for buying from us.
//             Total: $${purchasePrice}
//             Shipping: $${shipping}
//             Grand Total: $${purchasePrice + shipping}
//         `);
// }

// createEmail();


// var cat = {
//     meow(times) {
//         console.log('meow'.repeat(times))
//     },
//     purr(times) {
//         console.log('purr'.repeat(times))
//     },
//     snore(times) {
//         console.log('snore'.repeat(times))
//     }
// }

// cat.meow(3);
// cat.purr(2);
// cat.snore(1);

// var studentList = (students) => console.log(students);


// studentList(['Ben', 'Dug', 'Babby']);

// var person = {
//     first: 'Doug',
//     actions: ['bike', 'hike', 'ski', 'surf'],
//     printActions() {
//         this.actions.forEach(action => {
//             var str = this.first + ' likes to ' + action
//             console.log(str)
//         });
//     }
// }

// person.printActions();
//
//
