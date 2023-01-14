//Iteración #4: Métodos findArrayIndex
//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 
//Haz varios ejemplos y compruebalos.

let animals=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text){
    for(let i=0; i<=array.length-1; i++){
        if (array.indexOf(text) === -1){
            return false
        }else{
            return array.indexOf(text)
        }    
    }
}
   

const result = findArrayIndex(animals, "Ajolote")
console.log(result)






