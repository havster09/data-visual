function fetchMovies($http) {
    return $http.get("/movies.json")
        .then(function (response) {
            return response.data;
        });
}

dashboard.component("movieList", {
    templateUrl:"scripts/components/movie-list.html",
    bindings: {
      value:"@"
    },
    controller: function($http) {
        var model = this;
        model.parentGreet = "You shot me in the a";
        model.message = "Hello Bi";
        model.movies = [];
        model.changeMessage = function() {
            model.message = "Bye Bi";
        };

        model.$onInit = function() {
            console.log("$onInit fire");
            fetchMovies($http).then(function(movies) {
                model.movies = movies;
            });
        };

        model.$onChanges = function() {
            console.log("$onChanges fire");
        };
    }
});
