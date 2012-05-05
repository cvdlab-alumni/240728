//ES4 - assemblaggio



// fusoliera

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

//DRAW(fusoliera);














// coda

var domain31 = INTERVALS(1)(20);
var domain32 = DOMAIN([[0,1],[0,1]])([30,50]);

//DRAW(curve1);



var controls31 = [[15,0,0],[0,0.5,0],[0,-0.5,0],[15,0,0]];
var controls32 = [[18,0,1.5],[-5,0.5,1.5],[-5,-0.5,1.5],[18,0,1.5]];
var controls33 = [[16,0,3],[-6,0.5,3],[-4,-0.5,3],[16,0,3]];
var controls34 = [[14,0,4.5],[-7,0.5,4.5],[-3,-0.5,4.5],[14,0,4.5]];
var controls35 = [[12,0,6],[-6,0.5,6],[-6,-0.5,6],[12,0,6]];
var controls36 = [[10,0,7.5],[-4,0.5,7.5],[-2,-0.5,7.5],[10,0,7.5]];
var controls37 = [[8,0,9],[-2,0.5,9],[-2,-0.5,9],[8,0,9]];
var controls38 = [[4,0,10.5],[0,0.5,10.5],[0,-0.5,10.5],[4,0,10.5]];
//var controls8 = [[15,-2,56],[-2,1,58],[2,1,58],[15,-2,56]];

//var c0 = BEZIER(S0)(controls0);
var c31 = BEZIER(S0)(controls31);
var c32 = BEZIER(S0)(controls32);
var c33 = BEZIER(S0)(controls33);
var c34 = BEZIER(S0)(controls34);
var c35 = BEZIER(S0)(controls35);
var c36 = BEZIER(S0)(controls36);
var c37 = BEZIER(S0)(controls37);
var c38 = BEZIER(S0)(controls38);



var curves30 = STRUCT(CONS(AA(MAP)([c31,c32,c33,c34,c35,c36,c37,c38]))(domain31));

//DRAW(curves30);

var tim = BEZIER(S1)([c31,c32,c33,c34,c35,c36,c37,c38]);
var timoneSup = MAP(tim)(domain32);
 //DRAW(timoneSup);


var controls41 = [[15,0,0],[0,0.5,0],[0,-0.5,0],[15,0,0]];
var controls42 = [[12,0,1.5],[5,0.5,1.5],[5,-0.5,1.5],[12,0,1.5]];
var controls43 = [[9,0,3],[8,0.5,3],[8,-0.5,3],[9,0,3]];


var c41 = BEZIER(S0)(controls41);
var c42 = BEZIER(S0)(controls42);
var c43 = BEZIER(S0)(controls43);



var curves40 = STRUCT(CONS(AA(MAP)([c41,c42,c43]))(domain31));

//DRAW(curves40);

var tim2 = BEZIER(S1)([c41,c42,c43]);
var timoneInf = S([2])([-1])(MAP(tim2)(domain32));
 //DRAW(timoneInf);

var timone = STRUCT([timoneSup,timoneInf]);
//DRAW(timone);


var controls50 = [[0,0],[-3,4],[0,5],[-1,0]];
var controls51 = [[-3,4],[-10,4],[-1,0],[-1,0]];
var controls52 = [[-10,4],[-12,2],[-1,0],[-1,-2]];
var controls53 = [[-12,2],[-15,-2],[-1,-2],[-1,-2]];
var controls54 = [[-15,-2],[-13,-4],[-1,-2],[1,0]];
var controls55 = [[-13,-4],[0,-4],[1,0],[1,0]];
var controls56 = [[0,-4],[0,0],[1,0],[0,5]];
//var controls17 = [[-4,0,0],[4,0,0],[0,16,0],[0,-16,0]];


var c50 = CUBIC_HERMITE(S0)(controls50);
var c51 = CUBIC_HERMITE(S0)(controls51);
var c52 = CUBIC_HERMITE(S0)(controls52);
var c53 = CUBIC_HERMITE(S0)(controls53);
var c54 = CUBIC_HERMITE(S0)(controls54);
var c55 = CUBIC_HERMITE(S0)(controls55);
var c56 = CUBIC_HERMITE(S0)(controls56);
//var c17 = CUBIC_HERMITE(S0)(controls17);
//var c18 = CUBIC_HERMITE(S0)(controls18);


var curves51 = STRUCT(CONS(AA(MAP)([c50,c51,c52,c53]))(domain31));

var curves52 = STRUCT(CONS(AA(MAP)([c53,c54,c55,c56]))(domain31));

//DRAW(curves51);
//DRAW(curves52);

var c5051 = BEZIER(S1)([c50,c52]);
var c5152 = BEZIER(S1)([c51,c55]);
var c5253 = BEZIER(S1)([c53,c56]);
var c5354 = BEZIER(S1)([c54,c50]);
var c5455 = BEZIER(S1)([c52,c56]);
var c5556 = BEZIER(S1)([c53,c50]);


var sez1 = MAP(c5051)(domain32);
var sez2 = MAP(c5152)(domain32);
var sez3 = MAP(c5253)(domain32);
var sez4 = MAP(c5354)(domain32);
var sez5 = MAP(c5455)(domain32);
var sez6 = MAP(c5556)(domain32);




//var toppa = T([0])([-7])(drawDisk(3,0,30));
var toppa = T([0])([-7])(DISK(3)());
var stab1 = (STRUCT([sez1,sez2,sez3,sez4,sez5,sez6,toppa]));

//DRAW(stab1);

var stab2 = S([0])([-1])(stab1);

//DRAW(stab2);


var stabilizzatori = T([0])([8])(R([1,0])([PI/2])(COLOR([0,0,0])(STRUCT([stab1,stab2]))));

//DRAW(stabilizzatori);

var coda = STRUCT([timone,stabilizzatori]);
//DRAW(coda);












// ali

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







// aggiustamenti e assemblaggio

var adjFus2 = R([0,2])(PI/2)(fusoliera);
var adjFus3 = R([1,2])(PI/2)(adjFus2);
var adjFus4 = R([0,2])(PI/12)(adjFus3);
DRAW(adjFus4);

var adjCoda1 = R([0,1])(PI)(coda);
var adjCoda2 = T([0,2])([55,3])(adjCoda1);
var adjCoda3 = R([0,2])(PI/12)(adjCoda2);
DRAW(adjCoda3);



var adjAli1 = R([1,2])(PI/2)(ali);
var adjAli2 = T([0,1,2])([-3,28,11])(adjAli1);

DRAW(adjAli2);
 




//sostegni ruote e ali
 var cyl = CYL_SURFACE([0.2,3])();
//DRAW (cil);

var cyl2 = R([2,0])(PI/12)(cyl);
var sost1 = T([0,1,2])([6,2.5,-8])(cyl2);
var sost2 = T([1])([-5])(sost1);

//var ruota1 =  T([0,1,2])([6,2,-11])(R([1,2])(PI/2)(EXTRUDE(1)(DISK(2)())));
//var ruota2 =  T([1])([-5])(ruota1);

DRAW(sost1);
DRAW(sost2);

var sostA1 = T([0,1,2])([6,1,2])(R([2,1])(-PI/9)(CYL_SURFACE([0.2,8])()));
DRAW(sostA1);

var sostA2 = T([0,1,2])([6,-1,2])(R([2,1])(PI/9)(CYL_SURFACE([0.2,8])()));
DRAW(sostA2);



