dashboard.component("nvd3Pie", {
    templateUrl: "scripts/components/nvd3-pie.html",
    controller: function ($scope) {
        var model = this;
        model.message = "spinning bird kick";

        model.yearComplete = false;

        model.handleData = function () {
            model.run = true;
            model.yearComplete = false;
        };

        model.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: false,
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


        var yearlyProfits = setInterval(function () {
            if (!model.run) {
                return;
            }

            function getData() {
                return Math.random() * 100;
            }

            model.data.push({key: months[key].substr(0,3) + " " + model.year, y: getData()});
            if (model.data.length > months.length) {
                model.data.shift();
            }
            key++;
            if (key > months.length -1) {
                model.run = false;
                model.yearComplete = !model.yearComplete;

                key = 0;
                model.year++;
            }
            $scope.$apply();
        }, 500)
    }
});
