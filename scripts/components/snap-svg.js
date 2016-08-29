//t=relative transform, T=absolute transform, s=relative scale, S=absolute Scale
//r=relative rotate, R=relative rotate


dashboard.component("snapSvg", {
    templateUrl: "scripts/components/snap-svg.html",
    controller: function ($scope) {

        var saveAttributes = ['transform'];

        Snap.plugin(function (Snap, Element, Paper, global) {
            Element.prototype.resetSVG = function () {
                this.stop();
                for (var a = 0; a < saveAttributes.length; a++) {
                    if (this.data(saveAttributes[a])) {
                        this.attr(saveAttributes[a], this.data(saveAttributes[a]));
                    }
                    ;
                }
                ;
            };

            Element.prototype.storeAttributes = function () {
                for (var a = 0; a < saveAttributes.length; a++) {
                    if (this.attr(saveAttributes[a])) {
                        this.data(saveAttributes[a], this.attr(saveAttributes[a]));
                    }
                    ;
                }
                ;
            };

        });

        var s = Snap("#svg");

        var t1 = s.polygon(100, 325, 300, 325, 200, 235).attr({fill: "#005c99", stroke: "#005c99"});

        t1.transform("r270");
        t2 = t1.clone().attr({fill: "#0099ff", stroke: "#0099ff"});
        t2.transform("t90r90");

        var g1 = s.group(t1, t2);


        var g2 = g1.clone();
        var g3 = g1.clone();
        var g4 = g1.clone();

        g1.remove();

        g2.transform("t100,110");
        g3.transform("t-100,110");

        var g1_o = g4.attr("transform");
        var g2_o = g2.attr("transform");
        var g3_o = g3.attr("transform");

        var anim2 = function () {
            g2.animate({opacity: "0", transform: g1_o}, 200, mina.linear);
            g3.animate({opacity: "0", transform: g1_o}, 200, mina.linear);
        };

            var hoverover1 = function () {
                anim2();
            };
            var hoverout1 = function () {
                g4.animate({opacity: "1", transform: g1_o}, 200, mina.linear);
                g2.animate({opacity: "1", transform: g2_o}, 200, mina.linear);
                g3.animate({opacity: "1", transform: g3_o}, 200, mina.linear);
            };

            var gAll = s.group(g4,g2,g3);

            gAll.hover(hoverover1, hoverout1);


            /*var tux = Snap.load("svg/Revolver_icon.svg", function ( loadedFragment ) {
             g.append( loadedFragment );
             g.hover( hoverover, hoverout );
             } );

             var hoverover = function() { g.animate({ opacity: "0" }, 500, mina.linear ) };
             var hoverout = function() { g.animate({ opacity: "1" }, 500, mina.linear ) };*/
        }
    });


