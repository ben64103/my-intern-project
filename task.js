
console.log(document.getElementById('task-title'))

console.log(document.getElementById('task-title').id)
console.log(document.getElementById('task-title').className)

document.getElementById('task-title').innerText = 'My tasks'

// document.querySelector('li:nth-child(3)').style.color = 'red' 
// document.querySelector('li:nth-child(odd)').style.backgroundColor = '#ccc'

// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// (items[0]).style.color = 'yellow'

// Global Element Class Scope

const listItems = document.querySelector("ul").getElementsByClassName('collection-item');
console.log(listItems)

let lis = document.getElementsByTagName('li');

// lis = Array.from(lis)
// lis.reverse();

// lis.forEach((li, index) => {
//     console.log(li)
//     li.textContent = `${index} hello`
// });

// document querySelectorAll (NodeList)

const items = document.querySelectorAll('ul.collection li.collection-item');


items.forEach((item, index) => {
    item.textContent = `${index} : Hello`
})

const liOddItems = document.querySelectorAll('ul.collection li.collection-item:nth-child(odd)');
const liEvenItems = document.querySelectorAll('ul.collection li.collection-item:nth-child(even)');

liOddItems.forEach((oddItem) => {
    oddItem.style.background = '#ccc'
});

// liEvenItems.forEach((evenItem) => {
//     evenItem.style.background = '#f4f4f4'
// });

for (let i = 0; i < liEvenItems.length; i++) {
    // const element = array[i];
    liEvenItems[i].style.background = '#f3f3f3'
    
}

console.log(items)

const numbers = [3, 4, 5, 6, 45, 50, 69, 55];
let value;
// Add to front
// numbers.unshift(1, 2)

// // Add to end
// numbers.push(7, 8)

// // Remove from front
// numbers.shift()

// // Remove front end
// numbers.pop()

// Find

function under50(age){
    return age < 50;
}

function over50(age){
    return age > 50
}

value = numbers.find(under50)
value = numbers.find(over50)


console.log(numbers)
console.log(value)

