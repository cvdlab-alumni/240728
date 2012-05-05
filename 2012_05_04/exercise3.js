//ES3 - timone e stabilizzatori

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


var stabilizzatori = T([0])([8])(R([1,0])([PI/2])(STRUCT([stab1,stab2])));

//DRAW(stabilizzatori);

var coda = STRUCT([timone,stabilizzatori]);
DRAW(coda);
