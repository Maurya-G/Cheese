function hamburgerDropdown() {
    var hamburger = document.getElementById("nav2");
    if (hamburger.style.display === "block"){
        hamburger.style.display = "none";
    } else{
        hamburger.style.display = "block";
    }
}

onload = function(){
    var hamburger = document.getElementById("nav2");
    hamburger.style.display = "none";
}