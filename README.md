#README: CineLens(http://localhost:5501/) [CineLens]

Purpose of project 
The goal of CineLens is to create a user-friendly, interactive movie discovery platform that offers a variety of features inspiring popular movie-related websites like IMDb, trakt.tv etc. The platform will not only help users find and explore movies, but also allow them to manage their movie preferences, watch trailers, track their favourites, and create a more personalised movie experience.

Features and functionalities:
• Movie search and Discovery:
  • Users can search for movies by title 
  • Movie suggestions and autocomplete feature for search bar.
  • Display movie details including title, year of release, genres, rating, plot, etc.

• User Interaction and Engangement:
  • light and Dark mode toggle for better user experience 
  • Interactive movie cards with hover animations.
  • Movie posters, Descriptions, and ratings for each search result.

• Detailed Movie Information:
  • Click on any movie to view more detailed information such as:
  • Genre
  • Release year 
  • Plot summary 
  • Cast and crew details 
  • Movie trailer 
  • Gallary of Images

• User Favorites and Wish List: 
  • Add movies to favorites and track what movies the user likes.
  • Remove from favorites functionality 
  • Movies are stored in in browsers localStorage for persistence.
 
• User Accounts : 
  • Users can signup, login and maintain a personalised account.
  • Once Logged in, users can:
  • Save Favorite movies to their profile
  • Access a personal Watchlist to keep track of movies they want to watch in the future.

• Movie trailers and external links:
  • Watch trailers directly within the app.
  • Provide external links to buy or download the movie from third party services like Netflix, Amazon, etc.
  
• Corousel for featured movies: 
  • Dynamic corousel showing featured, trending or top-rated movies
  • The corousel can be clicked to navigate to movie details directly.

• Interactive UI Components: 
  • Mobile-responsive layout 
  • Enhanced animations and transitions for smooth user experience.
  • A variety of interactive UI elements including buttons, sliders, carousels and modals.

Technologies Used : 

• Front End 
  • HTML5 : For structuring the web pages
  • CSS3 : For styling and making the website responsive
  • Javascript (jQuery) : for interactivity and DOM manipulation 
  • Bootsrap : For a responsive and sleek design
  • AOS : (Animate on scroll) : For smooth scrolling animations.
  • swiper : For creating the movie carousel.
  • noUiSlider : For interactive movie filters( rating, release year, etc)
  • Lottie.js : For animations and loading visuals.

• API's 
  • Trakt Tv API : For movie data, including movie titles, images, ratings, and other details. 
  • SweetAlert : For displaying notifications when adding or removing movies from favourites.

• Back End
  • LocalStorage is used for storing user favorites, ensuring data persistence even after page refresh.

Future Enhancements: 

User Authentication 
  • Implement user Login, sign-up authentication using firebase and another backend service.
Movie rating System: 
  • Allow users to rate movies display average ratings
Personalised Movie Recommendation:
  • Implement a recommendation sytem based on user preferences, watch history, of similar genres.
Improved Movie details:
  • Add features like movie reviews, box office data, steaming availability etc
Integration and external API's

Internal or external reference:
- Reponsiveness - https://getbootstrap.com/
- used jquery for my project - https://jquery.com/
- cdn used https://www.bing.com/search?q=sweetalert2%20cdn&qs=n&form=QBRE&sp=-1&lq=0&pq=&sc=0-0&sk=&cvid=0C55985B3F3B49ADB5289391744D575C&ghsh=0&ghacc=0&ghpl=
- icons used from - https://fontawesome.com/
- Api used - https://www.omdbapi.com/
  
Commit Messages: 
![commit message](https://github.com/user-attachments/assets/230bcdc9-d26e-451e-90fa-2488b9360dcb)
![commit message1](https://github.com/user-attachments/assets/c69c789b-84bb-450d-9914-bd1bc568ef4e)

Finished project - screenshots 
  ![cine1](https://github.com/user-attachments/assets/cb4a817d-5b65-4ef3-9c18-511a48e36a7b)
![cine2](https://github.com/user-attachments/assets/b087e4d0-60b1-4e6d-bbb5-dbb9d0c9d18f)
![cine3](https://github.com/user-attachments/assets/552d32b0-a760-460d-a440-e1612d50a22e)
![cine4](https://github.com/user-attachments/assets/451ef73a-7918-4b00-b5d5-58d8fc6886dc)
![cine5](https://github.com/user-attachments/assets/0aac2b04-e034-486c-81f9-31e464e87e06)
![cine6](https://github.com/user-attachments/assets/e75c7280-5a16-4440-8d44-12ba2451d375)
![cine7](https://github.com/user-attachments/assets/c1f860cb-274b-4f57-94d6-a2795a332408)

Deployment 

This project was developed by using VSCODE, committed to git and pushed to Github.

To deploy this page to Github pages from it's GitHub repository.

Follow these steps:

1. Log into GitHub
2. There will be a list of repositories, make sure to choose cine-lens12.
3. From the menu, on top of the page select settings.
4. When you have done this, scroll down to pages section.
5. Inside the pages there will be a Build and deployment section.
6. Under source click the drop down menu, and select 'main' make sure the drop down next to main, you have selected root.
7. Once you have selected main, the project will be deployed.
8. Refresh the page, and the link will displayed above on the pages section.

How to run this project:
1. Go to github repository(cine-lens12)
2. Click the code button and copy the repository Url: https://imzzz01.github.io/cine-lens12/
3. Open your terminal, and run bash
4. Clone your repository open terminal and run git clone 
5. Once my project opens up on VScode, run the project.


