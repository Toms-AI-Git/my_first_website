
let movies = [];  // This will store the movie data from the JSON

// Load the JSON data from the movies.json file into the movies array
fetch('movies.json')
    .then(response => response.json())
    .then(data => {
        movies = data;
        console.log('Fetched movies data:', movies);
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });

// Function to search movies based on user input
function searchMovie() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';  // Clear any previous suggestions

    // Filter movies based on user input
    const filteredMovies = movies.filter(movie => movie.original_title && movie.original_title.toLowerCase().includes(input));

    // Show a maximum of 10 suggestions
    for(let i = 0; i < Math.min(10, filteredMovies.length); i++) {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        div.innerHTML = filteredMovies[i].original_title;
        div.onclick = function() {
            selectMovie(filteredMovies[i]);
            document.getElementById('searchInput').value = filteredMovies[i].original_title;
        };
        suggestions.appendChild(div);
    }
}

// Function to display movie data when a movie is selected from suggestions
function selectMovie(movie) {
    document.getElementById('release_date').value = movie.release_date;
    document.getElementById('budget').value = movie.budget;
    document.getElementById('revenue').value = movie.revenue;
    document.getElementById('vote_average').value = movie.vote_average;
    document.getElementById('vote_count').value = movie.vote_count;
    document.getElementById('overview').value = movie.overview;
    document.getElementById('tagline').value = movie.tagline;
    document.getElementById('suggestions').innerHTML = '';
}
