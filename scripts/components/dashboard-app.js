dashboard.component("dashboardApp", {
    templateUrl: "scripts/components/dashboard-app.html",
    controller: function() {
        console.log("in $routerRootComponent run it");
    },
    $routeConfig: [
        {path:"/dashboard-main/...", component: "dashboardMain", name: "Dashboard Main"},
        {path:"/**", redirectTo:["Dashboard Main"]}
    ]
});