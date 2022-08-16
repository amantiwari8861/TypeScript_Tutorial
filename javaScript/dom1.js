// let p3=document.getElementById("para3");
// p3.style.color="Red";


// let parr=document.getElementsByClassName("para");
// parr[2].style.color="green";

// let tarr=document.getElementsByTagName("div");
// tarr[2].style.color="green";

// let Narr=document.getElementsByName("para3");
// Narr[3].style.color="green";

// for (const e of Narr) 
// {
//     console.log("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase());
//     e.style.color="#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
// }

// let dh=document.querySelector(".con1 h1"); //gives only 1 element
// dh.style.color="orange";

let h1arr=document.querySelectorAll(".con1 h1"); //gives only an array of elements
h1arr[1].style.color="orange";


for (const e of h1arr) 
{
    console.log("#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase());
    e.style.color="#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}