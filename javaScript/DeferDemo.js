alert("i am external js");
try 
{
    let btn1=document.getElementById("btn");
    btn1.style.color="red";
} 
catch (error) 
{
    alert("problem in colouring button \n try putting script after body or\n use defer='true' in script");
}