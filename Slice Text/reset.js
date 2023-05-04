const firstEntry = document.getElementById('firstSlice')
const secEntry = document.getElementById('secondSlice')
const message = document.querySelector('.message')
const btn = document.querySelector('#btn')

const input = document.querySelector('#sentence')

let error = document.querySelector('#error')

input.setAttribute('placeholder','Enter random value')

function sliceValues(valueOne, valueTwo){
    valueOne = firstEntry.value;
    valueTwo = secEntry.value;

    input.addEventListener('keyup', function(){
        let string = input.value;

        sentence = string;
    })

    input.value = sentence.slice(valueOne, valueTwo)

    if((valueOne && valueTwo) == ""){
        sentence = ""
        error.innerHTML = 'enter values'
    }
    // else if(valueTwo > string.length){
    //     input.value = ""
    //     error.innerHTML = 'range error'
    // }
}