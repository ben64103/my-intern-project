const firstEntry = document.getElementById('firstSlice')
const secEntry = document.getElementById('secondSlice')
const message = document.querySelector('.message')
const btn = document.querySelector('#btn')

let error = document.querySelector('#error')

let string = "Slice my letters"
message.textContent = string;

function sliceValues(valueOne, valueTwo){
  valueOne = firstEntry.value;
  valueTwo = secEntry.value;

  message.textContent = string.slice(valueOne, valueTwo)

  if(valueTwo > string.length || valueOne == valueTwo) {
    message.textContent = ''
    error.textContent = 'range error!'
  }
  else if((valueOne && valueTwo) == ""){
    message.textContent  = ''
    error.textContent = 'enter values'
  }
  else if(valueOne > valueTwo){
    message.textContent = ""
    error.textContent = 'value two must be greater'
  }
  else{
    error.textContent = ''
  }
}