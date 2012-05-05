//ES5 - semplicissima pista di atterraggio


var domain = INTERVALS(1)(20);

var controls1 =  [[-150,-50],[150,-50],[0,1],[0,1]];
var controls2 = [[-150,50],[150,50],[0,1],[0,1]]; //2 punti e 2 tangenti
//var controls2 = [[2,0,0],[0,2,0],[0,3,0],[-3,0,0]];//2 punti e 2 tangenti

var c1 = CUBIC_HERMITE(S0)(controls1);
var c2 = CUBIC_HERMITE(S0)(controls2);
var curve1 = MAP(c1)(domain);
var curve2 = MAP(c2)(domain);
//DRAW(curve2);

var struct = STRUCT([curve1,curve2]);
DRAW(struct);

var s12 = BEZIER(S1)([c1,c2]);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);
var airstrip = MAP(s12)(domain2);
DRAW(COLOR(1,1,0.5)(airstrip);

