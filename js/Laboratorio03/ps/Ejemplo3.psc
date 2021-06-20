Algoritmo Ejemplo3
	definir n1, n2, prom como real;
	definir men como texto;
	n1=0; n2=0; prom=0; men="";
	Escribir "Ingrese la nota 1:";
	leer n1;
	escribir "Ingrese la nota 2:";
	leer n2;
	prom=(n1+n2)/2;
	si (prom>=13) Entonces
		men="Aprobados";
	FinSi
	escribir "El promedio es: ",prom;
	escribir men;
FinAlgoritmo
