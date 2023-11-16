import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));

//task1

const button1 = document.querySelector('.button1');
button1.addEventListener('click', firstRectangleColorChange);

let isYellow = false;

function firstRectangleColorChange() {
    const box1: HTMLElement | null = document.querySelector('.box1');
    if (box1) {
        if (isYellow) {
            box1.style.backgroundColor = '#1FC2AE';
            // isYellow = false;
        } else {
            box1.style.backgroundColor = '#FFFF00';
            // isYellow = true;
        }
    }
    isYellow = !isYellow; //inversion !false = true, !true = false (each time we call function)
}


//task2
const button2 = document.querySelector('.button2');
button2.addEventListener('click', secondRectangleTextChange);

let isFail = true;

function secondRectangleTextChange() {
    const box2: HTMLElement | null = document.querySelector('.box2');
    box2.style.display = 'flex';
    box2.style.alignItems = 'center';
    box2.style.justifyContent = 'center';
    box2.style.fontSize = '45px';
    if (box2) {
        if (isFail) {
            box2.innerHTML = 'success'.toUpperCase();
        } else {
            box2.innerHTML = 'fail'.toUpperCase();
        }
    }
    console.log(box2.innerHTML);
    isFail = !isFail;
}


//task3
const button3 = document.querySelector('.button3');
button3.addEventListener('click', thirdRectangleOpacity);

let isTransparent = false;

function thirdRectangleOpacity() {
    const box3: HTMLElement | null = document.querySelector('.box3');
    if (box3) {
        if (isTransparent) {
            box3.style.opacity = '0';
        } else {
            box3.style.opacity = '1';
        }
    }
    isTransparent = !isTransparent;
}