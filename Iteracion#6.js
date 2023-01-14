//Iteración #6: Función swap
//Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

let footballPlayer = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

function swap(arr, element1, element2) {
  let temp1 = arr[element1];
  let temp2 = arr[element2];

  arr[element1] = temp2;
  arr[element2] = temp1;
}

swap(footballPlayer, 0, 1);

console.log(footballPlayer);
