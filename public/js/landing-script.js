// define global variables


// define relevant DOM elements
var day1Img = $('#day-1');
var day2Img = $('#day-2');
var day3Img = $('#day-3');

// Functions here



// Function to save selected workout parameters to local storage
function saveDay(day) {
    localStorage.setItem('current-workout',JSON.stringify(day));
}

// Event listeners for quick links
day1Img.on('click', function() {
    saveDay('Day 1');
    document.location.href = 'workout.html';
});
day2Img.on('click', function() {
    saveDay('Day 2');
    document.location.href = 'workout.html';
});
day3Img.on('click', function() {
    saveDay('Day 3');
    document.location.href = 'workout.html';
});