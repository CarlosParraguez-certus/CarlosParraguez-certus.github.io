Algoritmo Ejemplo1
	Definir est Como Entero;
	Definir men como texto;
	est=0; men="";
	escribir "Ingrese un numero de estacion 1 o 2 o 3 o 4:";
	leer est;
	si (est=1) entonces
		men ="Verano";
	SiNo
		SI (est=2) Entonces
			men="Otoño";
		SiNo
			si (est=3) Entonces
				men="Invierno";
			SiNo
				si(est=4) Entonces
					men="Primavera";
				SiNo
					men="No es un numero valido";
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir "La estacion es: ",men;
	
	
FinAlgoritmo
