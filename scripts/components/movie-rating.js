(function() {
    "use strict";

    function buildEntries(value, max) {
        var entries = [];
        for(var i = 1; i <= max; i++) {
            var icon = i <= value ? "glyphicon-star" : "glyphicon-star-empty";
            entries.push(icon);
        }
        return entries;
    }

    dashboard.component("movieRating", {
        templateUrl: "scripts/components/movie-rating.html",
        bindings: {
            smShat: "@",
            value: "<",
            max: "<",
            greet: "<",
            setRating: "&"
        },
        transclude: true,
        controller: function() {
            var model = this;

            model.$onInit = function() {
                model.entries = buildEntries(model.value, model.max);
                console.log(model.smShat);
            };

            model.$onChanges = function() {
                model.entries = buildEntries(model.value, model.max);
            };
        }
    });

}());