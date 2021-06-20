Algoritmo Ejemplo4
	definir can,des,pre,sbt,tot,igv Como Real;
	definir com, cat como texto;
	can=0; pre=0; sbt=0; des=0; tot=0; igv=0;cat=""; com="";
	escribir "Ingrese la cantidad de compra";
	leer can;
	escribir "Ingrese el precio del producto: ";
	leer pre;
	escribir "Ingrese la categoria: ";
	leer cat;
	escribir "Ingrese el comprobante: ";
	leer com;
	sbt=can*pre;
	si (cat="d") Entonces
		des=sbt*0.07;
	sino
		des=sbt*0.03;
	FinSi
	si (com="f") Entonces
		igv=sbt*0.18;
	SiNo
		igv=0;
	FinSi
	tot=sbt-des+igv;
	escribir "El subtotal es: ",sbt;
	escribir "El descuento es: ",des;
	Escribir "El igv es: ",igv;
	Escribir "El total es: ",tot;
	
FinAlgoritmo
