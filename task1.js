// Task 1: Change paragraph style on button click
document.addEventListener('DOMContentLoaded', function() {
	const btn = document.getElementById('jsstyle');
	const para = document.getElementById('text');
	btn.addEventListener('click', function() {
		para.style.fontFamily = 'Roboto, Arial, sans-serif';
		para.style.fontSize = '2rem';
		para.style.color = '#0d6efd'; // Bootstrap primary
		para.classList.add('fw-bold', 'fst-italic', 'bg-light', 'p-2', 'rounded');
	});
});
