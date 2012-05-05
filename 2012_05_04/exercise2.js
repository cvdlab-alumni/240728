//ES2 - fusoliera

var domain10 = INTERVALS(1)(20);
var domain20 = DOMAIN([[0,1],[0,1]])([30,50]);


var controls10 = [[-0.4,0,-1],[0.4,0,-1],[0,1.6,0],[0,-1.6,0]];
var controls11 = [[-4,0,0],[4,0,0],[0,17,0],[0,-17,0]];
var controls12 = [[-3.8,0,15],[3.8,0,15],[0,16,0],[0,-16,0]];
var controls13 = [[-3,0,23],[3,0,23],[0,14.5,0],[0,-14.5,0]];
var controls14 = [[-2,0,31],[2,0,31],[0,14,0],[0,-14,0]];
var controls15 = [[-1,0,39],[1,0,39],[0,13.5,0],[0,-13.5,0]];
var controls16 = [[-0.1,0,47],[0.1,0,47],[0,11,0],[0,-11,0]];
//var controls17 = [[-4,0,0],[4,0,0],[0,16,0],[0,-16,0]];


var c10 = CUBIC_HERMITE(S0)(controls10);
var c11 = CUBIC_HERMITE(S0)(controls11);
var c12 = CUBIC_HERMITE(S0)(controls12);
var c13 = CUBIC_HERMITE(S0)(controls13);
var c14 = CUBIC_HERMITE(S0)(controls14);
var c15 = CUBIC_HERMITE(S0)(controls15);
var c16 = CUBIC_HERMITE(S0)(controls16);
//var c17 = CUBIC_HERMITE(S0)(controls17);
//var c18 = CUBIC_HERMITE(S0)(controls18);


var curves2 = STRUCT(CONS(AA(MAP)([c10,c11,c12,c13,c14,c15,c16]))(domain10));


//DRAW(curves2);

var fus0 = BEZIER(S1)([c11,c12]);
var fus1 = BEZIER(S1)([c12,c13,c14,c15,c16]);
var fusoliera2 = MAP(fus0)(domain20);
var fusoliera3 = MAP(fus1)(domain20);
var fusolieraSuperiore = STRUCT([fusoliera2,fusoliera3]);
 //DRAW(fusolieraSuperiore);


var controls10 = [[-0.4,0,-1],[0.4,0,-1],[0,1.6,0],[0,-1.6,0]];
var controls11 = [[-4,0,0],[4,0,0],[0,17,0],[0,-17,0]];
var controls12 = [[-3.8,0,15],[3.8,0,15],[0,16,0],[0,-16,0]];
var controls13 = [[-3,0,23],[3,0,23],[0,13,0],[0,-13,0]];
var controls14 = [[-2,0,31],[2,0,31],[0,9,0],[0,-9,0]];
var controls15 = [[-1,0,39],[1,0,39],[0,6,0],[0,-6,0]];
var controls16 = [[-0.1,0,47],[0.1,0,47],[0,0.1,0],[0,-0.1,0]];
//var controls17 = [[-4,0,0],[4,0,0],[0,16,0],[0,-16,0]];


var c10 = CUBIC_HERMITE(S0)(controls10);
var c11 = CUBIC_HERMITE(S0)(controls11);
var c12 = CUBIC_HERMITE(S0)(controls12);
var c13 = CUBIC_HERMITE(S0)(controls13);
var c14 = CUBIC_HERMITE(S0)(controls14);
var c15 = CUBIC_HERMITE(S0)(controls15);
var c16 = CUBIC_HERMITE(S0)(controls16);
//var c17 = CUBIC_HERMITE(S0)(controls17);
//var c18 = CUBIC_HERMITE(S0)(controls18);


var curves2 = STRUCT(CONS(AA(MAP)([c10,c11,c12,c13,c14,c15,c16]))(domain10));


//DRAW(curves2);

var fus2 = BEZIER(S1)([c11,c12]);
var fus3 = BEZIER(S1)([c12,c13,c14,c15,c16]);

var fusoliera2 = MAP(fus2)(domain20);
var fusoliera3 = MAP(fus3)(domain20);
var fusolieraInferiore = S([1])([-1])((STRUCT([fusoliera2,fusoliera3])));
//DRAW(fusolieraInferiore);

var drawDisk = function(r,h,n){

	var domain = DOMAIN([[0,2*PI],[0,PI]])([n,n]);

	var mapping = function (p){
		var u = p[0];
		var v = p[1];
		return [r*COS(u)*COS(v), r*COS(u)*SIN(v), h];
	}

var mapped = MAP(mapping)(domain);
return mapped;
}


var tappo1 = drawDisk(4.2,-3,30);

var punta = T([2])([-3])(CYL_SURFACE([4.2,3])([32,4]));
var tappo2 = drawDisk(4.2,0,30);
var piolo = T([2])([-3.7])(CYL_SURFACE([0.4,0.7])());
var tappo3 = drawDisk(0.2,-2.4,30);

var controls20 = [[0,-5,0],[1,0,-0.4],[-1,0,0.4],[0,5,0]];
var controls21 = [[0,-5,0],[-1,0,0.4],[1,0,-0.4],[0,5,0]];
var c20 = BEZIER(S0)(controls20);
var c21 = BEZIER(S0)(controls21);

var pala = BEZIER(S1)([c20,c21]);


var elica = T([2])([-3.6])(MAP(pala)(domain20));

var anteriore = STRUCT([tappo1,punta,piolo,elica]);
//DRAW(anteriore);

var fusoliera = STRUCT([fusolieraSuperiore,fusolieraInferiore,anteriore]);

DRAW(fusoliera);

