function myFunction() {
    var x = document.getElementById("myNavbar");
    var icon = document.querySelector(".icon i");
  
    if (x.className === "navbar") {
      x.className += " responsive";
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      x.className = "navbar";
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  }
  