
const OMDbApiKey = '2fee485b';

$(document).ready(function () {

    loadRecommendedMovies();

$('#search-btn').click(function () {
    const query = $('#movie-search').val().trim();
    if (query !== "") {
          searchMovie(query);
          $('#recommended-section').hide();
}
});
  $('#movie-search').on('input', function () {
    if ($(this).val().trim() === ""){
   
          $('#recommended-section').show();
          $('#movie-results').empty();
    }
  });
});

function loadRecommendedMovies() {
    const recommendedMovies = [
        {title: "Extraordinary You", imdbID: "tt10826102" },
        {title: "Crash Landing on you", imdbID: "tt10850932"},
        {title: "Destined With You", imdbID: "tt27974068"},
        {title: "All Of Us Are Dead", imdbID: "tt14169960"},
        {title: "Love Next Door", imdbID: "tt30446769"},
        {title: "Alchemy of souls", imdbID: "tt20859920"},
        {title: "Tomorrow", imdbID: "tt18926162"},
        {title: "Sweet Home", imdbID: "tt11612120"},
        
    
    ];
   
    const carouselInner = $('#recommended-carousel-inner');
    carouselInner.empty();

    recommendedMovies.forEach((movie, index) => {
        $.ajax({
            url:`https://www.omdbapi.com/`,
            method: 'GET',
            data:{
                 i: movie.imdbID,
                 apikey: '2fee485b'
            },
    
            success: function(data){
                
                let poster = data.Poster !== "N/A" ? data.Poster : './assets/images/default.jpg';
                    

                    const activeClass = index === 0 ? "active" : "";
                    const movieItem =`
                    <div class="carousel-item ${activeClass}">
                    <img src="${poster}" class="d-block w-100" alt="${movie.title}" style="max-width: 300px; margin: auto;">
                     <div class="carousel-caption d-none d-md-block">
                   <h5>${movie.title}</h5>
                   <button class="btn btn-outline-light" onclick="getMovieDetails('${movie.imdbID}')">View Details</button>

         </div>
         </div>
         `;
         carouselInner.append(movieItem);

            },      
    error: function(){
       console.log("Error fetching movie data");
    }
        });
    });
}

    
$(document).ready(function() {

    if(localStorage.getItem('dark-mode')==='enabled'){
        $('body').addClass('dark-mode');
        $('#dark-mode-toggle').text('Light Mode');

    } else {
        $('#dark-mode-toggle').text('dark-mode');
    } 

    $('#dark-mode-toggle').click(function() {
    $('body').toggleClass('dark-mode');

    if ($('body').hasClass('dark-mode')) {
        $('#dark-mode-toggle').text('Light Mode');
        localStorage.setItem('dark-mode','enabled');

    } else {
        $('#dark-mode-toggle').text('dark-mode');
        localStorage.removeItem('dark-mode');
    }
});
});

updateFavoriteCount();


function updateFavoriteCount() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    $('#favorites-count').text(favorites.length);
}



function searchMovie(query) {
    $.ajax({
        url:`https://www.omdbapi.com/`,
        method: 'GET',
        data:{
             s: query,
             apikey: '2fee485b'
        },

        success: function(data){
            console.log('Movie Search Response:', data);
            if(data.Response === "True") {
                displayMovies(data.Search);
            } else {
        $('#movie-results').html('<p>No movies found. Please try again.</p>');
            }
        
            },
error: function(){
    $('#movie-results').html('<p>Error fetching data. Please try again later.</p>');
}
    });
};

function displayMovies(movies) {
    $('#movie-results').empty();
    movies.forEach(movie => {
        const poster = movie.Poster!== "N/A" ? movie.Poster : './assets/images/default-image.jpg';

        const movieCard = `
        <div class="col-md-3 col-sm-6 col-12 movie-card" data-aos="zoom-in">
        <img src="${poster}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        <button class="btn btn-outline-primary w-100" onclick="getMovieDetails('${movie.imdbID}')">View Details</button>
        </div>
        `;

        $('#movie-results').append(movieCard);

    });
}
function getMovieDetails(imdbID) {
 
   $.ajax({
    url:`https://www.omdbapi.com/`,
    method: 'GET',
    data:{
         i: imdbID,
         apikey: '2fee485b'
    },

    success: function(data){
        console.log('Movie Details Response:', data);
        if(data.Response === "True"){
        showMovieDetails(data);
        fetchTrailer(data.Title);
    } else {
        $('#movie-details').html('<p>Movie details not found.</p>');
    
    }
    
        },
    
    
error: function(){
    $('#movie-results').html('<p>Error fetching movie details. Please try again later.</p>');
}
    });

}

function fetchTrailer(movieTitle) {
    $.ajax({
        url:`https://www.googleapis.com/youtube/v3/search`,
        method: 'GET',
        data:{
             part: 'snippet',
             q: `${movieTitle} trailer`,
             type: 'video',
             key: 'AIzaSyDnw9QhSAomQ46lydMI_JDp-a8VVzFThV4'
        },
    
        success: function(response){
            
            const videoId = response.items[0]?.id?.videoId;
            if (videoId) {
                const trailerEmbed = `
                <h4>Watch the Trailer:</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
               allowfullscreen></iframe>
            `;
            $('#movie-details').append(trailerEmbed);
            }else{
                $('#movie-details').append('<p>No trailer found. </p>');
            }
        },

        error: function(){
            $('#movie-details').append('<p>Error fetching trailer. Please try again later.</p>');
        }

        });
    }


function showMovieDetails(movie) {
   
    const poster = movie.Poster !== "N/A" ? movie.Poster : './assets/images/defualt-image.jpg';
    $('#movie-details').html(`
        <img src="${poster}"alt="${movie.Title}" style="width: 300px; border-radius: 8px;">
        <h2>${movie.Title} (${movie.Year})</h2>
        <p><strong>Genre:</strong>${movie.Genre}</p>
        <p><strong>Rating:</strong>${movie.imdbRating}</p>
        <p><strong>Plot:</strong>${movie.Plot}</p>
        <button class="btn btn-outline-secondary" onclick="toggleFavorite('${movie.imdbID}', '${movie.Title.replace(/'/g, "\\'")}')">
        ${isFavorite(movie.imdbID) ? 'Remove from Favorites': 'Add to Favorites'} </button>
   <br><br>
        <button class="btn btn-primary" onclick="backToMovies()">Back to Movies</button>     
        </div>

    `);
        $('#movie-results').hide();
        $('#movie-details').show();
       
    
    }
    function backToMovies() {
        $('#movie-results').show();
        $('#movie-details').empty();
    }
    


function toggleFavorite(imdbID, title) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) ||[];
    const movieExists = favorites.some(movie => movie.imdbID === imdbID);
       
    if(movieExists) {
        favorites = favorites.filter(movie => movie.imdbID !== imdbID);
        Swal.fire('Removed!',`${title} has been removed from your favorites.`,'info');
       
    }else {
        
        favorites.push({imdbID, title});
        Swal.fire('Added!',`${title} has been added to your favorites.`, 'success');
       
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));

}

function isFavorite(imdbID) {
         let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
         return favorites.some(movie => movie.imdbID === imdbID);
}
