// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// drill 1
function one() {
  console.log('one');
}

function two(callback) {
  console.log('two');
  callback();
}

function three() {
  console.log('three');
  two(one);
}

three();