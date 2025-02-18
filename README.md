Links for screenshots
1. UX Design : Wireframe: https://app.diagrams.net/#W4825E675D30ACEDA%2F4825E675D30ACEDA!s5809ad90f73b4c73adff7d7a3efbcb76#%7B%22pageId%22%3A%2203018318-947c-dd8e-b7a3-06fadd420f32%22%7D

#README: CineLens(http://localhost:5501/) [CineLens]

Purpose of project 
The goal of CineLens is to create a user-friendly, interactive movie discovery platform that offers a variety of features inspiring popular movie-related websites like IMDb, trakt.tv etc. The platform will not only help users find and explore movies, but also allow them to manage their movie preferences, watch trailers, track their favourites, and create a more personalised movie experience.

CineLens is not just a movie database; it is an interactive platform that empowers users to engage with their favourite films and shows in dynamic ways. Whether you're looking for recommendations based on your viewing habits, tracking how many movies you have added and removed from favourites, or simply enjoying trailers and detailed movie information, cinelens enhances every step of your cinematic journey.

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

• User Favorites: 
  • Add movies to favorites.
  • Remove from favorites functionality 
  • Movies are stored in in browsers localStorage for persistence.
 
• Movie trailers and external links:
  • Watch trailers directly within the app.
 
  Personalised Movie Recommendation:
  • Implement a recommendation section.
  • Corousel for movie recommendations. 
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
 
• API's 
  • Trakt Tv API : For movie data, including movie titles, images, ratings, and other details. 
  • SweetAlert : For displaying notifications when adding or removing movies from favourites.

• Back End
  • LocalStorage is used for storing user favorites, ensuring data persistence even after page refresh.

Future Enhancements: 
User Accounts: 
  • Users can signup, login and maintain a personalised account.
  • Once Logged in, users can:
  • Save Favorite movies to their profile
  • Access a personal Watchlist to keep track of movies they want to watch in the future.

User Authentication 
  • Implement user Login, sign-up authentication using firebase and another backend service.

Movie rating System: 
  • Allow users to rate movies display average ratings

Improved Movie details:
  • Add features like movie reviews, box office data, steaming availability etc

CineLens is designed to make movie exploration easier, more enjoyable and customised to your preferences. This platform is built to enhance your movie-watching experience.

Integration and external API's

Internal or external reference:
1. I have used grid system from bootstrap, to ensure that my APP is responsive on all devices such as Laptops, PC, Mobile etc (Responsiveness) https://getbootstrap.com/
2. I have used jquery for my project as it makes it easy to use javascript for my website - https://jquery.com/
3. I have cdn used sweet alert 2 cdn to display notification when a movie is added to favourites and also removed. -  https://www.bing.com/search?q=sweetalert2%20cdn&qs=n&form=QBRE&sp=-1&lq=0&pq=&sc=0-0&sk=&cvid=0C55985B3F3B49ADB5289391744D575C&ghsh=0&ghacc=0&ghpl=
4. I have used icons from fontawesome such as previous and next for my carousel slides.- https://fontawesome.com/
5. I have used an omdb api to handle my app, where it fetches data, like movies, posters, etc - https://www.omdbapi.com/

UX Design Wireframe (Draw.IO)
![image](https://github.com/user-attachments/assets/e5c084ee-8be1-492a-b8df-4fce41b73fa8)

![image](https://github.com/user-attachments/assets/053ac37f-d3aa-44f9-8731-904800b5e2b1)

![image](https://github.com/user-attachments/assets/0480a04e-4128-4395-a580-531978476861)


HTML and CSS validation 
![image](https://github.com/user-attachments/assets/256e24ce-b445-4d1d-a39c-eab55aac19a8)

![image](https://github.com/user-attachments/assets/f177ca2b-258a-4250-bd11-0d216f30899f)


  
Commit Messages: 
![commit message](https://github.com/user-attachments/assets/230bcdc9-d26e-451e-90fa-2488b9360dcb)

![commit message1](https://github.com/user-attachments/assets/c69c789b-84bb-450d-9914-bd1bc568ef4e)
Mnaual testing and Automated testing

Manual testing: This type of test uses an application's functions and features. It is done by writing down test cases. This test can be quite helpful; however, we tend to make mistakes and are bound to create errors. Also, it could be time-consuming. Different types of manual testing exist, such as white box testing, black box testing, and grey box testing. Each test has its purpose in detecting bugs and how to get rid of those bugs from the application.

Key principles of manual testing:
- Test execution by humans: This is a test performed by humans, for example, creating a test plan with a description of the test, expected outcome, errors, screenshots, and testing whether each test of a function or feature has passed or failed.

- Test cases and documentation:  This ensures that all test cases meet the documentation's requirements.
Exploratory testing: Tests can sometimes be tested through exploratory testing, which helps detect application defects. We are exploring the application, and in many cases, some errors and bugs may not have made it into the test cases.

- Flexibility: This type of test allows changes after finding new errors or bugs within the application or through user feedback.
Types of manual testing:

- White box testing: This type of test is based on knowledge and logic; you would need a basic understanding of the code.
  
- Black box testing:  This is used to test the software's functionality.
  
- Grey box testing: Uses both white box and black box testing.

Advantages of manual testing:

- Fast and gives accurate visual feedback
- It is efficient if you want to make changes to test cases.
- Flexibility
Disadvantages:

- Less reliable
- Time-consuming
- You need experience.
- Expensive
  
Automated testing: This involves using automation tools to execute the test cases. In this test, special software is used to check and test a software product instead of manually testing the application.

Key principles of automated testing:

- Test execution by tools: Tests used: selenium, JUnit or TestNg.
  
- Repeatability:  Automates tasks which are helpful for testers.
  
- Speed and efficiency: Automated tests can be executed faster than manual testing.
  
- Consistent and reliable: Automated tests are consistent, with no human errors.
  
When to use automated testing:

- Performance Testing: This tests how the app handles large user volumes.

- Large-scale projects: When the project has many features and frequent updates.


Manual test plan:
![image](https://github.com/user-attachments/assets/c2768831-8250-476d-9d0e-aba67d38486d)

![image](https://github.com/user-attachments/assets/1597cdb0-72b8-4bc3-bf80-8b2ce22e1e4c)

![image](https://github.com/user-attachments/assets/e3ae8453-c2ba-4c05-be26-c08e970fbf6c)

![image](https://github.com/user-attachments/assets/6b3e3650-b530-40ba-b2d3-2f3d574de70b)

![image](https://github.com/user-attachments/assets/97ab625a-86aa-4750-8fff-31e9be31bfd6)



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
9. https://imzzz01.github.io/cine-lens12/

How to run this project:
1. Go to github repository(cine-lens12)
2. Click the code button and copy the repository Url: https://github.com/Imzzz01/cine-lens12
3. Open your terminal, and run bash
4. Clone your repository open terminal and run git clone 
5. Once my project opens up on VScode, run the project.


