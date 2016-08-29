dashboard.component("nvd3DiscreteBar", {
    templateUrl: "scripts/components/nvd3-discrete-bar.html",
    controller: function ($scope) {
        var model = this;

        model.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                x: function (d) {
                    return d.label;
                },
                y: function (d) {
                    return d.value;
                },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                dispatch: {
                    tooltipShow: function (e) {
                        console.log('! tooltip SHOW !')
                    },
                    tooltipHide: function (e) {
                        console.log('! tooltip HIDE !')
                    },
                    beforeUpdate: function (e) {
                        console.log('! before UPDATE !')
                    }
                },
                discretebar: {
                    dispatch: {
                        chartClick: function (e) {
                            console.log("! chart Click !")
                        },
                        elementClick: function (e) {
                            console.log("! element Click !")
                        },
                        elementDblClick: function (e) {
                            console.log("! element Double Click !")
                        },
                        elementMouseout: function (e) {
                            console.log("! element Mouseout !")
                        },
                        elementMouseover: function (e) {
                            console.log("! element Mouseover !")
                        }
                    }
                },
                callback: function (e) {
                    console.log('! callback !')
                }
            }
        };

        model.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label": "A",
                        "value": -29.765957771107
                    },
                    {
                        "label": "B",
                        "value": 0
                    },
                    {
                        "label": "C",
                        "value": 32.807804682612
                    },
                    {
                        "label": "D",
                        "value": 196.45946739256
                    },
                    {
                        "label": "E",
                        "value": 0.19434030906893
                    },
                    {
                        "label": "F",
                        "value": -98.079782601442
                    },
                    {
                        "label": "G",
                        "value": -13.925743130903
                    },
                    {
                        "label": "H",
                        "value": -5.1387322875705
                    }
                ]
            }
        ];

        function getData() {
            return (Math.random()) * ((Math.random() > 0.5)?1000:-1000);
        }



        model.handleData = function() {
            model.dataNew = [
                {
                    key: "Cumulative Return",
                    values: [
                        {
                            "label": "A",
                            "value": -getData()
                        },
                        {
                            "label": "B",
                            "value": getData()
                        },
                        {
                            "label": "C",
                            "value": getData()
                        },
                        {
                            "label": "D",
                            "value": getData()
                        },
                        {
                            "label": "E",
                            "value": getData()
                        },
                        {
                            "label": "F",
                            "value": -getData()
                        },
                        {
                            "label": "G",
                            "value": -getData()
                        },
                        {
                            "label": "H",
                            "value": -getData()
                        }
                    ]
                }
            ];

            model.api.updateWithData(model.dataNew);
        };

        var yearlyProfits = setInterval(function () {
            model.handleData();

            // $scope.$apply();
        }, 1000)
    }
});
