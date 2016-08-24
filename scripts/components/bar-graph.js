dashboard.component("barGraph", {
    templateUrl: "scripts/components/bar-graph.html",
    controller: function ($scope) {
        var model = this;
        model.color = "red";
        model.width = 250;

        model.specs = {
            padding: 5,
            height: 30,
            fontHeight: 10,
            gradientInterval: 50,
            gradients: [],
            widthDifference: 0,
            fontStyle:"10pt arial",
            bars: [
                {color: "red", width: 50, text: "rounds"},
                {color: "#F15b2A", width: 60, text: "grenades"},
                {color: "#A62E5C", width: 250, text: "c4"}
            ]
        };

        $scope.$watch(function () {
                return model.specs;
            },
            function () {
                model.specs.labelWidth = 0;
                model.specs.overallWidth = 0;
                model.specs.fontHeight = 10;
                var gradients = [];
                var ctx = document.createElement("canvas").getContext("2d");
                ctx.font = model.specs.fontStyle;
                angular.forEach(model.specs.bars, function(bar, index) {
                    model.specs.labelWidth = Math.max(model.specs.labelWidth, ctx.measureText(bar.text).width);
                    model.specs.overallWidth = Math.max(model.specs.overallWidth, bar.width);
                });

                for(var i = 0; ; i+= model.specs.gradientInterval) {
                    gradients.push({text: i, offset: i});
                    if(i > model.specs.overallWidth) {
                        model.specs.widthDifference = i - model.specs.overallWidth;
                        break;
                    }
                }

                model.specs.gradients = gradients;

                model.specs.overallHeight = model.specs.bars. length * (1 * model.specs.height + model.specs.padding);
            }, true);

        model.colorOverride = function () {
            angular.forEach(model.specs.bars, function (value) {
                value.color = model.colorMaster;
            });
        }
    }
});


