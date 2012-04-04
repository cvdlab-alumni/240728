var perSud = POLYLINE([[1,2], [0,2], [0,0], [39,0], [39,4], [52,4], [52,6], [51,6]]);

var perNord = POLYLINE([[9,17], [39,17], [39,16]]);

	var perimPavim = STRUCT([perSud,perNord]); 



var muroOvest = POLYLINE([[8,1], [1,1], [1,22], [9,22], [9,17]]);

var muroEst = POLYLINE([[38,16], [51,16], [51,5], [41,5]]);

	var muriEsterni = STRUCT([muroOvest,muroEst]);

	var coloredMuri = COLOR([0,0,0])(muriEsterni);



var piscinaOvest = POLYLINE([[1,1], [1,10], [21,10], [21,1], [1,1]]);

var piscinaEst = POLYLINE([[47,5], [47,16], [51,16], [51,5], [47,5]]);

	var piscine = STRUCT([piscinaOvest,piscinaEst]);

	var coloredPiscine = COLOR([0,0,1])(piscine);




var t1 = POLYLINE([[7.5,15], [25.5,15]]);

var t2 = POLYLINE([[25,7.5], [34,7.5]]);

var t3 = POLYLINE([[30,13.5], [40,13.5]]);

var t4 = POLYLINE([[37,11.5], [42.5,11.5]]);

var t5 = POLYLINE([[44.5,14], [44.5,8]]);

var g = POLYLINE([[1,17], [9,17]]);

var t6 = POLYLINE([[5,22], [5,17]]);

var t7 = POLYLINE([[5,20.5], [9,20.5]]);

var v1 = POLYLINE([[31,13.5], [31,7.5]]);

var v2 = POLYLINE([[32,13.5], [32,7.5]]);

	var tramezzi = STRUCT([t1,t2,t3,t4,t5,t6,t7,v1,v2,g]);

	var coloredTram =  COLOR([0,0,0])(tramezzi);



var areaScala = POLYLINE([[36,1], [36,4], [39,4], [39,1], [36,1]]);

var g1 = POLYLINE([[36.5,4], [36.5,1]]);

var g2 = POLYLINE([[37,4], [37,1]]);

var g3 = POLYLINE([[37.5,4], [37.5,1]]);

var g4 = POLYLINE([[38,4], [38,1]]);

var g5 = POLYLINE([[38.5,4], [38.5,1]]);

	var gradinata = STRUCT([areaScala,g1,g2,g3,g4,g5]);


var plan = STRUCT([perimPavim,coloredTram,coloredMuri,coloredPiscine,gradinata]);

DRAW(plan);

