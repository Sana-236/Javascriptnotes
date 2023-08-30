//youtube video class of javascript
//javascript adds programming to our web pages
//can be inside body,head tags and externally separate file
//document.write("external usage of javascript");
/*---------string manipulation with DOM-------
//event-an activity event can be mapped into js to perform some actions which uses DOM concepts
function buttonClick(){
    alert("button clicked");
}
buttonClick();(immediately gives alert on browser)

------------usage of get_element_by_id-------
function buttonClick(){
    var str= document.getElementById("h1tag").innerHTML="telsuko";//(text in h1 tag is replaced by the text you mentioned in inner html)
  alert(str);//gives the alert and text in inner html and changes text in h1 tag

}
------text from text box----
function fn(){
    var str=document.getElementById("text1").value;
    alert("value in text box is :"+str);
}
------------RADIO BUTTON--------
function fnc(){
    var rd1=document.getElementById("rd1");
    var rd2=document.getElementById("rd2");
    if(rd1.checked==true)
        alert("the selected value is:"+rd1.value);
    else if(rd2.checked==true)
       alert("the selected value is:"+rd2.value);
    else
     alert("nothing is selected ");
}
------------SELECT BOX---------
function fnc(){
    var select=document.getElementById("selectbox");
    alert(select.options[select.selectedIndex].value);
    //options is used as we have 3 values and selected index is property as it gives the message on which is selected(dynamic functionality)
}
-----------get element by tag name-----------
function change_style(){
    var para=document.getElementsByTagName("p");
    para[0].style.fontSize=26;
    para[1].style.color="green";
    para[2].style.fontStyle="italic";
    para[3].style.fontWeight="bold";
    alert("we have accessed all the paragraphs");
    //you can use for loop if you have many items in the list
}
----------get element by class name---------
function fnc(){
    var element=document.getElementsByClassName("mypara");
    for(var x=0;x<element.length;x++){
        element[x].style.color="maroon";
    }
    alert("changed all the statements having same class name")
}
-------------mouse over and mouse out events---------
function new_image(){
    document.getElementById("img1").src="cat1.jpg";

}
function old_image(){
    document.getElementById("img1").src="cat.jpg";
}
-------------FORM VALIDATION-----------
function validate(){
    var username=document.getElementById("user");
    var password=document.getElementById("pass");
    if(username.value.trim()==""){ // trim method will not allow the blank spaces
       // alert(" blank username");
        user.style.border="solid 3px red";//to get the red mark if user field is empty
        document.getElementById("luser").style.visibility="visible";
        return false;
    }
    else if(password.value.trim()==""){
        alert("blank password");
        return false;
    }
    else if(password.value.trim().length<5){
        alert("password is too short");
        return false;
    }
    else{
        return true;

    }
}
------------Regular expression-------------
\d- match any digit(equal to[0-9])
\w-match any word character(a-z,A-Z,0-9 & _)
\s-match whitespace character(eg-spaces & tabs)
\t-match a tab only
function validate(){
    var username=document.getElementById("uname");
    //regx=new RegExp("E00","i"); (i for insensitive)
    var regx=/E00/;
    //var regx=/[sdp]imple/; (can start words with s,d,p)
   //var regx=/[a-x]00/; (range of starting letter)
       if(regx.test(username)){
        alert("valid username");
        document.getElementById("luser").style.visibility="hidden";
    }
    else{
       // alert("invalid username");
        document.getElementById("luser").style.visibility="visible";
    }
}
-----------------Email Validation using regular expression-------------
(your_name  @   domain  .extension) ex:sana127@gmail.com
(^ is starting point of string $ is end point in string and dot cannot be mentioned directly we need to place black_slash then give dot so that it will take dot)
function validate(){
    var text=document.getElementById("text1").value;
    var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})(.[a-z]{2,8})$/;
    if(regx.test(text))
    {
        document.getElementById("lbltext").innerHTML="Valid";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("text1").style.color="green";
    }
    else{
        document.getElementById("lbltext").innerHTML="InValid";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("text1").style.color="red";
    }
}
-------------------debugging using console log---------------------
(to open the developers tab like inspect click (command+shift+c) this will help to modify the code and debug in the console tab)
function addValues(){
    var a=document.getElementById("text1").value;
    var b=document.getElementById("text2").value;
    document.getElementById("op").innerHTML="Result= "+(a+b);
    //console.log(a+b);//dom object of js (can show errors easily)
}
----------------timing functions--------
(1. setTimeout() allows you to execute statements once after an interval
2.clearTimeout() clears a timer set with the setTimeout() method
3.setInterval() allows you to execute statements repeatedly after an interval
4.clearInterval() clears timer set with setInterval() method)
var ID=0;
var seconds=0;
function printMsg(){
    document.getElementById("op").innerHTML="5 seconds  have passed";
    //document.getElementBYId("op").innerHTML=seconds+"seconds"; seconds++; (used to repeat the message after every 5 seconds)
}
function start(){
   ID= window.setTimeout(printMsg,5000);//reference,time_interval
   ID=window.setInterval(printMsg,1000);
}

function stop(){
    window.clearTimeout(ID);
    //(there will be an id which is returned when set time out is called and we use that id to clear that particular time out values)
    //window.clearInterval(ID);
}
--------------fade in fade out animations----------
(increase 0.1 every time you call fade in and decrease 0.1 every time you call fade in for the opacity)
var opacity=0;
var intervalID=0;
function fadeOut(){
    intervalID=setInterval(hide,200);

}
function hide(){
    var img=document.getElementById("img1");
    opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity>0){
        opacity=opacity-0.1;
        img.style.opacity=opacity;
        //console.log(opacity); to track opacity values on console tab
    }
    else{
        clearInterval(intervalID);
    }
}
function fadeIn(){
    intervalId=setInterval(show,200);

}
function show(){
    var img=document.getElementById("img1");
    opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity<1){
        opacity=opacity+0.1;
        img.style.opacity=opacity;
        //console.log(opacity);
    }
    else{
        clearInterval(intervalID);
    }
}
-------------zoom in and zoom out animation -----------*/
var width=100;
var diff=2;
var intervalID=0;
//document.getElementById("img1").style.width=width;
function increase(){
    clearInterval(intervalID);
   intervalID= setInterval(zoomIn,20);

}
function zoomIn(){
    if (width<200){
        width=width+diff;
        document.getElementById("img1").style.width=width;
        //console.log(width);
    }
    else{
        clearInterval(intervalID);
    }
}
function decrease(){
    clearInterval(intervalID);
    intervalID=  setInterval(zoomOut,20);
}
function zoomOut(){
    if (width>100){
        width=width-diff;
        document.getElementById("img1").style.width=width;
             //console.log(width);
    }
    else{
        clearInterval(intervalID);
    }
}
