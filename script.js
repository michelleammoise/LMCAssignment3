let allMovies = [];

class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}


let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie is added");
    printToWebpage("A new movie is added");
}

let printMovies = () => {
    console.log("Printing all movies....");
    printToWebpage("Printing all movies....");
    for (let i = 0; i < allMovies.length; i++) {
        console.log(allMovies[i].title + ", rating of " + allMovies[i].rating + ", havewatched: " + allMovies[i].haveWatched);
        printToWebpage(allMovies[i].title + ", rating of " + allMovies[i].rating + ", havewatched: " + allMovies[i].haveWatched);
    }
    console.log("You have " + allMovies.length + " movies in total");
    printToWebpage("\nYou have " + allMovies.length + " movies in total");
}


let highRatings = (rating) => {
    let matchCounter = 0;
    console.log("printing movie that has a rating higher than " + rating);
    printToWebpage("printing movie that has a rating higher than " + rating);
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            printToWebpage(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            matchCounter++;
        }
    }
    console.log("In total, there are " + matchCounter + " matches");
    printToWebpage("\nIn total, there are " + matchCounter + " matches");
}


let changeWatched = (title) => {
    console.log("changing the status of the movie...");
    printToWebpage("changing the status of the movie...")
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title === title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched;
        }
    }
}


//print text to the paragraph with id = 'message'
let printToWebpage = (message) => {
    let p = document.getElementById("message");
    p.innerHTML += message + "<br>";
}


////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x, y, z);

console.log("----------------");
printToWebpage("----------------");
console.log("running program......");
printToWebpage("running program......");
console.log("----------------");
printToWebpage("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

console.log("----------------");
printToWebpage("----------------");
addMovie(movie1);
console.log("----------------");
printToWebpage("----------------");



changeWatched("Spiderman");

console.log("----------------");
printToWebpage("----------------");

printMovies();

console.log("----------------");
printToWebpage("----------------");

changeWatched("Spiderman");

console.log("----------------");
printToWebpage("----------------");

printMovies();

console.log("----------------");
printToWebpage("----------------");

highRatings(3.5);