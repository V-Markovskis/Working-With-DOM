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
        if (!isTransparent) {
            box3.style.opacity = '0';
        } else {
            box3.style.opacity = '1';
        }
    }
    isTransparent = !isTransparent;
}


//task4
const button4 = document.querySelector('.button4');
button4.addEventListener('click', rectangleFourOpacity);

let isTransparentBoxFour = false;

function rectangleFourOpacity() {
    const box4: HTMLElement | null = document.querySelector('.box4');
    if (box4) {
        if (!isTransparentBoxFour) {
            box4.style.opacity = '0';
        } else {
            box4.style.opacity = '1';
        }
    }
    
    isTransparentBoxFour = !isTransparentBoxFour;
}


//task5
const button5 = document.querySelector('.button5');
button5.addEventListener('click', rectangleFiveColorChange);

const arrayColor = ['#f48686', '#b7934f', '#15695f', '#7b4ba2', '#d5ead8'];
let currentColorIndex = 0;

function rectangleFiveColorChange() {
    const box5 = document.querySelector<HTMLButtonElement>('.box5');

    if (box5) {
        box5.style.backgroundColor = arrayColor[currentColorIndex];
    }

    currentColorIndex = (currentColorIndex + 1) % arrayColor.length; //allows loop start again when reach legth max
}

//task6
const button6 = document.querySelector('.button6');
button6.addEventListener('click', rectangleSixNumIncrement);

function rectangleSixNumIncrement() {
    const box6 = document.querySelector<HTMLButtonElement>('.box6');
    box6.style.display = 'flex';
    box6.style.alignItems = 'center';
    box6.style.justifyContent = 'center';
    box6.style.fontSize = '50px';
    let counter = 0;

    if (box6) {
        const intervalId = setInterval(() => {
            box6.innerHTML = counter.toString();
            counter++;
            console.log(box6.innerHTML);

            if (counter > 10) {
                clearInterval(intervalId);
            }
        }, 3000);
    }
    //https://stackoverflow.com/questions/35368888/counter-number-adds-1-every-six-seconds
}


//task 7
const button7 = document.querySelector('.button7');
button7.addEventListener('click', allRectanglesAndBackground);

function allRectanglesAndBackground() {
    const allBoxes = document.querySelectorAll<HTMLElement>('.box');
    if (allBoxes) {
        allBoxes.forEach((box) => {
            // eslint-disable-next-line no-param-reassign
            box.style.backgroundColor = '#18D5E1';
        });

        document.body.style.backgroundColor = '#000000';
    }
}


//task8
const box1 = document.querySelector<HTMLElement>('.box1');
box1.addEventListener('mouseover', changeColorToRed);

let isRead = false;

function changeColorToRed() {
    if (box1) {
        if (!isRead) {
            box1.style.backgroundColor = 'red';
        } else {
            box1.style.backgroundColor = '#1FC2AE';
        }
    }
    isRead = !isRead;
}


//task 9 (extra)
const box5 = document.querySelector<HTMLElement>('.box5');
box5.style.display = 'flex';
box5.style.alignItems = 'center';
box5.style.justifyContent = 'center';
box5.style.fontSize = '50px';
let counterToTen = 0;
let intervalId: NodeJS.Timer | undefined;

box5.addEventListener('mouseover', startCount);
box5.addEventListener('mouseout', stopCount);

function startCount() {
    intervalId = setInterval(() => {
        if (box5) {
            box5.innerHTML = counterToTen.toString();
            counterToTen++;
            
            if (counterToTen > 10) {
                clearInterval(intervalId);
            }
        }
    }, 1000);
}

function stopCount() {
    if (box5) {
        clearInterval(intervalId);
        counterToTen = 0;
        box5.innerHTML = '0';
    }
}


//task10 (extra)

//secondaryInput represent second input
let secondaryInput: HTMLInputElement | null = null; //null means empty variable

document.querySelector('input')?.addEventListener('input', function() { // "?" (optional chaining) in order to avoid "null" or "undefined" result
    updateSecondaryInput(this.value); //this.value represents input text;
});

function updateSecondaryInput(value: string) {
    if (value.trim() !== '') {
        if (!secondaryInput) {
            createSecondaryInput();
        }
        if (secondaryInput) {
            secondaryInput.value = value;
        }
    } else {
        removeSecondaryInput();
    }
}

function createSecondaryInput() {
    const container = document.querySelector('.TSinputContainer');
    if (container) {
        secondaryInput = document.createElement('input');
        secondaryInput.setAttribute('type', 'text');
        secondaryInput.setAttribute('disabled', 'true'); //user cannot interact with second input
        container.appendChild(secondaryInput);
    }
}

function removeSecondaryInput() {
    if (secondaryInput) {
        const container = document.querySelector('.TSinputContainer');
        if (container) {
            container.removeChild(secondaryInput);
            secondaryInput = null;
        }
    }
}