// Headding Tag code now;
let heading = document.getElementsByTagName("h2");
for(let i = 0; i <= heading.length;i++){
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
for(let i = 0; i  < list.length; i++){
    // console.log(list[i].style.color='red');
}
// console.log(list[4].innerHTML);


// Task code here:
let items = document.getElementsByTagName("li");
console.log(items);
for(let l = 0; l < items.length; l++){
    console.log(items[l].innerText);
    if(items[l].innerText === "JavaScript"){
        items[l].style.color='green'
    }
}
// let li = ul.getElementsByTagName("li");
// console.log(li);

// boxing code here: 
let boxing = document.getElementById('boxing');
// console.log(boxing);
let button = boxing.getElementsByTagName("button");
// console.log(button);
for(let b = 0; b < button.length; b++){
    console.log(button[b].style.background='black');
    button[b].style.color='white'
    button[b].style.padding='10px'
    // button[b.style.color='yellow']
}