/*global $, document, alert, Swal, console, localStorage, button,*/


const OMDbApiKey = "2fee485b"; //OMDB API key for fetching data

$(document).ready(function () {

    loadRecommendedMovies(); //Load reccomended movies on page load

    // Search button click event
$("#search-btn").click(function () {
    const query = $("#movie-search").val().trim(); //Get the search input value


        if (!validateInput(query)) {
            return;
        }
          searchMovie(query); // Call function to search for movies
          $("#recommended-section").hide(); //Hide recommended movies section
          $("#back-to-recommendations-btn").show();
        //Show back to recommendations button
         $("#movie-details").hide(); //Hide movie details
        $("#movie-results").show(); //Show movie results

});

//Back to recommendations button click event
$("#back-to-recommendations-btn").click(function (){
    $("#movie-results").empty(); // Clear movie results
    $("#recommended-section").show(); // show recommended section
    $("#back-to-recommendations-btn").hide();
    // Hide back to recommendations button

});
// Show recommendations when search input is cleared
  $("#movie-search").keypress(function(e) {
     if(e.which === 13) {
        const query = $("#movie-search").val().trim();

        if (!validateInput(query)) {
            return;
        }
            searchMovie(query);

          $("#recommended-section").hide();  // Show reccomendations
          $("#back-to-recommendations-btn").hide(); // Hide buttom
    }
  });

  function validateInput(query) {
    if (query === "") {
        showError("Please enter a movie/drama name.");
        return false;
    }

    if (!(/^[a-zA-Z0-9 ]+$/).test(query)) {
        showError("Please enter a valid movie/drama name (letters only).");
        return false;
    }
    clearError();
    return true;
  }

  function showError(message) {
    $("#search-error").text(message).show();
    $("#movie-results").empty().hide();
    $("#movie-details").empty().hide();
  }

  function clearError() {
    $("#search-error").text("").hide();
  }
});



    const query = "movies"; // Search query for drama movies
     const type = "movie"; // Type of search
     const page = 1;

     function fetchAndPopulateMovies(){
     $.ajax({
         error: function(){
         console.error("Error fetching movies from omdb.");
   },
            method: "GET",
            success: function(data) {
                if (data.Response === "True") {
                    const movies = data.Search;
                    const movieSelect = $("#movie-select");
                    movieSelect.empty(); // Clear previous movies
                    movieSelect.append
                    ("<option value=''>Select a movie</option>");

                    movies.forEach(function(movie) {
                 movieSelect.append
                 (`<option value="${movie.imdbID}">
                 ${movie.Title}</option>`);
        });

    } else {
        console.error("No movies found.");
    }
},
  url: `https://www.omdbapi.com/?s=${query}
         &type=${type}&page=${page}&apikey=${OMDbApiKey}`
});

}


function handleFormSubmission(event) {
    const selectedMovie = $("#movie-select").val();
    const selectedDate = $("#date").val();
    const selectedTime = $("#time").val();
    const numberOfTickets = $("#tickets").val();

    if(!selectedMovie || !selectedDate || !selectedTime || !numberOfTickets) {
        alert("Please fill in all fields.");
        return;
    }

    alert(`booking confirmed!\nMovie: ${selectedMovie}\nDate;
    ${selectedDate}\nTime;
    ${selectedTime}\nTickets: ${numberOfTickets}`);
    console.log("Form Data: ",
                { numberOfTickets, selectedDate, selectedMovie,
                 selectedTime
                });

    $("ticket-form")[0].reset();
}
$("#ticket-form").on("submit", handleFormSubmission);

fetchAndPopulateMovies();

// Function to load recommended movies
  function loadRecommendedMovies() {
    const recommendedMovies = [
        {imdbID: "tt10826102", title: "Extraordinary You"},
        {imdbID: "tt10850932", title: "Crash Landing on you"},
        {imdbID: "tt27974068", title: "Destined With You"},
        {imdbID: "tt14169960", title: "All Of Us Are Dead"},
        {imdbID: "tt30446769", title: "Love Next Door"},
        {imdbID: "tt20859920", title: "Alchemy of souls"},
        {imdbID: "tt18926162", title: "Tomorrow"},
        {imdbID: "tt11612120", title: "Sweet Home"}


    ];
    const carouselInner = $("#recommended-carousel-inner");
    carouselInner.empty(); // Clear previous recommendations

    // Loop through recommended movies and fetch data from OMDB Api
    recommendedMovies.forEach(function(movie, index) {
        $.ajax({
           data: {
                apikey: "2fee485b",
                i: movie.imdbID
            },
            error: function(){
       console.log("Error fetching movie data");
    },
            method: "GET",
            success: function(data){
               let poster = (
               data.Poster !== "N/A"
               ? data.Poster
               : "./assets/images/default.jpg"
               );
               const activeClass = (
               index === 0
               ? "active"
               : ""
                   );
   // First item should be active
             const movieItem =`
                    <div class="carousel-item ${activeClass}">
                    <img
                    src="${poster}"
                    alt="${movie.title}"
                    class="d-block">
                     <div class="carousel-caption">
                   <h5>${movie.title}</h5>
                   <button
               class="btn btn-outline-dark view-details-btn"
                   data-imdbid="${movie.imdbID}">View Details</button>

         </div>
         </div>
         `;

       carouselInner.append(movieItem);

  },
            url:"https://www.omdbapi.com/"
        });
    });
  }

  $(document).on("click", ".view-details-btn", function () {
      const imdbID = $(this).data("imdbid");
    getMovieDetails(imdbID);
  });
    // Dark-mode toggle functionality
    $(document).ready(function() {

        if(localStorage.getItem("dark-mode")==="enabled"){
            $("body").addClass("dark-mode");
            $("#dark-mode-toggle i").removeClass("fa-moon").addClass("fa-sun");
        } else {
            $("#dark-mode-toggle i").removeClass("fa-sun").addClass("fa-moon");
        }
        $("#dark-mode-toggle").click(function() {
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            $("#dark-mode-toggle i").removeClass("fa-moon").addClass("fa-sun");
            localStorage.setItem("dark-mode","enabled");

        } else {
            $("#dark-mode-toggle i").removeClass("fa-sun").addClass("fa-moon");
            localStorage.removeItem("dark-mode");
        }
    });
    });


updateFavoriteCount(); //Update favourite count on page load

// Function to update favourite count
    function updateFavoriteCount() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    $("#favorites-count").text(favorites.length);
}


// Function to search for movies/dramas using OMDB API
 function searchMovie(query) {
    $.ajax({
        data:{
            apikey: "2fee485b",
            s: query
        },
        error: function(){
$("#movie-results").html("<p>Error fetching data. Please try again later.</p>");
},
        method: "GET",

        success: function(data){
            console.log("Movie Search Response:", data);
            if(data.Response === "True") {
                displayMovies(data.Search);
            } else {
        $("#movie-results").html("<p>No movies found. Please try again.</p>");
            }
            },


        url:"https://www.omdbapi.com/"
    });
}

// Function to display  searched movies/dramas on screen

  function displayMovies(movies) {
    $("#movie-results").empty();
    movies.forEach(function(movie) {
     const poster = (
        movie.Poster !== "N/A"
           ? movie.Poster
           : "./assets/images/default-image.jpg"
     );

        const movieCard = `
        <div class="col-md-3 col-sm-6 col-12 movie-card" data-aos="zoom-in">
       <img
       src="${poster}" alt="${movie.Title}"
       class="clickable-poster" data-imdbID="${movie.imdbID}"
       style="cursor: pointer;">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>

        </div>
        `;

        $("#movie-results").append(movieCard);

    });

    $(".clickable-poster").click(function(event) {
        const imdbID = $(event.currentTarget).data("imdbid");
        getMovieDetails(imdbID);
    });
}

// Function to fetch movie details from OMDB API
  function getMovieDetails(imdbID) {
   $.ajax({
     data:{
         apikey: "2fee485b",
         i: imdbID
    },
       error: function(){
$("#movie-results").html
("<p>Error fetching movie details. Please try again later.</p>");
},
       method: "GET",

    success: function(data){
        console.log("Movie Details Response:", data);
        if(data.Response === "True"){
        showMovieDetails(data);
        fetchTrailer(data.Title);
    } else {
        $("#movie-details").html("<p>Movie details not found.</p>");
    }
        },
     url:"https://www.omdbapi.com/"
    });

}
// Function to fetch movie trailers from Youtube API
  function fetchTrailer(movieTitle) {
    $.ajax({
        data:{
             key: "AIzaSyDnw9QhSAomQ46lydMI_JDp-a8VVzFThV4",
             part: "snippet",
             q: `${movieTitle} trailer`,
             type: "video"
        },
         error: function(){
$("#movie-details").append
("<p>Error fetching trailer. Please try again later.</p>");
        },
        method: "GET",
        success: function(response){
            const videoId = response.items[0]?.id?.videoId;
            if (videoId) {
                const trailerEmbed = `
                <h4>Watch the Trailer:</h4>
           <iframe width="480"
           height="315"
           src="https://www.youtube.com/embed/${videoId}"
         frameborder="0" allow="accelerometer;
         autoplay; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen></iframe>
            `;
            $("#movie-details").append(trailerEmbed);
            }else{
                $("#movie-details").append("<p>No trailer found. </p>");
            }
        },

    url:`https://www.googleapis.com/youtube/v3/search`

        });
    }

// Function to show movie details when ypu press view details
  function showMovieDetails(movie) {

    const poster = (
          movie.Poster !== "N/A"
             ? movie.Poster
             : "./assets/images/defualt-image.jpg"
        );
    $("#movie-details").html(`
       <img
        src="${poster}"alt="${movie.Title}"
        style="width: 300px; border-radius: 8px;">
        <h2>${movie.Title} (${movie.Year})</h2>
        <p><strong>Genre:</strong>${movie.Genre}</p>
        <p><strong>Rating:</strong>${movie.imdbRating}</p>
        <p><strong>Plot:</strong>${movie.Plot}</p>
        <button id="favorite-button" class="btn btn-outline-secondary">
${(
      isFavorite(movie.imdbID)
          ? "Remove from Favorites"
          : "Add to Favorites"
)}
          </button>
   <br><br>
 <button class="btn btn-primary"
 onclick="backToMovies()">Back to Movies</button>
        </div>

    `);

    $("#favorite-button").click(function() {
        toggleFavorite(movie.imdbID, movie.Title);
    });
        $("#movie-results").hide();
        $("#movie-details").show();
    }
    function backToMovies() {
        $("#movie-results").show();
        $("#movie-details").empty();
    }

// Function to check if a movie/drama is in favourites

    function toggleFavorite(imdbID, title) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) ||[];
    const movieExists = favorites.some((movie) => movie.imdbID === imdbID);

    if(movieExists) {
        favorites = favorites.filter((movie) => movie.imdbID !== imdbID);
Swal.fire("Removed!",`${title} has been removed from your favorites.`,"info");
   // When you remove from favourites
   // a pop up should display on the bottom of the screen.
    }else {

        favorites.push({imdbID, title});
   Swal.fire("Added!",`${title} has been added to your favorites.`, "success");
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));

    updateFavoriteCount();
    updateFavoriteButton(imdbID);

}

function updateFavoriteButton(imdbID) {
    const favoriteButton = $("#favorite-button");
    if(isFavorite(imdbID)) {
        button.text("Remove from Favorites");
    } else {
        button.text("Add to Favorites");

    }
}

  function isFavorite(imdbID) {
         let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
         return favorites.some((movie) => movie.imdbID === imdbID);
  }
