// if we want that if an element will run after some time after a intraval then we will run setimeuot and setintraval

// SetTimeout ==> Allows us to run the function once after the interaval of time


// clearTimeout ==> Allows us to run the function repetedly after the interaval of time 

function greet(name, byeText){
    console.log("Hello Good Morning" + " " + name + " " + byeText);
    console.log(name + " Is a good boy" + " " + byeText);
}
Shaurya = setInterval(greet, 11111, "Shaurya,", "Good Time");

clearInterval(Shaurya);
// Now the clearintreval will returnus the undefined
// TimeOut = setTimeout(greet, 5000, "Shaurya", "Alvida Shaurya");
// console.log(TimeOut);
// This will return us a timeout ID

// clearTimeout(TimeOut);
// This is how The clear time out will run


// This will give me the unique id for the setimeout

// if i want to clear the settime out then i will use the cleartimeout 
function displayTime(){
    time = new Date();
    // console.log(time);
    document.getElementById("time").innerHTML = time;
}
setInterval(displayTime, 1000);