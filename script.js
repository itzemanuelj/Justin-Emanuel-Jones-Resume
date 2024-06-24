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
  'Helvetica, sans-serif',
  'sans-serif',
  'Comic Sans MS, sans-serif',
  'Roboto, sans-serif',
  'Raleway, sans-serif',
 ];

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
