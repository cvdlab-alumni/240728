	var base1 = SIMPLEX_GRID([[-1,38],
							  [-4,13],
							  [1.1]]);

	var base2 = SIMPLEX_GRID([[-1,35],
							  [4],
							  [1.1]]);

	var base3 = SIMPLEX_GRID([[-39,12],
							  [-4,12],
							  [1.1]]);

	var base4 = SIMPLEX_GRID([[-1,8],
							  [-17,5],
							  [1.3]]);

	var base5 = SIMPLEX_GRID([[1],
							  [2],
							  [1.1]]);

	var base6 = SIMPLEX_GRID([[-36,3],
							  [1],
							  [1.1]]);

	var base7 = SIMPLEX_GRID([[-51,1],
							  [-4,2],
							  [1.1]]);

var grad1 = SIMPLEX_GRID([[-36,0.5],
						  [-1,3],
						  [0.9]]);

var grad2 = SIMPLEX_GRID([[-36.5,0.5],
						  [-1,3],
						  [0.75]]);

var grad3 = SIMPLEX_GRID([[-37,0.5],
						  [-1,3],
						  [0.6]]);

var grad4 = SIMPLEX_GRID([[-37.5,0.5],
						  [-1,3],
						  [0.45]]);

var grad5 = SIMPLEX_GRID([[-38,0.5],
						  [-1,3],
						  [0.3]]);

var grad6 = SIMPLEX_GRID([[-38.5,0.5],
						  [-1,3],
						  [0.15]]);

	var gradinata = STRUCT([grad1,grad2,grad3,grad4,grad5,grad6]);

		
		var base = COLOR([0.95,0.95,0.95])
					(STRUCT([base1,base2,base3,base4,base5,base6,base7,gradinata]));

		DRAW(base);



	var piscina1 = SIMPLEX_GRID([[-2,18],
						 		 [-2,7],
						  		 [-1.1,0.01]]);

	var piscina2 = SIMPLEX_GRID([[-47,3],
						 	     [-6,9],
						  	     [-1.1,0.01]]);

		
		var piscine = COLOR([0.7,0.7,1])(STRUCT([piscina1,piscina2]));
		
		DRAW(piscine);



	var muro1 =  SIMPLEX_GRID([[-1,0.225],
						  [-1,21],
						  [-1.1,3]]);

	var muro2 =  SIMPLEX_GRID([[-1,8],
						  [-21.775,0.225],
						  [-1.1,3]]);

	var muro3 =  SIMPLEX_GRID([[-8.775,0.225],
						  [-17,5],
						  [-1.1,3]]);

	var muro4 =  SIMPLEX_GRID([[-1,7],
						  [-1,0.225],
						  [-1.1,3]]);

		var muroEsternoOvest = STRUCT([muro1,muro2,muro3,muro4]);

	var muro5 =  SIMPLEX_GRID([[-41,10],
						  [-5,0.225],
						  [-1.1,3]]);

	var muro6 =  SIMPLEX_GRID([[-50.775,0.225],
						  [-5,11],
						  [-1.1,3]]);

	var muro7 =  SIMPLEX_GRID([[-38,13],
						  [-15.775,0.225],
						  [-1.1,3]]);

		var muroEsternoEst = STRUCT([muro5,muro6,muro7]);

			var muriEsterni = COLOR([0.9,0.9,0.9])(STRUCT([muroEsternoOvest,muroEsternoEst]));

			DRAW(muriEsterni);

	var sez1t6 =  SIMPLEX_GRID([[-4.9,0.15],
						  [-17,1,-1,2.9],
						  [-1.1,2.5]]);

	var sez2t6 =  SIMPLEX_GRID([[-4.9,0.15],
						  [-17,4.9],
						  [-1.1,-2.5,0.5]]);

	var sez1t7 =  SIMPLEX_GRID([[-5,1,-1,1.9],
						  [-20.4,0.15],
						  [-1.1,2.5]]);

	var sez2t7 =  SIMPLEX_GRID([[-5,3.9],
						  [-20.4,0.15],
						  [-1.1,-2.5, 0.5]]);

		var t6 = STRUCT([sez1t6,sez2t6]);


		var t7 = STRUCT([sez1t7,sez2t7]);


		var t1 = SIMPLEX_GRID([[-7.5,18],
						  [-14.9,0.15],
						  [-1.1,3]]);


		var t2 = SIMPLEX_GRID([[-25,9],
						  [-7.4,0.15],
						  [-1.1,3]]);


		var t3 = SIMPLEX_GRID([[-30,10],
						  [-13.4,0.15],
						  [-1.1,3]]);


		var t4 = SIMPLEX_GRID([[-37,5.5],
						  [-11.4,0.15],
						  [-1.1,3]]);


		var t5 = SIMPLEX_GRID([[-44.4,0.15],
						  [-8,6],
						  [-1.1,3]]);

			var tramezzi = COLOR([0.2,0.2,0.2])(STRUCT([t1,t2,t3,t4,t5,t6,t7]));

			DRAW(tramezzi);


		var vetrata = COLOR([0,0.6,1])(SIMPLEX_GRID([[-30,1],
						  [-7.5,6],
						  [-1.1,3]]));

		DRAW(vetrata);




var colonnine = COLOR([0.1,0.1,0.1])(
					T([0])([26])(SIMPLEX_GRID([
						REPLICA(3)([0.06,-6.5,0.06]),
									[-7,0.06,-8,0.06],
									[-1.1,3]])));

		DRAW(colonnine);



var piede = T([0])([8.2])(SIMPLEX_GRID([REPLICA(20)([0.2,-0.4,0.2]),
						  [-14,0.5],
						  [-1.1,0.5]]));

var seduta =T([0])([8])(SIMPLEX_GRID([REPLICA(16)([1]),
						  [-14,0.5],
						  [-1.6,0.25]]));

	var panca = STRUCT([piede,seduta]);

	DRAW(panca);


var copertura1 = SIMPLEX_GRID([[10],
						  [-13,10],
						  [-1.1,-3,0.25]]);

var copertura2 = SIMPLEX_GRID([[-24,23],
						  [-5,11],
						  [-1.1,-3,0.25]]);

	var coperture = COLOR([0.9,0.9,0.9])(STRUCT([copertura1,copertura2]));

		DRAW(coperture);



			