dashboard.component("nvd3Pie", {
    templateUrl:"scripts/components/nvd3-pie.html",
    controller: function($scope) {
        var model = this;
        model.message = "spinning bird kick";

        model.options = {
            chart: {
                type:'pieChart',
                height: 500,
                x: function(d) {return d.key;},
                y: function(d) {return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        model.data = [];

        model.run = true;
        model.year = 2016;
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var key = 0;



        var yearlyProfits = setInterval(function() {
            if(!model.run) {
                return;
            }

            function getData() {
                return Math.random() * 100;
            }

            model.data.push({key:months[key] + " " + year, y: getData()});
            if(model.data.length > 11) {
                model.data.shift();
            }
            key++;
            if(key > 11) {
                model.run = false;
                key = 0;
                model.year++;
            }
            $scope.$apply();
        }, 500)
    }
});
