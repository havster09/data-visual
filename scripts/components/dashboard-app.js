dashboard.component("dashboardApp", {
    templateUrl: "scripts/components/dashboard-app.html",
    controller: function() {
        console.log("in $routerRootComponent");
    },
    $routeConfig: [
        {path:"/list", component: "movieList", name: "List"},
        {path:"/bar-graph", component: "barGraph", name: "Bar Graph"},
        {path:"/about", component: "about", name: "About"},
        {path:"/d3-bar-chart", component: "d3BarChart", name: "D3 Bar Chart"},

        {path:"/nvd3-quickstart", component: "nvd3Quickstart", name: "NvD3 Quickstart"},
        {path:"/nvd3-realtime", component: "nvd3Realtime", name: "NvD3 Realtime"},

        {path:"/nvd3-directives", component: "nvd3Directives", name: "NvD3 Directives"},
        {path:"/**", redirectTo:["List"]}
    ]
});