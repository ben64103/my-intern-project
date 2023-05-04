
// console.log(document.getElementById('task-title'))

// console.log(document.getElementById('task-title').id)
// console.log(document.getElementById('task-title').className)

// document.getElementById('task-title').innerText = 'My tasks'

// // document.querySelector('li:nth-child(3)').style.color = 'red' 
// // document.querySelector('li:nth-child(odd)').style.backgroundColor = '#ccc'

// // const items = document.getElementsByClassName("collection-item");
// // console.log(items);
// // (items[0]).style.color = 'yellow'

// // Global Element Class Scope

// const listItems = document.querySelector("ul").getElementsByClassName('collection-item');
// console.log(listItems)

// let lis = document.getElementsByTagName('li');

// // lis = Array.from(lis)
// // lis.reverse();

// // lis.forEach((li, index) => {
// //     console.log(li)
// //     li.textContent = `${index} hello`
// });

// document querySelectorAll (NodeList)

// const items = document.querySelectorAll('ul.collection li.collection-item:nth-child(odd)');
// const oddLi = document.querySelectorAll('ul.collection li.collection-item:nth-child(even)')

// // items.forEach((item, index)=>{
// // 	item.textContent = `${index}`
// // })

// for(i = 0; i < oddLi.length; i++){
// 	oddLi[i].style.backgroundColor = '#f4f4f4'
// }

// let val;

// const list = document.querySelector('ul.collection')

// val = list.childNodes
// val = list.childNodes[0]
// // val = list.childNodes[0].nodeName
// val = list.childNodes[0].nodeType
// val = list.childNodes[2].nodeName
// // get children element nodes
// // val = list.children


// console.log(val);

// const li= document.createElement('li')

// li.className = 'list-item'
// li.id = 'item'
// // add attribute
// li.setAttribute('title', 'list-content')

// // Create text node and append
// li.appendChild(document.createTextNode('Hello world'))

// // append li as child to ul
// document.querySelector('ul.collection').appendChild(li)



// const link = document.createElement('a')
// link.className = 'delete-item secondary-content'
// li.appendChild(link)

// // add icon html
// link.innerHTML = ' <span class="icon">×</span>'
// console.log(li)

//REPLACE ELEMENT

// create element
// const newHeading = document.createElement('h2');

// newHeading.id = 'task-title'
// // Add text to heading
// newHeading.appendChild(document.createTextNode('Task List'))
// // get the old heading
// const oldHeading = document.getElementById('task-title')
// // Parent
// const card = document.querySelector('.card-action');


// // Replace
// card.replaceChild(oldHeading, newHeading)
// console.log(newHeading)


// // create Element
// const newHeading = document.createElement('li');
// const link = document.createElement('a')
// newHeading.className = 'collection-item'
// link.className = 'delete-item secondary-content'
// newHeading.appendChild(document.createTextNode('List Item'))

// document.querySelector('ul.collection').appendChild(newHeading)
// const exit = newHeading.appendChild(link)

// link.innerHTML = '<span class="icon">×</span>'

// // console.log(newHeading);
// exit.addEventListener('click', ()=>{
//     newHeading.style.display = 'none'
// })

document.body.addEventListener('click', deleteItem)

function deleteItem(event){
    // console.log(event.target);

    // if(event.target.parentElement.className = 'delete-item secondary-content'){
    //     console.log('delete item');
    // }

    if(event.target.parentElement.classList.contains('delete-item')){
      event.target.parentElement.parentElement.remove()
    }
}