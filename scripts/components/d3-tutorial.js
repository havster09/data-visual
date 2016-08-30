dashboard.component("d3Tutorial", {
    templateUrl: "scripts/components/d3-tutorial.html",
    controller: function ($scope) {
        var model = this;

        model.$routerOnActivate = function (next, prev) {
            model.id = next.params.id;
            console.log(model.id);

            if(parseInt(model.id) === 1) {
                var width = 420,
                    barHeight = 20;

                var x = d3.scale.linear()
                    .range([0, width]);

                var chart = d3.select(".chart")
                    .attr("width", width);

                d3.tsv("assets/data.tsv", type, function(error, data) {
                    x.domain([0, d3.max(data, function(d) { return d.value; })]);

                    chart.attr("height", barHeight * data.length);

                    var bar = chart.selectAll("g")
                        .data(data)
                        .enter().append("g")
                        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

                    bar.append("rect")
                        .attr("width", function(d) { return x(d.value); })
                        .attr("height", barHeight - 1);

                    bar.append("text")
                        .attr("x", function(d) { return x(d.value) - 3; })
                        .attr("y", barHeight / 2)
                        .attr("dy", ".35em")
                        .text(function(d) { return d.value; });
                });

                function type(d) {
                    d.value = +d.value; // coerce to number
                    return d;
                }
            }
            else {
                var margin = {top: 20, right: 20, bottom: 30, left: 40},
                    width = 960 - margin.left - margin.right,
                    height = 500 - margin.top - margin.bottom;

                var x = d3.scale.ordinal()
                    .rangeRoundBands([0, width], .1);

                var y = d3.scale.linear()
                    .range([height, 0]);

                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");

                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient("left")
                    .ticks(10, "%");

                var svg = d3.selectAll("#test").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                d3.tsv("assets/data.tsv", type, function(error, data) {
                    if (error) throw error;

                    x.domain(data.map(function(d) { return d.letter; }));
                    y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(xAxis);

                    svg.append("g")
                        .attr("class", "y axis")
                        .call(yAxis)
                        .append("text")
                        .attr("transform", "rotate(-90)")
                        .attr("y", 6)
                        .attr("dy", ".71em")
                        .style("text-anchor", "end")
                        .text("Frequency");

                    svg.selectAll(".bar")
                        .data(data)
                        .enter().append("rect")
                        .attr("class", "bar")
                        .attr("x", function(d) { return x(d.letter); })
                        .attr("width", x.rangeBand())
                        .attr("y", function(d) { return y(d.frequency); })
                        .attr("height", function(d) { return height - y(d.frequency); });
                });

                function type(d) {
                    d.frequency = +d.frequency;
                    return d;
                }
            }

        };

        model.message = "yeah boi";

        // var data = [4, 8, 15, 16, 23, 42];
        model.specs = {
            width: 420,
            barHeight: 20
        };
        model.specs.data = [4, 8, 15, 16, 23, 42];

        angular.forEach(model.specs.data, function (value, i) {
            model.specs.data[i] = model.specs.data[i] * 10;
        });

    }
});

