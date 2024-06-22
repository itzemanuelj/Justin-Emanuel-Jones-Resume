{/* <script src="https://kit.fontawesome.com/c185e2d1c9.js" crossorigin="anonymous"></script> */}

var itname = [
  'TECH SUPPORT SPECIALIST', 'IT SUPPORT SPECIALIST', 'HELP DESK TECHNICIAN',
  'CUSTOMER SUPPORT TECHNICIAN', 'TECHNICAL SUPPORT ENGINEER', 'IT HELP DESK ANALYST',
  'TECHNICAL SUPPORT ANALYST', 'SERVICE DESK ANALYST', 'IT SUPPORT ENGINEER',
  'SUPPORT DESK TECHNICIAN', 'CUSTOMER SUPPORT ENGINEER', 'TECHNICAL SUPPORT CONSULTANT',
  'USER SUPPORT SPECIALIST', 'DESKTOP SUPPORT TECHNICIAN', 'REMOTE SUPPORT TECHNICIAN',
  'TECHNICAL SUPPORT ADVISOR', 'APPLICATION SUPPORT ANALYST'
];

var fonts = [
  'Arial, sans-serif',
  'Helvetica, sans-serif',
  'Times New Roman, serif',
  'Georgia, serif',
  'Courier New, monospace',
  'Verdana, sans-serif',
  'Trebuchet MS, sans-serif',
  'Impact, sans-serif',
  'Comic Sans MS, cursive, sans-serif',
  'Lucida Console, monospace',
  'Lucida Sans Unicode, Lucida Grande, sans-serif',
  'Tahoma, sans-serif',
  'Palatino Linotype, Book Antiqua, Palatino, serif',
  'Garamond, serif',
  'MS Sans Serif, Geneva, sans-serif',
  'MS Serif, New York, serif',
  'Roboto, sans-serif',
  'Open Sans, sans-serif',
  'Lato, sans-serif',
  'Montserrat, sans-serif',
  'Oswald, sans-serif',
  'Raleway, sans-serif',
  'PT Sans, sans-serif',
  'Merriweather, serif',
  'Playfair Display, serif'];

var i = 0;

function getRandomFont() {
  var randomIndex = Math.floor(Math.random() * fonts.length);
  return fonts[randomIndex];
}

var intervalId = setInterval(function() {
  var textElement = document.getElementById('itname');
  textElement.innerHTML = itname[i];
  textElement.style.fontFamily = getRandomFont();

  i = (i + 1) % itname.length;
}, 700);
