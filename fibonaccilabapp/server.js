const express = require('express');
const app = express();
const port = 3000;

// Function to check if a number is a perfect square
function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

// Function to check if a number is a Fibonacci number
function isFibonacciNumber(num) {
  return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

app.get('/fibonacci/:number', (req, res) => {
  const number = parseInt(req.params.number);

  if (isFibonacciNumber(number)) {
    res.send('Very good. It is Fibonacci.');
  } else {
    res.send('I can tell this is not a Fibonacci number.');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
