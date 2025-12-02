function change() {
    document.getElementById("output1").textContent = "Found my dream car here! Profeesional staff, transparent pricing an an incredible selsection. Highly recommend!";
    document.getElementById("output2").textContent = "Sarah Mitchell";
    document.getElementById("output3").textContent = "Entrepreneur";
    if(document.getElementById("image").src === "photo-1472099645785-5658abf4ff4e.jpeg"){
        document.getElementById("image").src = "photo-1438761681033-6461ffad8d80.jpeg";
    }
    else{
        document.getElementById("image").src = "photo-1472099645785-5658abf4ff4e.jpeg";
    }
}
function dropdown(){
    document.getElementById("dropdownmenu").style.opacity = "100";
    document.getElementById("heading").textContent = "";
}
function displayoutput1(){
    document.getElementById("output1").textContent = "Luxury";
}
function displayoutput2(){
    document.getElementById("output2").textContent = "Sport On Road";
}
function displayoutput3(){
    document.getElementById("output3").textContent = "Classic";
}
function displayoutput4(){
    document.getElementById("output4").textContent = "SUV in Nature";
}
function displayoutput5(){
    document.getElementById("output5").textContent = "Luxury Car Interior";
}
function displayoutput6(){
    document.getElementById("output6").textContent = "Classic Car Detail";
}