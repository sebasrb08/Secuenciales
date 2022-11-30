console.log("ejercicios de algoritmos secuenciales ")
console.log("ejercicio 1")
let A,B,C
A = 2
B = 5
C = 1
console.log('ejercicio a')
console.log(3 * A - 4 * B / A**2)
console.log("ejercicio b")
console.log((((B + C)/2*A+10)*3*B)-6)

console.log("\nejercicio 2 ")
let capital,tasa,ganancia
capital = parseFloat(prompt("Digite cuanto invertio de capital"))
tasa = 1.2/100
ganancia = tasa * capital
console.log(`tendra de ganancia ${ganancia}`)

console.log("\n ejeercicio 3")
let  altu,base,area
altu = parseInt(prompt("digite la altura del triangulo  "))
base = parseInt(prompt("digite la base del triangulo  "))
area = base*altu/2
console.log(`el area es de ${area}`)

console.log("\nejercicio 4")
let salario,comision,autoV,totalM,totalS
autoV=parseInt(prompt("digite cuantos autos vendidos son  "))
totalM=parseFloat(prompt("Digite el monto total de ventas  "))
comision= 170000 * autoV
salario = 980000
totalS = (totalM * 0.05)+(salario+comision)
console.log(`el salario del vendedor es de ${totalS}`)

console.log("\nejercicio 5")
let nota1,nota2,nota3,nota4,porcen,porcen2
nota1 =parseFloat(prompt("Digite la primera nota  "))
nota2 =parseFloat(prompt("Digite la segunda nota  "))
nota3 =parseFloat(prompt("Digite la tercera nota  "))
nota4 =parseFloat(prompt("Digite la cuarta nota  "))
porcen = (nota1+nota2)*0.40
porcen2= (nota3+nota4)*0.60
console.log(`el promedio de calificaciones es ${(porcen+porcen2)/2}`)

console.log("\nejercicio 6")
let edad,pulsaciones 
edad=parseInt(prompt("digite su edad  "))
pulsaciones = (220 -edad)/10
console.log(`el numero de pulsaciones por cada 10 segundos es de ${pulsaciones}`)

console.log("\nejercicio 7")
let sueldo,ventas1,ventas2,ventas3,comi1,comi2,comi3
sueldo = parseFloat(prompt("digite su sueldo base  "))
ventas1 = parseFloat(prompt("Digite el valor de su primera venta "))
ventas2 = parseFloat(prompt("Digite el valor de su segunda venta "))
ventas3 = parseFloat(prompt("Digite el valor de su tercera venta "))
comi1= ventas1 * 0.10
comi2=ventas2 *0.10
comi3 = ventas3 *0.10
console.log(`el vendedor por concepto de comision tendra ${comi1+comi2+comi3}y tendra un sueldo total de ${(comi1+comi2+comi3)+sueldo}`)

console.log("\n ejercicio 8  ")
let examenM,tareaM1,tareaM2,tareaM3,examenF,tareaF1,tareaF2,examenQ,tareaQ1,tareaQ2,tareaQ3,promedioM,promedioF,promedioQ
examenM =parseFloat(prompt("digite la nota del examen de matematicas "))
tareaM1 = parseFloat(prompt("Digite la nota de la primera tarea de matematicas "))
tareaM2 = parseFloat(prompt("Digite la nota de la segunda tarea de matematicas "))
tareaM3 = parseFloat(prompt("Digite la nota de la tercera tarea de matematicas "))
examenF =parseFloat(prompt("digite la nota del examen de fisica  "))
tareaF1 = parseFloat(prompt("Digite la nota de la primera tarea de fisica "))
tareaF2 = parseFloat(prompt("Digite la nota de la segunda tarea de fisica "))
examenQ =parseFloat(prompt("digite la nota del examen de quimica  "))
tareaQ1 = parseFloat(prompt("Digite la nota de la primera tarea de quimica "))
tareaQ2 = parseFloat(prompt("Digite la nota de la segunda tarea de quimica "))
tareaQ3 = parseFloat(prompt("Digite la nota de la tercera tarea de quimica "))

promedioM= ((tareaM1+tareaM2+tareaM3)/3)*0.10 +(examenM *0.90)
promedioF=((tareaF1+tareaF2)/2)*0.20 + (examenF * 0.80)
promedioQ = ((tareaQ1+tareaQ2+tareaQ3)/3)*0.15 +(examenQ*0.85)
console.log(`el promedio de matematicas es: ${promedioM}\nel promedio de fisica es:${promedioF}\nel promedio de quimica es ${promedioQ}\ny el promedio general es de ${(promedioM+promedioF+promedioQ)/3}`)