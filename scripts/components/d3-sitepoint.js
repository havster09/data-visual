dashboard.component("d3Sitepoint", {
    templateUrl: "scripts/components/d3-sitepoint.html",
    controller: function ($scope) {
        var model = this;
        model.message = "get ma learn on";

        var root = d3.selectAll("#test");
        var testBox = root.append("svg")
            .style("max-height", "150px")
            .attr("width", 400)
            .attr("height", 150);

        var runCircles = function () {
            var bubbleChart = [];
            var numCircles = Math.floor(Math.random() * 11); // select 0 - 10 circles

            for (var i = 0; i < numCircles; i++) {
                bubbleChart.push([Math.floor(10 + Math.random() * 390), Math.floor(10 + Math.random() * 140), Math.floor(10 + Math.random() * 40)]);
            }

            var tb = testBox.selectAll("circle").data(bubbleChart);

            tb.style({"stroke":"black", "fill": "red"})
                .attr("cx", function (d) {
                    return d[0];
                })
                .attr("cy", function (d) {
                    return d[1];
                })
                .attr("r", function (d) {
                    return d[2];
                })
                .attr("opacity", .5);

            tb.enter()
                .append("circle")
                .style({"stroke":"black", "fill": "green"})
                .attr("cx", function (d) {
                    return d[0];
                })
                .attr("cy", function (d) {
                    return d[1];
                })
                .attr("r", function (d) {
                    return d[2];
                })
                .attr("opacity", .5);

            tb.exit().remove();
        };
        root.append("button").text("run").on("click", runCircles);
    }
});

