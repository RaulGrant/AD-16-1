// Task 3: Show alert with info about links
document.addEventListener('DOMContentLoaded', function() {
	// Create button for the task
	const btn = document.createElement('button');
	btn.textContent = 'Show Link Info';
	btn.className = 'btn btn-info mb-3';
	document.body.insertBefore(btn, document.body.firstChild);

	btn.addEventListener('click', function() {
		const links = document.querySelectorAll('a');
		const numLinks = links.length;
		const firstLink = links[0] ? links[0].href : 'N/A';
		const lastLink = links[numLinks-1] ? links[numLinks-1].href : 'N/A';
		alert(`Número de links: ${numLinks}\nPrimer link: ${firstLink}\nÚltimo link: ${lastLink}`);
	});
});
