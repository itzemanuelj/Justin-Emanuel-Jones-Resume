{/* <script src="https://kit.fontawesome.com/c185e2d1c9.js" crossorigin="anonymous"></script> */}

var itname = [
  'TECH SUPPORT SPECIALIST', 'IT SUPPORT SPECIALIST', 'HELP DESK TECHNICIAN',
  'CUSTOMER SUPPORT TECHNICIAN', 'TECHNICAL SUPPORT ENGINEER', 'IT HELP DESK ANALYST',
  'TECHNICAL SUPPORT ANALYST', 'SERVICE DESK ANALYST', 'IT SUPPORT ENGINEER',
  'SUPPORT DESK TECHNICIAN', 'CUSTOMER SUPPORT ENGINEER', 'TECHNICAL SUPPORT CONSULTANT',
  'USER SUPPORT SPECIALIST', 'DESKTOP SUPPORT TECHNICIAN', 'REMOTE SUPPORT TECHNICIAN',
  'TECHNICAL SUPPORT ADVISOR', 'APPLICATION SUPPORT ANALYST'
];

var i = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var intervalId = setInterval(function() {
  var textElement = document.getElementById('itname');
  textElement.innerHTML = itname[i];
  textElement.style.fontFamily = 'Comic Sans MS'; // Set the font to 'Comic Sans MS'

  i = (i + 1) % itname.length;
}, 700);

