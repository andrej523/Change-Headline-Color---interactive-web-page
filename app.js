const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () =>
								   {
								       myHeading.style.color = myTextInput.value;
								   }
					     );