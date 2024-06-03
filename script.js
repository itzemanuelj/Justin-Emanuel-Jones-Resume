{/* <script src="https://kit.fontawesome.com/c185e2d1c9.js" crossorigin="anonymous"></script> */}


var itname = ['TECH SUPPORT SPECIALIST', 'IT SUPPORT SPECIALIST',
 'HELP DESK TECHNICIAN','CUSTOMER SUPPORT TECHNICIAN'
,'TECHNICAL SUPPORT ENGINEER', 'IT HELP DESK ANALYST',
'TECHNICAL SUPPORT ANALYST', 'SERVICE DESK ANALYST', 
'IT SUPPORT ENGINEER','SUPPORT DESK TECHNICIAN', 'CUSTOMER SUPPORT ENGINEER', 'TECHNICAL SUPPORT CONSULTANT'
, 'USER SUPPORT SPECIALIST', 'DESKTOP SUPPORT TECHNICIAN', 'REMOTE SUPPORT TECHNICIAN', 'TECHNICAL SUPPORT ADVISOR', 
'APPLICATION SUPPORT ANALYST'
];
var i = 0;
var intervalId = setInterval(function() {
  document.getElementById('itname').innerHTML = itname[i];
  if (i == (itname.length - 1)) {
    i = 0;
  } else {
    i++;
  }
}, 700)



var fonts = [
    'Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 
            'Trebuchet MS', 'Lucida Console', 'Impact', 'Tahoma', 'Palatino', 
            'Garamond', 'Comic Sans MS', 'Arial Black'
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

    if (i == (itname.length - 1)) {
        i = 0;
    } else {
        i++;
    }
}, 700);