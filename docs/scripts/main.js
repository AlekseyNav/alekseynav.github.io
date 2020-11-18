var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
	//console.log("1");
	
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		//console.log("2");
		myImage.setAttribute('src', 'images/firefox2.png');
	} else {
		//console.log("3");
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}
	
	//console.log(myImage);
	//console.dir(myImage);
	
	var myButton = document.querySelector('button');
	var myHeading = document.querySelector('h1');
}

function setUserName() {
  var myName = prompt('Please, enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is Cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  //console.log("1");
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

var myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}
