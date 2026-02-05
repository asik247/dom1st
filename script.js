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
    console.log(list[i].style.color='red');
}
console.log(list[4].innerHTML);


