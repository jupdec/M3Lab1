//1
var myMovies = ["Peaceful Warrior", "Hunger Games", "Tag", "Fast and Furious", "The Iron Man"];
window.console.log(myMovies[1]);

//2
var movies = new Array(5);
movies[0] = "Peaceful Warrior";
movies[1] = "Hunger Games";
movies[2] = "Tag";
movies[3] = "Fast and Furious";
movies[4] = "The Iron Man";
window.console.log(movies[0]);

//3
var moviesUpdated = new Array(5);
moviesUpdated[0] = "Peaceful Warrior";
moviesUpdated[1] = "Hunger Games";
moviesUpdated[2] = "Tag";
moviesUpdated[3] = "Fast and Furious";
moviesUpdated[4] = "The Iron Man";
moviesUpdated.splice(2, 0, "Avengers");
window.console.log(moviesUpdated.length);

//4
var myMovies2 = [];
myMovies2[0] = "Peaceful Warrior";
myMovies2[1] = "Hunger Games";
myMovies2[2] = "Tag";
myMovies2[3] = "Fast and Furious";
myMovies2[4] = "The Iron Man";

delete myMovies2[0];
window.console.log(myMovies2);

//5
var myMovies3 = [];
myMovies3[0] = "Peaceful Warrior";
myMovies3[1] = "Hunger Games";
myMovies3[2] = "Tag";
myMovies3[3] = "Fast and Furious";
myMovies3[4] = "The Iron Man";
myMovies3[5] = "Avengers";
myMovies3[6] = "Litte Miss Sunshine";

for (var i = 0; i < myMovies3.length; i++) {
  window.console.log(myMovies3[i]);
}

//6
var myMovies4 = [];
myMovies4[0] = "Peaceful Warrior";
myMovies4[1] = "Hunger Games";
myMovies4[2] = "Tag";
myMovies4[3] = "Fast and Furious";
myMovies4[4] = "The Iron Man";
myMovies4[5] = "Avengers";
myMovies4[6] = "Litte Miss Sunshine";

for (index in myMovies4) {
  if (myMovies4.hasOwnProperty(index)) {
    window.console.log(myMovies4[index]);
  }
}

//7
var myMovies5 = [];
myMovies5[0] = "Peaceful Warrior";
myMovies5[1] = "Hunger Games";
myMovies5[2] = "Tag";
myMovies5[3] = "Fast and Furious";
myMovies5[4] = "The Iron Man";
myMovies5[5] = "Avengers";
myMovies5[6] = "Litte Miss Sunshine";

myMovies5.sort();
for (index in myMovies5) {
  if (myMovies5.hasOwnProperty(index)) {
    window.console.log(myMovies5[index]);
  }
}

//8
var myMovies6 = [];
myMovies6[0] = "Peaceful Warrior";
myMovies6[1] = "Hunger Games";
myMovies6[2] = "Tag";
myMovies6[3] = "Fast and Furious";
myMovies6[4] = "The Iron Man";
myMovies6[5] = "Avengers";
myMovies6[6] = "Litte Miss Sunshine";

var leastmyFavmov = [];
leastmyFavmov[0] = "Thor";
leastmyFavmov[1] = "Forest Grump";
leastmyFavmov[2] = "Free Man";

window.console.log("Movies I like:\n\n");
for (var i = 0; i < myMovies6.length; i++) {
  window.console.log(myMovies6[i]);
}

window.console.log("I regret watching:\n\n");
for (var i = 0; i < leastmyFavmov.length; i++) {
  window.console.log(leastmyFavmov[i]);
}

//9
var moviees = myMovies6.concat(leastmyFavmov);
moviees.reverse();
for (var i = 0; i < moviees.length; i++) {
  window.console.log(moviees[i]);
}

//10
var moviees2 = myMovies6.concat(leastmyFavmov);
moviees2.reverse();
window.console.log(moviees2.pop());

//11
var moviees3 = myMovies6.concat(leastmyFavmov);
window.console.log(moviees3.pop());

//12
var moviees4 = myMovies6.concat(leastmyFavmov);
var notLikeIndices = [];
for (var i = 0; i < moviees4.length; i++) {
  if (leastmyFavmov.includes(moviees4[i])) {
    notLikeIndices.push(i);
  }
}
var likeMovies = ["The Prestige", "Batman Begins", "The Dark Knight"];
for (var i = 0; i < likeMovies.length; i++) {
  moviees4[notLikeIndices[i]] = likeMovies[i];
}
window.console.log(moviees4);

//13
var moviesWithRanking = [["Peaceful Warrior", 1], ["Hunger Games", 2], ["Tag", 3], ["Fast and Furious", 4], ["The Iron Man", 5]];

var movieNames = moviesWithRanking.filter(function (movie) {
  return typeof movie[0] === "string";
});

movieNames.forEach(function (movie) {
  window.console.log(movie[0]);
});

//14
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function (arr) {
  console.log("Employees:");
  arr.forEach(function (employee) {
    console.log(employee);
  });
};
showEmployee(employees);

//15
function filterValues(array) {
  return array.filter(function (value) {
    return value !== false && value !== null && value !== 0 && value !== "";
  });
}

window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//16
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
window.console.log(getRandomItem(num));

//17
function getLargestNum(numbers) {
  return Math.max.apply(null, numbers);
}
let nums = [10, 15, 6, 25, 50, 100];
window.console.log(getLargestNum(nums));