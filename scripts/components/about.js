dashboard.component("about", {
    template: "About ma n**ga {{$ctrl.message}}.",
    $canActivate: function () {
        console.log("check can activate? hell naw you f***d that up");
        return true;
    },
    controller: function () {
        var model = this;
        model.$onInit = function () {
            model.message = "clockin wassup"
        };

        model.$routerOnActivate = function () {
            console.log("you in the office baby");
        };

        model.$routerOnDeactivate = function () {
            console.log("that is my boy neto");
        }
    }
})
;