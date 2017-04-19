var movies = [];

$("button.search").on("click", function() {
  var title = $("input").val();
  $.getJSON("http://omdbapi.com/?t=" + title, function (monkey) {
    var titleAndRating = monkey["Title"] + " (" + monkey["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(monkey["Year"]);
    $(".poster").attr("src", monkey["Poster"]);
    $(".plot").text(monkey["Plot"]);

    var li = $("<li>" + monkey["Title"] + "</li>");
    $("ul.search-history").append(li);

    var stashedMovie = {
      title: monkey["Title"],
      score: monkey["Ratings"][1]["Value"]
    }

    movies.push(stashedMovie);
    //push function will store information
  });
});

$("ul").on("click", function(event) {
  var title = $(event.target).text();

  $.getJSON("http://omdbapi.com/?t=" + title, function(data) {
    var titleAndRating = data["Title"] + " (" + data["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(data["Year"]);
    $(".poster").attr("src", data["Poster"]);
    $(".plot").text(data["Plot"]);
  });
})

//$("button.filter").on("click", function() {
 // $("ul").children().remove();
                  //THE BELOW WAS RULED OUT ANYWAYS ONLY TIL NOTED
                      //var index = 0;

                      //while (index < movies.length) {
                     //  var scoreAsInt = parseInt(movies[index]["score"]);
                      //  if (scoreAsInt > 50 ) {
                      //    var li = $("<li>" + movie[index]["title"] + "</li>");
                        //  $("ul.search-history").append(li);
                     // //  }
                      //  index = index + 1;
                      //}

                      //NOTED UNRULED BELOW

  // movies.forEach(function(aSingleMovie) {
    //fucnction forEach works on every array, will list the items
    //the movies will refer to the var that is outside of this JS string
  //  var scoreAsInt = parseInt(aSingleMovie["score"])
  //  if ( scoreAsInt > 50 ) {
  //    var li = $("<li>" + aSingleMovie["title"] + "</li>");
   //   $("ul.search-history").append(li);
    }
 // })
  // get rid of all the bad movies
  //   * search through the array
  //   * for each movie that meets our criteria
  //   * insert it into the DOM
//})

 // $("button.addBack").on("click", function(){
 //   $("ul").children().remove();
//when using the add back function, it will add back EVERYTHING in the array. 
 //   movies.forEach(function(addMoviesBack) {
 //     var li = $("<li>" + addMoviesBack["title"] + "</li>");
  //    $("ul.search-history").append(li);
  //  })
 // })


//******INSTEAD OF TWO BUTTONS, ADD A CHECKBOX THAT, WHEN CHECKED, ONLY SHOWS GOOD MOVIES, AND WHNE NOT CHECKED SHOWS EVERYTHING. 



//when you check the box, remove everything from u1 and only append the ones with a score greater than 50
//per Dan, this wll use an IF statement. 








// if (rottenTomatoesScore < 50) {
//    removeLi that corresponds to that score
// }

// var movies = [
//   {
//     title: "Gigli",
//     score: 6
//   },
//   {
//     title: "Finding Nemo",
//     score: 95
//   },
//   {
//     title: "Titanic",
//     score: 97
//   }
// ]


