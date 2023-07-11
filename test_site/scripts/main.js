let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.jpg') {
    myImage.setAttribute ('src','images/firefox2.jpg');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('請輸入你的名字');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '烏龜很可愛嗎？' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = '烏龜很可愛嗎？' + storedName;
}

myButton.onclick = function() {
  setUserName();
}