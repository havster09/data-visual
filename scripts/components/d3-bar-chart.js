dashboard.component("d3BarChart", {
    templateUrl: "scripts/components/d3-bar-chart.html",
    controller: function () {
        var model = this;
        model.message = "They build jails 'cause of me.";

        var w = 300;
        var h = 200;
        var padding = 2;

        model.dataset = [5, 10, 14, 20, 25];

        model.changeDataSet = function () {
            console.log("changing the data");
            model.dataset = [100, 30, 44, 20, 33, 5, 10, 14, 20, 25];
            model.buildChart();
        };

        function colorPicker(v) {
            if(v <= 20) {return "#666666"; }
            else if(v >20) {return "#FF0033"; }
        }

        model.buildChart = function () {
            angular.element("svg").remove();
            var svg = d3.select("#chart-sandbox").append("svg")
                .attr("width", w)
                .attr("height", h);

            svg.selectAll("rect")
                .data(model.dataset)
                .enter()
                .append("rect")
                .attr(
                    {
                        "x": function (d, i) { return i * (w / model.dataset.length); },
                        "y": function (d) { return h - (d * 4); },
                        "width": w / model.dataset.length - padding,
                        "height": function (d) { return d * 4; },
                        "fill": function (d) { return colorPicker(d); }
                    });

            svg.selectAll("text")
                .data(model.dataset)
                .enter()
                .append("text")
                .text(function (d) { return d;})
                .attr(
                    {
                        "text-anchor": "middle",
                        "x": function (d, i) { return i * (w / model.dataset.length) + (w/model.dataset.length - padding)/2; },
                        "y": function (d) { return h - (d * 4) + 15; },
                        "fill": "#FFFFFF"
                    });
        };

        model.$onInit = function () {
            model.buildChart();
        }
    }
});
























