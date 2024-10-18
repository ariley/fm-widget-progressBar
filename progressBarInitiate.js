import ProgressBar from 'progressbar.js';
console.log("ProgressBar.js loaded:", typeof ProgressBar !== 'undefined');

// Initialize the ProgressBar object only if it's defined

	var bar = new ProgressBar.Line('#progressBarContainer', {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 1400,
		color: '#76c7c0',
		trailColor: '#eee',
		trailWidth: 4,
		svgStyle: {width: '100%', height: '100%'},
		text: {
			style: {
				// Text color
				color: '#999',
				position: 'absolute',
				right: '0',
				top: '30px',
				padding: 0,
				margin: 0,
				transform: null
			},
			autoStyleContainer: false
		},
		from: {color: '#FFEA82'},
		to: {color: '#008000'},
		step: function(state, bar) {
			bar.setText(Math.round(bar.value() * 100) + ' %');
			bar.path.setAttribute('stroke', state.color);
		}
	});

	// Example to set progress to 50%
	var progressValue = 10;
	bar.animate(progressValue / 100);  // Update progress bar
	window.fmUpdateProgress = function(progressValue) {
		bar.animate(progressValue / 100);  // Update progress bar
	};
	 // Function to update the progress note
	 window.fmupdateProgressNote = function (note) {
		document.getElementById('progressNote').innerText = note;  // Update the progress note text
	};
