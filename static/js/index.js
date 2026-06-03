window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    bulmaSlider.attach();

    // Results tables: tabbed views (one table at a time, saves vertical space)
    var resultsTabs = document.querySelectorAll('#results-tabs li');
    resultsTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            resultsTabs.forEach(function(t) { t.classList.remove('is-active'); });
            tab.classList.add('is-active');
            document.querySelectorAll('.results-panel').forEach(function(panel) {
                panel.style.display = 'none';
            });
            document.getElementById(tab.dataset.target).style.display = '';
        });
    });

})
