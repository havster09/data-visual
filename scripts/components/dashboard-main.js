function fetchMovies($http) {
    return $http.get("/movies.json")
        .then(function (response) {
            return response.data;
        });
}

dashboard.component("dashboardMain", {
    templateUrl:"scripts/components/dashboard-main.html",

    bindings: {
      value:"@"
    },
    controller: function($scope, $http) {
        var model = this;
        model.parentGreet = "You shot me in the a";
        model.message = "there is no tomorrow";


        model.specs1 = {
            currentValue: 45, centerX: 300, centerY: 300, radius: 200,
            maxValue: 180, gradientInterval: 10, gradients: []
        };
        model.specs2 = {
            currentValue: 85, centerX: 300, centerY: 300, radius: 200,
            maxValue: 180, gradientInterval: 10, gradients: []
        };

        model.movies = [];
        model.changeMessage = function() {
            model.message = "Bye Bi";
        };

        model.specs = {
          comments:12,
            frost:21,
            packetsSent:64,
            packetsReceived:67
        };

        setInterval(function() {
            $scope.$apply(function () {
                for(var key in model.specs) {
                    model.specs[key] += (Math.floor(Math.random() * 10));
                }
            });
        }, 500);

        model.$onInit = function() {
            console.log("$onInit fire");
            fetchMovies($http).then(function(movies) {
                model.movies = movies;
            });
        };

        model.$onChanges = function() {
            console.log("$onChanges fire");
        };
    },
    $routeConfig: [
        {path:"/nvd3-realtime", component: "nvd3Realtime", name: "NvD3 Realtime", useAsDefault: true},
        {path:"/list", component: "movieList", name: "List"},
        {path:"/bar-graph", component: "barGraph", name: "Bar Graph"},
        {path:"/about", component: "about", name: "About"},
        {path:"/d3-bar-chart", component: "d3BarChart", name: "D3 Bar Chart"},

        {path:"/nvd3-quickstart", component: "nvd3Quickstart", name: "NvD3 Quickstart"},
        {path:"/nvd3-pie", component: "nvd3Pie", name: "NvD3 Pie"},
        {path:"/nvd3-historic-bar", component: "nvd3HistoricBar", name: "NvD3 Historic Bar"},
        {path:"/nvd3-discrete-bar", component: "nvd3DiscreteBar", name: "NvD3 Discrete Bar"},
        {path:"/nvd3-cumulative", component: "nvd3Cumulative", name: "NvD3 Cumulative"},

        {path:"/d3-sitepoint", component: "d3Sitepoint", name: "D3 Sitepoint"},
        {path:"/d3-tutorial/:id", component: "d3Tutorial", name: "D3 Tutorial"},



        {path:"/snap-svg", component: "snapSvg", name: "Snap Svg"},

        {path:"/nvd3-directives", component: "nvd3Directives", name: "NvD3 Directives"},
        {path:"/**", redirectTo:["Dashboard Main"]}
    ]
});
