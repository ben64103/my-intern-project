const firstEntry = document.getElementById('firstSlice')
const secEntry = document.getElementById('secondSlice')
const message = document.querySelector('.message')
const btn = document.querySelector('#btn')

const input = document.querySelector('#sentence')

let error = document.querySelector('#error')

// message.textContent = string;

input.setAttribute('placeholder', 'enter random value')

function sliceValues(valueOne, valueTwo){
  valueOne = firstEntry.value;
  valueTwo = secEntry.value;

    
  input.addEventListener('input', function(){
    let string = input.value;
  
    sentence = string;
  })

  
  input.value = sentence.slice(valueOne, valueTwo)

  if((valueOne && valueTwo) == ""){
    sentence  = ''
    error.textContent = 'enter values'
  }
  else if(valueTwo > input.value.length || valueOne == valueTwo) {
    input.value = ''
    error.textContent = 'range error!'
  }
  else if(valueOne > valueTwo){
    input.value = ""
    error.textContent = 'second input value must be greater'
  }
  else{
    error.textContent = ''
  }
}