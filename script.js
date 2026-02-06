// Headding Tag code now;
let heading = document.getElementsByTagName("h2");
for (let i = 0; i <= heading.length; i++) {
    // console.log(heading[i]);
}
// box code here now:
let box = document.getElementById("box");
// console.log(box);
let p = box.getElementsByTagName('p');
// console.log(p[1].innerHTML);
// All Tag Select: 
let all = document.getElementsByTagName("*");
// console.log(all[5]);

// li code now:
let list = document.getElementsByTagName("li");
// console.log(list);
for (let i = 0; i < list.length; i++) {
    // console.log(list[i].style.color='red');
}
// console.log(list[4].innerHTML);


// Task code here:
let items = document.getElementsByTagName("li");
console.log(items);
for (let l = 0; l < items.length; l++) {
    console.log(items[l].innerText);
    if (items[l].innerText === "JavaScript") {
        items[l].style.color = 'green'
    }
}
// let li = ul.getElementsByTagName("li");
// console.log(li);

// boxing code here: 
let boxing = document.getElementById('boxing');
// console.log(boxing);
let button = boxing.getElementsByTagName("button");
// console.log(button);
for (let b = 0; b < button.length; b++) {
    console.log(button[b].style.background = 'black');
    button[b].style.color = 'white'
    button[b].style.padding = '10px'
    // button[b.style.color='yellow']
}
// Class Sellector:
let foods = document.getElementsByClassName("food");
console.log(foods);
for (let food of foods) {
    console.log(food.innerText);
}
// let ul = foods.getElementsByTagName("ul");
// console.log(ul);
let foods2 = document.querySelector(".food");
console.log(foods2);

// QuerySellector and QuerSellectorAll Example Code here now:
const change = () => {
    let title = document.querySelector(".title");
    if(title.style.color==='green'){
        title.style.color='red'
    }else{
        title.style.color='green'
    }
}
// Advance:
let btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener('click',function(){
    let items = document.getElementsByClassName("item");
    // console.log(items);
    for(let item of items){
        // console.log(item);
        item.style.color='red';
    }
})
// Anoter way same code:
const changeColor = ()=>{
    let items = document.querySelectorAll(".item");
    // console.log(items);
    items.forEach((element)=>{
        console.log(element);
        element.style.background = 'yellow'
    })
}