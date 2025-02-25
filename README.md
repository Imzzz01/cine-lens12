## Table of Contents
- [Purpose of Project](#purpose)
- [Features and Functionalities](#features)
- [Technologies used](#technologies)
- [Future Enhancements](#future-enhancements)
- [Design Rationale](#design-rationale)
- [Internal and External Code](#internal-and-external-code)
- [Validation](#validator)
- [Commit Messages](#internal-and-external-code)
- [Principles of Manual and Automated Testing](#principles-of-manual-and-automated-testing)
- [Finished Project](#finished-project)
- [Deployment](#deployment)

## Links For UX Design | Gant chart | Test Plan
- [UX Design : Wireframe](https://app.diagrams.net/?libs=general;mockups#W4825E675D30ACEDA%2F4825E675D30ACEDA!s1169167e4693446bb66b12b80a7a3ab2#%7B%22pageId%22%3A%22f1b7ffb7-ca1e-a977-7cf5-a751b3c06c05%22%7D)
   
- [Gant Chart](https://1drv.ms/x/c/4825e675d30aceda/EfiedI_ICOpJopS4BJ0eRKwB5wiZRHm7Uah5UheRfxJrqA?e=4OMedM)

   
- [3.2 | 3.4 | 3.5 Test Plan](https://1drv.ms/w/c/4825e675d30aceda/EclbvSjMwedIm5xbLyPRkigBwNP-CqiJ3agtAoVuy3-TQw?e=nyPEjN)


#README: CineLens(http://localhost:5501/) [CineLens]
# Purpose of Project <a id="purpose"></a>

The goal of CineLens is to create a user-friendly, interactive movie discovery platform that offers a variety of features inspiring popular movie-related websites like IMDb, trakt.tv etc. The platform will not only help users find and explore movies, but also allow them to manage their movie preferences, watch trailers, track their favourites, and create a more personalised movie experience.

CineLens is not just a movie database; it is an interactive platform that empowers users to engage with their favourite films and shows in dynamic ways. Whether you're looking for recommendations based on your viewing habits, tracking how many movies you have added and removed from favourites, or simply enjoying trailers and detailed movie information, cinelens enhances every step of your cinematic journey.

# Features and Functionalities<a id="features"></a>

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

# Technologies <a id="technologies"></a>
 
• Front End 
  • HTML5 : For structuring the web pages
  
  • CSS3 : For styling and making the website responsive
  
  • Javascript (jQuery) : for interactivity and DOM manipulation 
  
  • Bootsrap : For a responsive and sleek design
 
• API's 
  • imdb API : For movie data, including movie titles, images, ratings, and other details. 
  
  • SweetAlert : For displaying notifications when adding or removing movies from favourites.

• Back End
  • LocalStorage is used for storing user favorites, ensuring data persistence even after page refresh.

# Future enhancements <a id="future-enhancements"></a>
 
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
    Integration and external API's
    
CineLens is designed to make movie exploration easier, more enjoyable and customised to your preferences. This platform is built to enhance your movie-watching experience.

# Design Rationale <a id="design-rationale"></a>

Design Overview:

The CineLens interface is designed to provide user experience for discovering and booking movies and dramas. The layout prioritises ease of navigation, with clear sections for recommendations, favorites and ticket booking.

Color scheme:

- Primary Color: Blue(#007bff) - Used for buttons and interactive elements.
- Secondary Color: Light Grey (#f5f5f5) - Applied as the background color to ensure readability.
- Accent Color: Dark Blue (#0056b3) - Hover color
- Text Color: Dark Grey (#333) Ensures readability against the light background.
- Dark Mode Background: Dark Gray (#333) - Used for body background in dark mode.
- Dark mode text: White (#fff) - Ensures readablity in dark mode.

Type of fonts used: 

- Font Family: Sans-sarif fonts like Arial are used for clean appearance.
- Font-Sizes: Larger fonts for headings and smaller fonts for body text.

Layout:

- Header: Contains the logo and nav links (Home, Recommendations, favorites, book tickets)
- Search Bar: Placed in the center to allow users to quickly find dramas and movies.
- Recommendations section: Displays movie/drama poster in carousel, with view details. 

User Experience:

The design primarly focuses on efficiency and readability, ensuring that users are able to find their movies and dramas and having the ability to book without any complexity. 


# Internal and External Code <a id="internal-and-external-code"></a>

1. I have used grid system from bootstrap, to ensure that my APP is responsive on all devices such as Laptops, PC, Mobile etc (Responsiveness) https://getbootstrap.com/
2. I have used jquery for my project as it makes it easy to use javascript for my website - https://jquery.com/
3. I have cdn used sweet alert 2 cdn to display notification when a movie is added to favourites and also removed. -  https://www.bing.com/search?q=sweetalert2%20cdn&qs=n&form=QBRE&sp=-1&lq=0&pq=&sc=0-0&sk=&cvid=0C55985B3F3B49ADB5289391744D575C&ghsh=0&ghacc=0&ghpl=
4. I have used icons from fontawesome such as previous and next for my carousel slides.- https://fontawesome.com/
5. I have used an omdb api to handle my app, where it fetches data, like movies, posters, etc - https://www.omdbapi.com/

# Validation <a id="validator"></a>

![image](https://github.com/user-attachments/assets/256e24ce-b445-4d1d-a39c-eab55aac19a8)

![image](https://github.com/user-attachments/assets/f177ca2b-258a-4250-bd11-0d216f30899f)


# Commit Messages <a id="commit-messages"></a>

![commit message](https://github.com/user-attachments/assets/230bcdc9-d26e-451e-90fa-2488b9360dcb)

![commit message1](https://github.com/user-attachments/assets/c69c789b-84bb-450d-9914-bd1bc568ef4e)

# Principles of Manual and Automated Testing <a id="principles-of-manual-and-automated-testing"></a>
3.1 

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
  
Automated testing: This involves using automation tools to execute the test cases. Instead of manually testing the application, this test uses special software to check and test a software product.

Key principles of automated testing:
· Test execution by tools: Tests used: selenium, JUnit or TestNg. This enhances efficiency.

· Repeatability: Automates tasks which are helpful for testers. Scripts can be reused multiple times.

· Speed and efficiency: Automated tests can be executed faster than manual testing.

· Consistent and reliable: Automated tests are consistent with no human errors.

When to use automated testing:
Performance Testing: This tests how the app handles large user volumes, evaluates how any application could perform under stress, etc.

Large-scale projects: When the project has many features and frequent updates. Automated testing ensures comprehensive coverage.

Repetitive tasks: These are tasks that need to be executed frequently.

When to deploy automated testing?
Repetitive tasks: When you have repetitive test cases that need to be executed repeatedly, in this case, we can point out regression testing. 

Frequent code changes: Where code changes frequently, we can use automated testing to validate the impact of these changes.

Complex scenarios: Automated testing would be a good way to test complex scenarios, such as performance testing, load testing, stress testing, etc.

Automated testing and manual testing are both essential for software testing. Each has its strengths and weaknesses, but both play a massive role in providing efficiency. For example, automated testing could be used for repetitive regression and performance. Manual testing, which can be done by a human, is for exploratory and usability. It's highly effective in testing scenarios that may be harder to automate. They are both essential tests that can be used for different purposes.

# Finish Project <a id="finished-project"></a>

![image](https://github.com/user-attachments/assets/3044906a-f5dc-4916-8fc3-3f463e647446)

![image](https://github.com/user-attachments/assets/827d55fd-8667-4f3d-8b83-12dc931eac28)

![image](https://github.com/user-attachments/assets/9a7127ca-c3e9-4d4c-85da-45f8991457cc)

![image](https://github.com/user-attachments/assets/7ae6cf97-273a-443e-be56-047db92828d8)

![image](https://github.com/user-attachments/assets/83ac55c8-e949-4df6-aa3f-b16a3ee3f786)

![image](https://github.com/user-attachments/assets/298710bd-e0d2-428e-9b0f-3e094672e8df)

![image](https://github.com/user-attachments/assets/73e322fd-eaef-40d4-945b-63fbb5a73a7d)


# Deployment <a id="deployment"></a>

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


