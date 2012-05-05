//ES1-ali

var domain1 = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);

//DRAW(curve1);


var controls0 = [[15,-2,-1],[-2,1,-3],[2,1,-3],[15,-2,-1]];
var controls1 = [[15,-2,0],[0,5,0],[0,-2,0],[5,2,0],[15,-2,0]];
var controls2 = controls1.map(function(p){return[p[0],p[1]-0.5,p[2]+10]});
var controls3 = controls1.map(function(p){return[p[0],p[1]-1,p[2]+20]});
var controls4 = controls1.map(function(p){return[p[0],p[1]-2,p[2]+30]});
var controls5 = controls1.map(function(p){return[p[0],p[1]-2,p[2]+35]});
var controls6 = controls1.map(function(p){return[p[0],p[1]-1,p[2]+45]});
var controls7 = controls1.map(function(p){return[p[0],p[1]-0.5,p[2]+55]});
var controls8 = [[15,-2,56],[-2,1,58],[2,1,58],[15,-2,56]];

var c0 = BEZIER(S0)(controls0);
var c1 = BEZIER(S0)(controls1);
var c2 = BEZIER(S0)(controls2);
var c3 = BEZIER(S0)(controls3);
var c4 = BEZIER(S0)(controls4);
var c5 = BEZIER(S0)(controls5);
var c6 = BEZIER(S0)(controls6);
var c7 = BEZIER(S0)(controls7);
var c8 = BEZIER(S0)(controls8);


var curves = STRUCT(CONS(AA(MAP)([c0,c1,c2,c3,c4,c5,c6,c7,c8]))(domain1));

//DRAW(curves);

var wing = BEZIER(S1)([c0,c1,c2,c3,c4,c5,c6,c7,c8]);
var wingsurf1 = MAP(wing)(domain2);
 //DRAW(wingsurf1);

 var wingsurf2 = T([0,1])([3,-15])(wingsurf1);
 //DRAW(wingsurf2);

var cil = CYL_SURFACE([0.2,16])();
//DRAW (cil);
var cil1 = R([1,2])(PI/2)(cil);
var cil2 = R([0,1])(PI/12)(cil1);
var asta1 = T([0,1,2])([6,0,6])(cil2)
var asta2 = T([0,1])([5,-1])(asta1);
var asta3 = T([2])([45])(asta1);
var asta4 = T([2])([45])(asta2);

var aste = STRUCT([asta1,asta2,asta3,asta4]);
//DRAW (aste);

var ali = STRUCT([wingsurf1,wingsurf2,aste]);

DRAW(ali);

