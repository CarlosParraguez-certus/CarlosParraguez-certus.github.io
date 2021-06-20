Algoritmo Ejemplo4
	definir sf,sb,bon,des,nh,ch Como Real;
	sf=0; sb=0; bon=0; des=0; nh=0; ch=0;
	escribir "Ingrese el costo por hora";
	leer ch;
	escribir "Ingresa el numero de horas trabajadas";
	leer nh;
	sb=nh*ch;
	bon=sb*0.07;
	des=sb*0.0375;
	sf=sb+bon-des;
	escribir "El sueldo basico es:",sb;
	escribir "La bonificacion es:",bon;
	escribir "El descuento es:",des;
	escribir "El sueldo final:",sf;
FinAlgoritmo
