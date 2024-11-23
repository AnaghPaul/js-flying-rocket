const WIDTH = 160;
const HEIGHT = 40;

function repeat(string, times) {
  let newString = '';
  for (let i = 1; i <= times; i++) {
    newString += string;  
  }

  return newString;
}

// console.log(screen);

function slice(string, from, to) {
  let newString = '';
  
  for (let i = from; i < to; i++) {
    newString += string[i];
  }
  
  return newString;
}


function updateScreen() {
  for (let counter = 0; counter < HEIGHT / 2; counter++) {
    // const screenSlice = slice(screen, counter * WIDTH, (counter + 1) * WIDTH);

    // console.log(put(screenSlice, getRandomNumber(0, WIDTH), '.'));

    console.log(slice(topScreen, counter * WIDTH, (counter + 1) * WIDTH));
  }

  console.log(repeat(' ', (WIDTH / 2) - 10), '      /|    ');
  console.log(repeat(' ', (WIDTH / 2) - 10), '<===========|');
  console.log(repeat(' ', (WIDTH / 2) - 10), '      \\|     ');

  for (let counter = (HEIGHT / 2) - 1; counter >= 0; counter--) {
    console.log(slice(bottomScreen, counter * WIDTH, (counter + 1) * WIDTH));
  }
}

function put(string, index, character) {
  let newString = '';
  
  for (let i = 0; i < string.length; i++) {
    const charToAdd = Math.random() > 0.95 ? character : ' ';

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

  topScreen = put(topScreen, getRandomNumber(0, WIDTH * HEIGHT / 2), '-');
  bottomScreen = put(bottomScreen, getRandomNumber(0, WIDTH * HEIGHT / 2), '-');

  updateScreen();
}

function wait(delay) {
  for (let buffer = 0; buffer < delay; buffer++) {}
}

function animate() {
  while(true) {
    wait(49999999);
    
    stars();
  }
}

let topScreen = repeat(' ', WIDTH * HEIGHT / 2);
let bottomScreen = repeat(' ', WIDTH * HEIGHT / 2);

// screen = put(screen, 157, 'Q');

// updateScreen();

animate()
