# Tech_blog

## ⛅Welcome to 'Tech_blog by AhrumNoh'

![Readme Generator](https://github.com/ahrumnoh/Tech_blog/blob/main/public/assets/Welcome%20to%20TECh-Blog.jpg?raw=true)



## Overview

To build a fun tech-blog which provides a community for engineers to share their idea


## 🚩How to execute it? Check the DEMO Video for instruction


![Watch the video](https://github.com/ahrumnoh/ReadmeGenerator/blob/main/Image/Check%20the%20video%20NOW%20(1).jpg?raw=true)

🎇 Part1 - Demo Video : https://drive.google.com/file/d/11UmjpgHg9pu58hmUo9zFGiKKw1vGsBgP/view



 ## Final Images 👇


 🎇 HomePage Shot

![Homepage](https://github.com/ahrumnoh/Tech_blog/blob/main/public/assets/homepage.png?raw=true)

🎇 Login_page Shot

![Login](https://github.com/ahrumnoh/Tech_blog/blob/main/public/assets/loginpage.png?raw=true)

🎇 Post_page shot

![Post](https://github.com/ahrumnoh/Tech_blog/blob/main/public/assets/createpost.png?raw=true)

🎇 Comments shot

![Comments](https://github.com/ahrumnoh/Tech_blog/blob/main/public/assets/comments_page.png?raw=true)





## Installation in VS code

The user should clone the repository from GitHub and Use the schema.sql file in the db folder to create your database with MySQL shell commands


> **⚠ .ENV-Key SetUp .**  

> * Change '.env.EXAMPLE' ---> '.env'
> * Your details must be put into the file as DB_USER='', DB_PW='' in '.env'file



> **⚠ .MySQL SETUP.**  

> * mysql -u root -p
> * source db/schema.sql
> * DROP DATABASE IF EXISTS ecommerce_db;
> * CREATE DATABASE ecommerce_db;
> * quit



> **⚠ .NPM SETUP.**  

> * $ npm init -y
> * $ npm install
> * $ npm install inquirer

> * $ node seeds/index

## Usage in VS code
* ✔$ npm start
* ✔$ node index.js


## 😎 in this project

* GIVEN a CMS-style blog site
* WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
* WHEN I click on the homepage option
THEN I am taken to the homepage
* WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
* WHEN I choose to sign up
THEN I am prompted to create a username and password
* WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
* WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
* WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
* WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
* WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
* WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
* WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
* WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
* WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
* WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
* WHEN I click on the logout option in the navigation
THEN I am signed out of the site
* WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments



## 😊What Dependencies I used?

* express-handlebars
* MySQL2 
* Sequelize 
* packages 
* dotenv package  
* bcrypt package  
* express-session  
* connect-session-sequelize packages
## License 
This project is license under MIT


❤ Thank you so much for your time :)



