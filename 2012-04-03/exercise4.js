
//HOMEWORK1 - ESERCIZIO4

var drawOgival = function(r,hh,n){
	var domain = DOMAIN([[0,2*PI],[0,PI]])([n,n]);
		
	var mapping = function (p){
		var u = p[0];
		var v = p[1];
		
		return [r*COS(u)*COS(v), r*COS(u)*SIN(v), (r*hh)*SIN(u)];
		
	}

var mapped = MAP(mapping)(domain);
return mapped;
}

var uovo = drawOgival(1,2,40);

var uovotraslato = T([[0],[1],[2]])([[10],[10],[3]])(uovo);

DRAW(uovotraslato);

//BUONA PASQUA

