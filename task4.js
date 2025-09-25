// Task 4: DOM selection and manipulation
document.addEventListener('DOMContentLoaded', function() {
	// Select the section with container id
	const container = document.getElementById('container');

	// Select all items with class 'second'
	const seconds = container.querySelectorAll('.second');

	// Select list item with class 'third' inside ol only
	const olThird = container.querySelector('ol .third');

	// Add the main class to the div with footer class
	const footerDiv = document.querySelector('.footer');
	footerDiv.classList.add('main');

	// Remove the main class from the div with footer class
	footerDiv.classList.remove('main');

	// Create a new li element
	const newLi = document.createElement('li');
	newLi.textContent = 'four';

	// Append the li to the ul element
	const ul = container.querySelector('ul');
	if (ul) {
		ul.appendChild(newLi);
	}

	// Give the text "Hello!" to the section with container id (after all DOM manipulations)
	container.querySelectorAll('*').forEach(el => el.remove());
	container.textContent = 'Hello!';
});
