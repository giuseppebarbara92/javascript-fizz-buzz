// Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero
// // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
for (var i = 1; i <= 100; i++) {

  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + 'FizzBuzz');
  }

  else if (i % 3 == 0) {
    console.log(i + 'Fizz');
  }

  else if  (i % 5 == 0) {
    console.log(i + 'Buzz');
  }

  else {
    console.log(i);
  }

}
