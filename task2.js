// Task 2: Print first and last name from form to console
document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form1');
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		const fname = form.elements['fname'].value;
		const lname = form.elements['lname'].value;
		console.log('First name:', fname);
		console.log('Last name:', lname);
	});
});
