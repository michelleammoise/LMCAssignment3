# LMCAssignment3
This is an exercise to develop your skills in working with Javascript and web app design.  The exercise has two parts:

1. To code a set of functions to handle an array of data about movies.

2. To display the results in an attractive web page. 

You can use any of the AI tools that you wish. But this is an individual assignment, so do not copy code from other students. 

In the attached file (script.js), you will see the skeletons for 5 functions,  which together can create and manipulate the array of movies. Each movie is represented by an object, which consists of a title, a rating for how good the movie is from 1-5, and a boolean indicating whether you have watched the movie. Your assignment is to write the code for each function so that it will store and process the data and generate the stated output. The code requires conditionals, loops, functions, and objects to complete the project. The functions are:

function Movie(title, rating, havewatched) {}  
      This function is the object constructor that creates each movie object.

function addMovie (movie) {}  
     This function adds a movie object to the array of all movie objects.

function printMovies () {}  
      This function does the following:
            Iterate through all elements of the array
            Display the result on the web page in an attractive  format
            Display the total number of movies

function highRatings (rating) {}  
     This function does the following:
           Display ONLY the movies having a rating higher than a specified value (passed as an argument)
           Display out the total number of matches

function changeWatched (title) {}
      This function toggles the 'haveWatched' property of the specified movie (from true to false or vice versa).

These are the three files you need (in a zipped folder in the module for week 7):

index.html: the html page calls the javascript file. executes it and displays the results. 
script.js: the skeleton javascript file where you add the code.
expected_result.txt: the results as they would appear in the console. But your version will display the results on the web page itself. 
Your assignment is to add code to the script.js  and modify the index.html file as needed to produce an attractive page. 

NOTE:
*Do not delete the test code in the skeleton.js file
*Do not hard-code the javascript results. This will lead to deduction of points.

 

SUBMISSION FORMAT
Post both index.html and script.js to Github and submit BOTH the url to the landing page  AND the url to the repo itself.

 

GRADING CRITERIA

We will grade the assignment (0-10) based on:

Correctness of output (partial credit is possible if your code does not create all the output specified).

Do the functions perform as required (e.g not hard-wired to only work on the test data; written using standard javascript syntax and conventions, etc.)?

Is the web page attractive and legible?
