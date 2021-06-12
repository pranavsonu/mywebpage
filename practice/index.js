'use strict';
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 correct Number! 😃';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);