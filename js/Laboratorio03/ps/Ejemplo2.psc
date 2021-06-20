Algoritmo ejemplo2
	definir lad, area como entero;
	definir men como texto;
	lad=0; area=0; men="";
	escribir "Ingresa el lado del cuadrado";
	leer lad;
	area=lad*lad;
	si(area>100) Entonces
		men="Es un cuadrado  grande";
	FinSi
	escribir "El area del cuadrado es: ",area;
	escribir men;
FinAlgoritmo
