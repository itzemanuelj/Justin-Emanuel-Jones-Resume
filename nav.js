function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    // Toggle the icon image
    var icon = document.getElementById('nav-icon');
    if (icon.src.includes('Hamburg.png')) {
        icon.src = '/images/nav/Hamburg.png';
    } else {
        icon.src = '/images/nav/Hamburg2.png ';
    } 
  }