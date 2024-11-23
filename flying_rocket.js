const WIDTH = 160;
const HEIGHT = 40;

function repeat(string, times) {
  let newString = '';
  for (let i = 1; i <= times; i++) {
    newString += string;  
  }

  return newString;
}

function slice(string, from, to) {
  let newString = '';
  
  for (let i = from; i < to; i++) {
    newString += string[i];
  }
  
  return newString;
}


function updateScreen() {
  const thrust = Math.random();
  const thrustConstraint = 0.5001;

  for (let counter = 0; counter < HEIGHT / 2; counter++) {
    console.log(slice(topScreen, counter * WIDTH, (counter + 1) * WIDTH));
  }

  offset += thrust > thrustConstraint ? 1 : -1;

  const numberOfSpaces = (WIDTH / 2) - 10 - offset;

  const thrusterExhaust = repeat('~', (thrust * 10) / 2);

  console.log(repeat(' ', numberOfSpaces), '      /|    ');
  console.log(repeat(' ', numberOfSpaces), '<=======| ' + thrusterExhaust);
  console.log(repeat(' ', numberOfSpaces), '      \\|    ');

  for (let counter = (HEIGHT / 2) - 1; counter >= 0; counter--) {
    console.log(slice(bottomScreen, counter * WIDTH, (counter + 1) * WIDTH));
  }
}

function put(string, index, character) {
  let newString = '';
  
  for (let i = 0; i < string.length - 1; i++) {
    const charToAdd = Math.random() > 0.97 ? character : ' ';

    newString += string[i];

    newString += i === index ? charToAdd : '';
  }
  
  return newString;
}

function getRandomNumber(from, to) {
  return from + Math.floor(Math.random() * (to - from)); 
}

function stars() {
  console.clear();

  const lastScreenIndex = WIDTH * HEIGHT / 2 - 1;

  topScreen = put(topScreen, getRandomNumber(0, lastScreenIndex), '-');
  bottomScreen = put(bottomScreen, getRandomNumber(0, lastScreenIndex), '-');

  updateScreen();
}

function wait(delay) {
  for (let buffer = 0; buffer < delay; buffer++) {}
}

function animate() {
  
  while(true) {
    wait(99999999);
    
    stars();
  }
}

let topScreen = repeat(' ', WIDTH * HEIGHT / 2);
let bottomScreen = repeat(' ', WIDTH * HEIGHT / 2);

let offset = 0;

animate()
