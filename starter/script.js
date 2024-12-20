'use strict';
let number = 0;
let randomNumber = 0;
let count = 0;
function valueConsole()
{
    number = Number(document.querySelector('.guess').value);
    console.log(typeof number);
    randomNumber = Math.ceil(Math.random() * 20);
    console.log(typeof randomNumber);
    document.querySelector('.number').innerHTML = randomNumber;
    if (number === randomNumber)
    {
        document.body.style.backgroundColor = 'green';
    }
    else
    {
        document.body.style.backgroundColor = 'black';
        count += 1;
        document.querySelector('.score').innerText = count;
    }
}
const againBtn = document.querySelector('.again');
const btn = document.querySelector('.check');
againBtn.addEventListener('click', () =>
{
    document.querySelector('.guess').value = 0;
    document.querySelector('.number').innerText = '?';
    document.querySelector('.score').innerText = 0;
});
btn.addEventListener('click', valueConsole);
