const delayd=document.getElementById("delayed");
const container1 = document.getElementById("container1")
var   progressed1 = document.getElementById("progressed1")
const progressed2 = document.getElementById("progressed2")
const progressed3 = document.getElementById("progressed3")
const progressed4 = document.getElementById("progressed4")
const progressed5 = document.getElementById("progressed5")
var flag=false;
setTimeout(() => {
    delayd.style.display="block";
    container1.style.visibility="visible";
}, 2000);
function progresed1 () {
    if(flag==true)
    {
    progressed1.style.display="none";    
    flag=false;
    }
    else{
    progressed1.style.display="block";
    progressed1.style.transform=""
    flag=true;
    }
}
function progresed2() {
    if(flag==true)
    {
    progressed2.style.display="none"; 
    flag=false;   
    }
    else{
    progressed2.style.display="block";
    flag=true;
    }
}
function progresed3() {
    if(flag==true)
    {
    progressed3.style.display="none";
    flag=false;    
    }
    else{
    progressed3.style.display="block";
    flag=true;
    }
}
function progresed4() {
    if(flag==true)
    {
    progressed4.style.display="none";
    flag=false;    
    }
    else{
    progressed4.style.display="block";
    flag=true;
    }
}
function progresed5() {
    if(flag==true)
    {
    progressed5.style.display="none";
    flag=false;    
    }
    else{
    progressed5.style.display="block";
    flag=true;
    }
}
