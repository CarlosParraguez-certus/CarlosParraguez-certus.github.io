Algoritmo Ejemplo2
	definir n1,n2,n3,n4,prom como real;
	definir men como texto;
	n1=0; n2=0; n3=0; n4=0; prom=0; men="";
	escribir "Ingresa la nota 1: ";
	leer n1;
	escribir "Ingresa la nota 2: ";
	leer n2;
	escribir "Ingresa la nota 3: ";
	leer n3;
	escribir "Ingresa la nota 4: ";
	leer n4;
	prom=(n1+(2*n2)+n3+(3*n4))/7;
	si (prom>=13) Entonces
		men="Aprobado";
	SiNo
		men="Desaprobado";
	FinSi
	escribir "El promedio es: ",prom;
	escribir men;
FinAlgoritmo
