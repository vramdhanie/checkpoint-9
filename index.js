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


// drill 2
function start() {
  console.log('Starting countdown');
}

function tick(n) {
  console.log(n);
}

function done() {
  console.log('BOOM!');
}

function countdown(start, tick, done) {
  start();
  (function loop(i) {
    setTimeout(function() {
      tick(i--);
      if(i > 0){
        loop(i);
      } else {
        done();
      }
    }, 500);
  })(10);
}

countdown(start, tick, done);

function startDownload() {
  console.log('Download starting');
}

function downloadTick(n) {
  console.log(`${(n/10)*100}% left`);
}

function downloadDone() {
  console.log('Download complete');
}

countdown(startDownload, downloadTick, downloadDone);