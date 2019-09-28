var popup = document.querySelector('.login-form');
	var button = document.querySelector('.login-list');
	var close = document.querySelector('.close-btn');
	
	button.addEventListener('click', function(evt){
		evt.preventDefault();
		popup.classList.remove('hidden');
		
	});

	close.addEventListener('click', function(evt) {
		evt.preventDefault();
		popup.classList.add('hidden');
	});

	var map = document.querySelector('.map');
	var mapsButton = document.querySelector('.footer-search');
	var mapsClose = map.querySelector('.close-btn');

	
	mapsButton.addEventListener('click', function(evt){
		evt.preventDefault();
		map.classList.remove('hidden');
		
	});

	mapsClose.addEventListener('click', function(evt) {
		evt.preventDefault();
		map.classList.add('hidden');
	});