const readline = require('readline');

function fibonacciUno(n){
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let fibSeq = [0, 1];
      while (fibSeq.length < n) {
        let nextNum = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
        fibSeq.push(nextNum);
      }
      return fibSeq;
    }
  }

function fibonacciDos(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciDos(n - 1) + fibonacciDos(n - 2);
    }
}

function esFibonacci(n) {
    if (n <= 0) {
        return false;
      }
    
      let a = 0;
      let b = 1;
      let suma;
    
      while (b < n) {
        suma = a + b;
        a = b;
        b = suma;
      }
    
      return b === n;
}



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Ingresa el valor de n: ', (n) => {
    n = parseInt(n);
    if (isNaN(n)) {
      console.log('El valor ingresado no es un número.');
      rl.close();
      return;
    }else if (n < 0) {
      console.log('El valor debe ser positivo.');
      rl.close();
      return;
    }
    console.log(fibonacciUno(n));
    console.log(fibonacciDos(n));
    
    if(esFibonacci(n) === false){
        console.log("no es un numero fibonacci");
    }else{
        console.log('es un numero fibonacci');
    }

    rl.close();
  });