# Around The World

[View the website here](https://daisygunn.github.io/around-the-world/)

This website has been produced to provide a platform for an Educational geography game for children aged 8-12, it offers questions in a quiz format to test their knowledge of capital cities around the world. 

In addition to the home page this website also features:
- The 'Play Game' page
- A 'Rules' page
- A 'High Scores' page

The business goals of the website are:
1. To provide an educational learning platform for children.
2. To provide engaging content so that users enjoy using this quiz.
3. To create an easy to navigate website to ensure that it is user friendly.

The user goals of this website are:
1. To learn key geography facts and information about our world.
2. To test my geography knowledge using the quiz game.
3. To improve my previous scores & therefore my overall knowledge.

--- 
## UX

### Strategy
Using the core UX principles I first started with Strategy, thinking about the target audience for this quiz & the features they would want.

The target audience for 'Around the World' are:
- Children aged 8-12
- Children interested in geography
- Children that would like to improve their geographical knowledge

Features that they would need to be included:
- A fun & interactive quiz
- The ability to track their high scores so they can see if they're improving

It was imperative to me that this website was simple & easy to use to ensure that the users had an enjoyable experience; therefore each page has a limited amount of information, written in simple language. 

As children aren't always guaranteed to have mobile phones this website has been designed to work well on desktops & tablets as well, to ensure that no matter the device the user has a positive user experience.

### Scope
In order to achieve the desired user and business goals this website will include the following:
1. A landing page with:
- an H1 element
- Interactive 3D globe that responds to mouse movement
- Navigation bar

2. Play game page:
- H1 element
- Navigation bar
- Start game button
- Quiz questions
- Score tally
- Quit game button

3. Rules page:
- H1 element
- Navigation bar
- Quiz rules and instructions

4. High Scores page:
- H1 element
- Navigation bar
- List of top 5 high scores

### Structure
This is a multi-page website to keep the amount of information on each page limited and easy to digest; the rules, game and high scores are all separated so that any child using the website can find what they want easily.
Each page is designed with simplicity in mind, with a navbar and an H1 element and then the relevant content centred below; this simplicity will allow for users to feel comfortable using and navigating each page.
The quiz itself has a question, a text input and four answer buttons - this layout of this will be responsive so that it isn't too squashed when being viewed on a smaller screen. 

### Skeleton
[View wireframes here](assets/documents/wiresframes.pdf) - please note the actual website differs slightly from these wireframes.

Whilst building the website I opted to change the type of quiz that this website would feature, I went for a capital's of the world quiz as this would allow me to dynamically create the question and answer buttons using JavaScript. 

I also decided to add a next button instead of an alert as I felt this would provide the user with a better experience, as having to click out of the alert could be annoying for some.

Furthermore, I decided to add a responsive navbar to further enhance the user experience when viewing the website on a mobile phone.

### Surface
I chose to use a gradient background using blues and greens to resemble the colour of the globe, I wanted something simple so as not to detract from any of the content. 
On the landing page, there is an animated globe that zooms in and out upon the mouse being scrolled, this interactive element provides something fun for the user straight away.
Using google fonts I chose Yogomi as I felt it had a childlike handwriting feel to it and this will be used for all the heading elements on the website.

---
## Features 

---
## Technologies Used
I have used several technologies that have enabled this design to work:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - Used as the basic building block for the project and to structure the content.
- [CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
    - Used to style all the web content across the project. 
- [JavaScript](https://www.javascript.com/)
    - Used for the responsive navbar, animated heading, quiz functionality & sound effects and high-scores leaderboard.
- [Jquery]()
    - 
- [Planetary JS](http://planetaryjs.com/examples/rotating.html)
    - Library used to render the animated globe on the landing page. 
- [Google Fonts](https://fonts.google.com/)
    - Used to obtain the fonts linked in the header, fonts used were Playfair and Cookie
- [Font Awesome](https://fontawesome.com/)
    - Used to obtain the icons used on the high scores and rules pages.
- [Google Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
    - Used as a primary method of fixing spacing issues, finding bugs, and testing responsiveness across the project.
- [GitHub](https://github.com/)
    - Used to store code for the project after being pushed.
- [Git](https://git-scm.com/)
    - Used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
- [Gitpod](https://www.gitpod.io/)
    - Used as the development environment.
- [Balsamiq](https://balsamiq.com/)
    - Used to create the wireframes for the project.
- [AutoPrefixer](https://autoprefixer.github.io/)
    - Used to parse my CSS and ass vendor prefixes.
- [Grammarly](https://www.grammarly.com/)
    - Used to fix the grammar errors across the project.
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB)
    - Used to detect overflow of elements, which allowed me to quickly debug any issues.
- [Coloors](https://coolors.co/)
    - Used to create a colour palette for the design.
- [Favicon.io](https://favicon.io/)
    - Used to create favicon's for my website
- [Color Contrast Accessibility Validator](https://color.a11y.com/)
    - Allowed me to test the colour contrast of my webpage.
- [W3C Markup Validation Service](https://validator.w3.org/) 
    - Used to validate all HTML code written and used in this webpage.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input)
    - Used to validate all CSS code written and used in this webpage.
- [Freeformatter CSS Beautify](https://www.freeformatter.com/css-beautifier.html)
    - Used to accurately format my CSS code.
- [Freeformatter HTML Formatter](https://www.freeformatter.com/html-formatter.html)
    - Used to accurately format my HTML code.
- [AmIResponsive](http://ami.responsivedesign.is/)
    - Used to generate responsive image used in README file.

---
## Testing
---
## Deployment
I deployed this website by using GitPages and following the below steps:

### GitHub pages deployment

1. Log in to GitHub
2. In your Repository section, select the project repository that you want to deploy
3. In the menu located at the top of this section, click 'Settings'
4. Select 'Pages' on the left-hand menu - this is around halfway down
5. In the source section, select branch 'Master' and save
6. The page is then given a site URL which you will see above the source section, it will look like the following:

Please note it can take a while for this link to become fully active.

### Forking the GitHub Repository

If you want to make changes to your repository without affecting it, you can make a copy of it by 'Forking' it. This ensures your original repository remains unchanged.

1. Find the relevant GitHub repository
2. In the top right corner of the page, click the Fork button (under your account)
3. Your repository has now been 'Forked' and you have a copy to work on

### Cloning the GitHub Repository

Cloning your repository will allow you to download a local version of the repository to be worked on. Cloning can also be a great way to backup your work.

1. Find the relevant GitHub repository
2. Press the arrow on the Code button
3. Copy the link that is shown in the drop-down
4. Now open Gitpod & select the directory location where you would like the clone created
5. In the terminal type 'git clone' & then paste the link you copied in GitHub
6. Press enter and your local clone will be created.
---
## Credits
I have used several resources to produce this website, where code has been used found from another source this is credited as a comment within the HTML, CSS and JS files.

The following websites/articles were used for research and guidance:

[JavaScript do/while loop](https://www.javascripttutorial.net/javascript-do-while/)

[Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox)

[Responsive Navbar](https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci)

I obtained code from the following resources:

[Vanilla JavaScript quiz tutorial, used to save high scores, increment score and question count](https://www.youtube.com/watch?v=f4fB9Xg2JEY)

[Animated heading code](https://tobiasahlin.com/moving-letters/#6)

[Planetary JS, used for animated & interactive globe](http://planetaryjs.com/examples/rotating.html)

The below sources were used for content: 

[Countries and their capital cities](https://www.countries-ofthe-world.com/capitals-of-the-world.html)

[Sound effects obtained from Zapsplat](https://www.zapsplat.com)

---
## Acknowledgements

I would like to thank my course mentor Guido Cecilio for his support and guidance throughout the course of the project and my fellow students Harry Dhillon and Jack Crosbie for their support & feedback.