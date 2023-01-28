/*var mylogin = 'Taxir';
var worker = 'Time';
var login = prompt('Your name');

if (mylogin===login){
    console.log('success')
}else if(login==worker){
    console.warn('good but the systems are not displayed')
}
else{
    console.error('login is incorrect')
}*/

var number = prompt('Enter a value to bump into')*1
alert(number)

switch (number) {
    case 7:
        alert('Monday')
        break;
    case 6:
            alert('Tuesday')
     break;
    case 5:
          alert('Wednesday')
      break;
    case 4:
        alert('Thursday')
     break;
     case 3:
        alert('Friday')
        break;
    case 2:
        alert('Saturday')
    break;
    case 1:
        alert('Sunday')
     break;
    default:
        alert('This day does not exist')
        break;
}


document.getElementsByTagName("h1")
[0].style.fontSize = "6vw";

