Algoritmo Ejemplo3
	Definir sb, bon, des, sf Como Real;
	Definir cat como texto;
	sb=0; bon=0; des=0; sf=0; cat="";
	Escribir "Ingrese el sueldo basico:";
	leer sb;
	escribir "Ingrese una categortia A o B o C o D:";
	leer cat;
	si(cat="a") Entonces
		bon=sb*0.03;
		des=sb*0.01;
	SiNo
		si(cat="b") Entonces
			bon=sb*0.05;
			des=sb*0.02;
		SiNo
			si(cat="c") Entonces
				bon=sb*0.07;
				des=sb*0.03;
			SiNo
				si(cat="d") Entonces
					bon=sb*0.09;
					des=sb*0.04;
				SiNo
					bon=0;
					des=0;
				FinSi
			FinSi
		FinSi
	FinSi
	sf=sb+bon-des;
	Escribir "El sueldo basico es: ",sb;
	Escribir "La bonificacion es: ",bon;
	Escribir "El descuento es: ",des;
	Escribir "El sueldo final es:",sf;
FinAlgoritmo
