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