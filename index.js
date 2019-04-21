// Import stylesheets
import './style.css';


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
function process(fn, a, b) {
  return fn(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const drill2 = document.getElementById('drill2');
drill2.innerHTML = `
  <h2>Process Function</h2>
  <div>Add: ${process(add, 6, 4) == 10 ? 'Passed':'Failed'}</div>
  <div>Subtract: ${process(subtract, 6, 4) == 2 ? 'Passed':'Failed'}</div>
`;

// drill ? (May drop this)
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