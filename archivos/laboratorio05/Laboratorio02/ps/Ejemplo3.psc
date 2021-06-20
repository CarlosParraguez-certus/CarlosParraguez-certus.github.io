Algoritmo Ejemplo3
	definir pre,sbt,igv,tot Como real;
	definir can Como Entero;
	pre=0; sbt=0; igv=0; tot=0;
	escribir "Ingresa el precio del producto";
	leer pre;
	escribir "Ingresa la cantidad del producto";
	leer can;
	sbt=pre*can;
	igv=sbt*0.18;
	tot=pre+igv;
	escribir "El subtotal es:",sbt;
	Escribir "El igv es:",igv;
	Escribir "El total es:",tot;
FinAlgoritmo
