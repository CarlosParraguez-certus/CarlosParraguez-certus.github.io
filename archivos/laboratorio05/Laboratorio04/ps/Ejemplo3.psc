Algoritmo Ejemplo3
	definir area,alt,bas Como real;
	definir men como texto;
	alt=0; area=0; bas=0; men="";
	escribir "Ingrese la base del rectangulo";
	leer bas;
	escribir "Escribe la altura del rectangulo";
	leer alt;
	area=bas*alt;
	si (area>100) Entonces
		men="Es un rectangulo grande";
	SiNo
		men="Es un rectangulo pequeño";
	FinSi
	escribir "El area del rectangulo es: ",area;
	escribir men;
FinAlgoritmo
