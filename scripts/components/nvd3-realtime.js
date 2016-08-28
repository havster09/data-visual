dashboard.component("nvd3Realtime", {
    templateUrl:"scripts/components/nvd3-realtime.html",
    controller: function($scope) {
        var model = this;
        model.message = "another dimension";

        model.options = {
            chart: {
                type:'lineChart',
                height: 400,
                margin: {
                    top:20,

                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d) {
                    return d.x;
                },
                y: function(d) {
                    return d.y;
                },
                userInteractiveGuideline:true,
                duration: 500,
                yAxis:{
                    tickFormat: function(d) {
                        return d3.format('.01f')(d);
                    }
                },
                color: function(d,i) {
                    /*var colors = d3.scale.category20().range();
                     var rnd = Math.floor(Math.random() * colors.length);
                     return colors[rnd];*/

                    var yVal = d.values[d.values.length-1].y;
                    // console.log(yVal);
                    return (yVal < 0)?"red":"green";
                }
            }
        };

        model.data = [
            {
                values:[],key:'My Profits'
            }
        ];

        model.run = true;

        var x = 0;

        setInterval(function() {
            if(!model.run) {
                return;
            }

            function getProfit() {
                var winLose = ((Math.random() * 10) < 5)? -1 : 1;
                var profit = Math.random() * 100 * (Math.random() * 1 * Math.random() * winLose);
                return profit;
            }

            model.data[0].values.push({x:x, y: getProfit()});
            if(model.data[0].values.length > 50) {
                model.data[0].values.shift();
            }
            x++;
            $scope.$apply();
        }, 500);
    }
});
