//esercitazione 26 3 2012

var domain = DOMAIN([[0,10]])([10]);

var mapping = function (p){
	var u = p[0];
	return [u,1];
}

var mapped = MAP(mapping)(domain)

//mappatura bisettrice

//mappatura sinusoide

var domain = DOMAIN([[0,2*PI]])([10]);

var mapping = function (p){
	var u = p[0];
	return [u,SIN(u)];
}

var mapped = MAP(mapping)(domain)
DRAW(mapped)

//disegnare circonferenza
var drawCircle = function(r,n){
	var domain = DOMAIN([[0,2*PI]])([n]);

	var mapping = function (p){
		var u = p[0];
		return [r*COS(u),r*SIN(u)];
	}

var mapped = MAP(mapping)(domain);
}

//disegnare pila di circonferenze
var drawCircleStack = function(r,v,n){
	var domain = DOMAIN([[0,2*PI])([n]);

	var mapping = function (p){
		var u = p[0];
		return [r*COS(u),r*SIN(u), v];
	}

var mapped = MAP(mapping)(domain);
}