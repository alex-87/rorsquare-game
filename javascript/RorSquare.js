
squareNumber = 0;

matrice = [ [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0] ];

// Déplacements 
// ###

function goLeft(range) {
	
	var tempVar = matrice[range][0];
	
	for(var i=1; i < matrice.length; i++) {
		matrice[range][i - 1] = matrice[range][i];
	};
	
	matrice[range][matrice.length - 1] = tempVar;
}

function goRight(range) {
	
	var tempVar = matrice[range][matrice.length - 1];
	
	for(var i=matrice.length - 1; i > 0; i--) {
		matrice[range][i] = matrice[range][i - 1];
	};
	
	matrice[range][0] = tempVar;
}

function goHigh(range) {

	var tempVar = matrice[0][range];
	
	for(var i=1; i < matrice.length; i++) {
		matrice[i - 1][range] = matrice[i][range];
	};
	
	matrice[matrice.length - 1][range] = tempVar;
}

function goDown(range) {
	
	var tempVar = matrice[matrice.length - 1][range];
	
	for(var i=matrice.length - 1; i > 0; i--) {
		matrice[i][range] = matrice[i - 1][range];
	};
	
	matrice[0][range] = tempVar;
}

// ###

function lireResultatCourrant() {
	
	var res = new Array();
	
	for(var i=0; i < matrice.length; i++) {
		
		var resTemp = 0;
		for(var u=0; u < matrice.length; u++) {
			resTemp += matrice[i][u];
		};
		
		res.push(resTemp);
	};
	
	for(var i=0; i < matrice.length; i++) {
		var resTemp = 0;
		for(var u=0; u < matrice.length; u++) {
			resTemp += matrice[u][i];
		};
		
		res.push(resTemp);
	};
	return res;
}

function victoire() {
	
	var verf = lireResultatCourrant();
	var nbrV = verf[0];
	
	for(var i=1; i< verf.length; i++) {
		if( verf[i]!=nbrV )return false;
	};
	
	return true;
}

function defSquareNumber() {
	var resTemp = 0;
	for(var u=0; u < matrice.length; u++) {
		resTemp += matrice[0][u];
	};
	squareNumber = resTemp;
}

// ###

// Construction du jeu
function genereGrilleValide() {
	
	do {
		
		for(var i=0; i < matrice.length; i++) {
			for(var j=0; j < matrice.length; j++) {
				matrice[i][j] = Math.floor((Math.random() * 10) ) % 32;
			};
		};
		
	} while( !victoire() );
	
}

function desordre() {
	
	for(var i=0; i < matrice.length; i++) {
		var chaos = Math.floor((Math.random() * 10) + 17) % (4);
		if( chaos==0 )goLeft(i % matrice.length);
		if( chaos==1 )goRight(i % matrice.length);
		if( chaos==2 )goHigh(i % matrice.length);
		if( chaos==3 )goDown(i % matrice.length);
	};
}

function victoireCase() {
	if( !victoire() )return;
	document.getElementById("victoire").style.display = "block";
}

// Affichage

function refreshGrid() {
	
	var tResult = lireResultatCourrant();
	document.getElementById("r1").innerHTML = tResult[0];
	document.getElementById("r2").innerHTML = tResult[1];
	document.getElementById("r3").innerHTML = tResult[2];
	document.getElementById("r4").innerHTML = tResult[3];
	document.getElementById("r5").innerHTML = tResult[4];
	document.getElementById("r6").innerHTML = tResult[5];
	document.getElementById("r7").innerHTML = tResult[6];
	document.getElementById("r8").innerHTML = tResult[7];
	
	document.getElementById("a").innerHTML = matrice[0][0];
	document.getElementById("b").innerHTML = matrice[0][1];
	document.getElementById("c").innerHTML = matrice[0][2];
	document.getElementById("d").innerHTML = matrice[0][3];
	document.getElementById("e").innerHTML = matrice[1][0];
	document.getElementById("f").innerHTML = matrice[1][1];
	document.getElementById("g").innerHTML = matrice[1][2];
	document.getElementById("h").innerHTML = matrice[1][3];
	document.getElementById("i").innerHTML = matrice[2][0];
	document.getElementById("j").innerHTML = matrice[2][1];
	document.getElementById("k").innerHTML = matrice[2][2];
	document.getElementById("l").innerHTML = matrice[2][3];
	document.getElementById("m").innerHTML = matrice[3][0];
	document.getElementById("n").innerHTML = matrice[3][1];
	document.getElementById("o").innerHTML = matrice[3][2];
	document.getElementById("p").innerHTML = matrice[3][3];
	
	document.getElementById("square").innerHTML = squareNumber;
	
	victoireCase();
}

function initialiser() {
	genereGrilleValide();
	defSquareNumber();
	desordre();
	refreshGrid();
}

window.onload = function() {
  initialiser();
};
