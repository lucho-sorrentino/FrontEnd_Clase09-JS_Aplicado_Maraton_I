        // ··········· MARATON I JS Aplicado ···········

        // *********** Ejericicio 01 ***********
// La NASA nos pidió un programa que calcule la edad de las personas en sus planetas favoritos. Para eso necesitamos una web (sencilla!!) donde solicitaremos mediante un input y un select al usuario, su edad en la tierra y su planeta favorito. Luego, mostrarle en un tercer input o en un párrafo en el html, su edad correspondiente al planeta que eligió.
// Días que tardan en dar la vuelta al sol:
// Mercurio: 87.97
// Venus: 224.7
// Tierra: 365.26 (Por esto cada 4 años hay un año bisiesto)
// Marte: 686.68
// Jupiter: 4,331.98
// Saturno: 10,760.55
// Urano: 30,685.49
// Neptuno: 60,191.19

// Por ejemplo si tu edad son 23 años, en Marte tu edad será: 12.23 años. Puede mostrarse redondeado a 12. (Por eso todos quieren ir a Marte, para ser más jóvenes!!!)

// const mercurio = 87.97
// const venus = 224.7
// const tierra = 365.26
// const marte = 686.68
// const jupiter = 4331.98
// const saturno = 10760.55
// const urano = 30685.49
// const neptuno = 60191.19
// const edad = document.querySelector("#age")
// const planeta = document.querySelector("#planet")
// const edadFinal = document.querySelector("#edadFinal")

// const edadEspacial = () => {    
//     let daysPerYear = parseFloat( (edad.value) * 365.26 )
//     console.log(daysPerYear)
//     let selectedPlanet = planet.value
//     console.log(selectedPlanet)
//     calculadora(daysPerYear, selectedPlanet)    
// }

// function calculadora (daysPerYear, selectedPlanet) {
//     let edad2;
//     if (selectedPlanet === "mercurio") {
//         edad2 = daysPerYear / mercurio
//     } else if (selectedPlanet === "venus") {
//         edad2 = daysPerYear / venus
//     } else if (selectedPlanet === "tierra") {
//         edad2 = daysPerYear / tierra
//     } else if (selectedPlanet === "marte") {
//         edad2 = daysPerYear / marte
//     } else if (selectedPlanet === "jupiter") {
//         edad2 = daysPerYear / jupiter
//     } else if (selectedPlanet === "saturno") {
//         edad2 = daysPerYear / saturno
//     } else if (selectedPlanet === "urano") {
//         edad2 = daysPerYear / urano
//     } else if (selectedPlanet === "neptuno") {
//         edad2 = daysPerYear / neptuno
//     } else {
//         alert("Error")
//     }
// return edadFinal.innerHTML = ` En ${selectedPlanet} tu edad sería de ${edad2} años!`
// }
// planeta.addEventListener("change", edadEspacial)



        // *********** Ejericicio 02 ***********
// Un vivero nos pide armar un sistema que ayude a las personas a decidir qué tipo de planta colocar en su jardín según la flor que quieran. Para eso, les daremos diferentes opciones (mediante un select, o mediante botones), para que puedan elegir varios tipos de flor. Al elegir una flor, se debe mostrar su imagen. Cuando se le pase el mouse por encima a esa imagen, debe mostrar como se ve el árbol de dicha flor.

//  const selector = document.querySelector("#selectTree")
//  const flores = document.querySelector("#flowers")

//  const pickerFlores = () => {
//      if (selector.value === "opciones") {
//         flores.src = ""
//      } else if (selector.value === "ceibo") {
//         flores.src = "images/ejerc02/flor.ceibo.jpg"
//      } else if (selector.value === "jacaranda") {
//         flores.src = "images/ejerc02/flor.jacaranda.jpg"
//      } else if (selector.value === "palo") {
//         flores.src = "images/ejerc02/flor.palo.jpg"
//      } else {
//          console.log("Error")
//      } 
//  }
// selector.addEventListener("change", pickerFlores)

// const switchPic = () => {
//     if (flores.src = "images/ejerc02/flor.ceibo.jpg") {
//         flores.src = "images/ejerc02/arbol.ceibo.jpg"
//     } else if (flores.src = "images/ejerc02/flor.jacaranda.jpg") {
//         flores.src = "images/ejerc02/arbol.jacaranda.jpg"
//     } else if (flores.src = "images/ejerc02/flor.palo.jpg") {
//         flores.src = "images/ejerc02/arbol.palo.jpg"
//     } else {
//         console.log("Error")
//     }
// }
// flores.addEventListener("mouseover", switchPic)





//         *********** Ejericicio 03 ***********
// En un juego de mesa, necesitan implementar un sistema de puntos que sea justo para decidir quién arranca. Para esto, cada jugador tirará 4 veces el dado (del 1 al 6). Luego, se hará la suma de los 4 dados. Quien haya sacado más puntuación será quien inicie el juego. Nota: A los jugadores se los ha identificado con “jugador 1, 2, etc…” Según el órden en el cuál tiraron. 

// Math.floor((Math.random() * 100) + 1);

// const boton1 = document.querySelector("#boton1")
// const boton2 = document.querySelector("#boton2")
// const boton3 = document.querySelector("#boton3")
// const parcial1 = document.querySelector("#parcial1")
// const parcial2 = document.querySelector("#parcial2")
// const parcial3 = document.querySelector("#parcial3")
// const total1 = document.querySelector("#total1")
// const total2 = document.querySelector("#total2")
// const total3 = document.querySelector("#total3")
// const contador1 = document.querySelector("#contador1")
// const contador2 = document.querySelector("#contador2")
// const contador3 = document.querySelector("#contador3")

// let scoreTotal1 = 0;
// let scoreTotal2 = 0;
// let scoreTotal3 = 0;
// let cantTiros1 = 0;
// let cantTiros2 = 0;
// let cantTiros3 = 0;

// const tirarDados = (e) => {      
        
//         if (e.target.value === "1") {
//                 console.log(`Jugador ${e.target.value}`)                
//                 cantTiros1 = cantTiros1 + 1
//                 console.log(`Tiros efectuados ${cantTiros1}`)
//                 let scoreParcial1 = Math.floor( (Math.random() * 6) + 1 );           
//                 scoreTotal1 = scoreTotal1 + scoreParcial1;
//                 console.log(`Puntaje parcial ${scoreParcial1}`)
//                 console.log(`Puntaje total ${scoreTotal1}`)
//                 parcial1.innerText = `Puntaje Parcial: ${scoreParcial1}`
//                 total1.innerText = `Puntaje Total: ${scoreTotal1}`
//                 contador1.innerText = `Cantidad de lanzamientos: ${cantTiros1}`
//         } else if (e.target.value === "2") {
//                 console.log(`Jugador ${e.target.value}`)
//                 cantTiros2 = cantTiros2 + 1
//                 console.log(`Tiros efectuados ${cantTiros2}`)
//                 let scoreParcial2 = Math.floor( (Math.random() * 6) + 1 );           
//                 scoreTotal2 = scoreTotal2 + scoreParcial2;
//                 console.log(`Puntaje parcial ${scoreParcial2}`)
//                 console.log(`Puntaje total ${scoreTotal2}`)
//                 parcial2.innerText = `Puntaje Parcial: ${scoreParcial2}`
//                 total2.innerText = `Puntaje Total: ${scoreTotal2}`                
//                 contador2.innerText = `Cantidad de lanzamientos: ${cantTiros2}`
//         } else if (e.target.value === "3") {
//                 console.log(`Jugador ${e.target.value}`)
//                 cantTiros3 = cantTiros3 + 1
//                 console.log(`Tiros efectuados ${cantTiros3}`)
//                 let scoreParcial3 = Math.floor( (Math.random() * 6) + 1 );           
//                 scoreTotal3 = scoreTotal3 + scoreParcial3;
//                 console.log(`Puntaje parcial ${scoreParcial3}`)
//                 console.log(`Puntaje total ${scoreTotal3}`)
//                 parcial3.innerText = `Puntaje Parcial: ${scoreParcial3}`
//                 total3.innerText = `Puntaje Total: ${scoreTotal3}`                
//                 contador3.innerText = `Cantidad de lanzamientos: ${cantTiros3}`
//         }           
// }

// boton1.addEventListener("click", tirarDados)
// boton2.addEventListener("click", tirarDados)
// boton3.addEventListener("click", tirarDados)




//         *********** Ejericicio 04 ***********
// Una escuela de tango necesita organizar las inscripciones de sus alumnos.
// Alumnos:

// const alumnos = [ 
//         {
//                "nombre": "Juana",
//                "pago": true
//            },
//            {
//                "nombre": "Santiago",
//                "pago": true
//            },
//            {
//                "nombre": "Esteban",
//                "pago": false
//            },
//            {
//                "nombre": "Lautaro",
//                "pago": true
//            },
//            {
//                "nombre": "Marian",
//                "pago": false
//            }
//        ]

// a) Mostrar la siguiente infomación de alumnos en una web.

// TIP! En tu html crea tu tabla y en las celdas es donde vas apuntar los datos de tu json

// function escribirNombres (objetoJson) {
//         for (let i=0; i<objetoJson.length; i++ ) {
//                 document.write( `<p> "Nombre alumno/a:" ${objetoJson[i].nombre}` )
//         }
// }
// escribirNombres(alumnos)

// b) Mostrar en verde quienes pagaron y en rojo quienes no pagaron.

// function escribirNombres (objetoJson) {
//         for (let i=0; i<objetoJson.length; i++ ) {
//                 if (alumnos[i].pago === true) {
//                         document.write( `<p class="green"> "Nombre alumno/a:" ${objetoJson[i].nombre}` )
//                 } else {
//                         document.write( `<p class="red"> "Nombre alumno/a:" ${objetoJson[i].nombre}` )
//                 }                
//         }
// }
// escribirNombres(alumnos)




//         *********** Ejericicio 05 ***********
// La AFA está realizando un concurso para ganarte una pelota firmada por Messi.
// Se le solicita a las personas que completen:
// 1.- Nombre: mínimo 3 y máximo 16 dígitos.
// 2.- Equipo favorito: no debe contener números.
// 3.- Edad: debe ser mayor de edad para participar.
// 4.- DNI: debe tener entre 7 y 8 caracteres.
// 5.- Mail: debe ser un mail válido. Sólo se aceptan participantes con mails que terminen en “.com” o “.ar” 
// 6.- Mensaje para Messi: debe contener al menos 30 caracteres.

// const nombre = document.querySelector("#name");
// const equipo = document.querySelector("#team");
// const edad = document.querySelector("#age");
// const advertencia = document.querySelector("#warning")
// const dni = document.querySelector("#id");
// const correo = document.querySelector("#email")
// const mensaje = document.querySelector("#msg")
// const advertencia2 = document.querySelector("#warning2")
// const enviar = document.querySelector("#send")

// const validarNombre = (e) => {
//         if (e.target.value.length < 3 || e.target.value.length > 16) {
//                 nombre.classList.add("invalid")
//                 nombre.classList.remove("valid")
//         } else {
//                 nombre.classList.add("valid")
//                 nombre.classList.remove("invalid")                
//         }
// }
// nombre.addEventListener("keyup", validarNombre)

// const validarEquipo = (e) => {
//         if (/[0-9]/.test( e.target.value) || e.target.value == "" ) {
//                 equipo.classList.add("invalid")
//                 equipo.classList.remove("valid")
//         } else {
//                 equipo.classList.add("valid")
//                 equipo.classList.remove("invalid")                
//         }
// }
// equipo.addEventListener("keyup", validarEquipo)

// const validarEdad = (e) => {
//         if ( e.target.value < 18 || e.target.value == "") {
//                 edad.classList.add("invalid")
//                 edad.classList.remove("valid")
//                 advertencia.classList.remove("hidden")
//         } else {
//                 edad.classList.add("valid")
//                 edad.classList.remove("invalid")
//                 advertencia.classList.add("hidden")
//         }
// }
// edad.addEventListener("blur", validarEdad)

// const validarDNI = (e) => {
//         if (e.target.value.length < 7 || e.target.value.length > 8 ) {
//                 dni.classList.add("invalid")
//                 dni.classList.remove("valid")
//         } else {
//                 dni.classList.add("valid")
//                 dni.classList.remove("invalid")
//         }
// }
// dni.addEventListener("keyup", validarDNI)

// Corta una parte: text.slice(0,3)

// const validarCorreo = (e) => {
//         let slice3Char = e.target.value.length - 3;
//         let slice4Char = e.target.value.length - 4;
//         let showLast3 = e.target.value.slice(slice3Char, e.target.value.length)
//         let showLast4 = e.target.value.slice(slice4Char, e.target.value.length)
//         console.log("parte3: " + showLast3)
//         console.log("parte4: " + showLast4)
//         if (showLast3 === ".ar" || showLast4 === ".com" && e.target.value !== "") {
//                 correo.classList.add("valid")
//                 correo.classList.remove("invalid")
//         } else {
//                 correo.classList.add("invalid")
//                 correo.classList.remove("valid")
//         }        
// }
// correo.addEventListener("blur", validarCorreo)

// const validarMensaje = (e) => {
//         console.log( e.target.value.length)
//         if (e.target.value.length < 30) {
//                 mensaje.classList.add("valid")
//                 mensaje.classList.remove("invalid")
//                 advertencia2.classList.add("hidden")
//         } else {
//                 mensaje.classList.add("invalid")
//                 mensaje.classList.remove("valid")
//                 advertencia2.classList.remove("hidden")

//         }
// }
// mensaje.addEventListener("blur", validarMensaje)





//         *********** Ejericicio 06 ***********
// Papá Noel recibió una cantidad enorme de cartitas este año, por lo que no tuvo tiempo de decidir quienes habían sido buenos o malos, así que decidió armar un sistema de clasificación automático. Si el niño o niña pidió 3 o más de los siguientes objetos, será catalogado como “malo” y se le entregará carbón en navidad. Si pidió 2 o menos, entonces será catalogado como bueno. Los objetos que suman son:
// * Bicicleta, hermano/a/e, playstation, medias, mochila, piano*.
// -Para probar: Generar algún set de pruebas. Pueden usar objetos y/o arreglos. 

                //PENDIENTE!!!!

// let regalosSuman = ["bicicleta", "hermano", "playstation", "medias", "mochila", "piano"];

// const cartas = [
//         {
//                 "nombre" : "Esteban",
//                 "regalos" : ["pelota", "hermano", "piano" ]
//         },
 
//         {
//                 "nombre" : "Isabella",
//                 "regalos" : ["moto", "barrilete", "disfraz_Spiderman"]
//         },

//         {
//                 "nombre" : "Tomas",
//                 "regalos" : ["playstation", "bicicleta", "medias", "cohete"]
//         },

//         {
//                 "nombre" : "Florencia",
//                 "regalos" : ["playstation", "mochila"]
//         },

//         {
//                 "nombre" : "Catalina",
//                 "regalos" : ["hermano", "bicicleta", "robot", "piano"]
//         },

//         {
//                 "nombre" : "Uma",
//                 "regalos" : ["muñeca", "autito", "hermano", "mochila"]
//         }
// ]

// for (let i=0; i<cartas.length; i++) {
//         let x;
//         x = cartas[i].regalos;
//         console.log(x);
//         document.write(`<p> ${x} </p>`);                
// }






//         *********** Ejericicio 07 ***********
// Organizar asados es una tarea difícil cuando se trata de calcular la cantidad de comida y repartir los costos. Para eso, un grupo de amigos nos solicita que realicemos un programa que nos ayude a dividir la tarea. 
// Se calcula: 500gr de carne por persona. 1 Botella de cerveza por persona. 1 kilo de helado cada 4 personas. En caso de quedar por ejemplo: 1 kilo y medio, redondear siempre para arriba, es decir a dos kilos. 
// El programa debe recibir como dato la cantidad de comensales y debe devolver: Cantidad de carne, cervezas y helado para comprar, costo total y costo por persona. 
// Costos:
// * Carne por kilo: $700
// * Botella de cerveza: $200
// * Kilo de helado: $600
// Por ejemplo: Si son 5 personas serán:
// - 2.5kg de carne, 5 botellas de cerveza y 2 kilos de helado.
// - Precio total: $1750 de carne + $1000 de cervezas, $1200 de helado. Total: $3950. 
// - Precio por persona: $790.

// const costoCarne = 700;
// const costoCerveza = 200;
// const costoHelado = 600;

// const consumoCarne = 0.5;
// const consumoCerveza = 1;
// const consumoHelado = 0.25;

// const selCarne = document.querySelector("#meat");
// const selCerveza = document.querySelector("#beer");
// const selHelado = document.querySelector("#icecream");
// const selector = document.querySelector("#selQuantity");
// const selCostoParcial = document.querySelector("#individualCost");
// const selCostoTotal = document.querySelector("#totalCost")

// const calcularConsumo = () => {
//         let cantPersonas = selector.value;        
//         let cantCarne = consumoCarne * cantPersonas;
//         let cantCerveza = consumoCerveza * cantPersonas;
//         let cantHelado = Math.ceil( consumoHelado * cantPersonas );
//         selCarne.value = cantCarne;
//         selCerveza.value = cantCerveza;
//         selHelado.value = cantHelado;
//         calcularCosto(cantCarne, cantCerveza, cantHelado, cantPersonas)
// }
// selector.addEventListener("change", calcularConsumo);

// const calcularCosto = (item1, item2, item3, quantity) => {
//         let costoTotal = (item1 * costoCarne) + (item2 * costoCerveza) + (item3 * costoHelado)
//         let costoParcial = costoTotal / quantity;
//         selCostoParcial.value = costoParcial;
//         selCostoTotal.value = costoTotal;
// }






//         *********** Ejericicio 08 ***********
// Una tienda de sombreros nos requiere para su web agregar un carrito de compras que se mantenga cuando la persona entra o sale del sitio. (guiñoguiñolocalstorageguiñoguiño).
// Para eso le mostraremos al usuario 5 sombreros con su respectivo nombre, foto y precio. Dentro del carro cada uno tendrá una cantidad. Por defecto todos estarán en 0. Cada uno tendrá un botón de sumar y otro de restar. No se podrá tener una cantidad menor a 0 de sombreros. El tope máximo son 3 sombreros por tipo. Cuando llega al tope de sombreros, se debe mostrar toda la info del sombrero con un recuadro rojo.
// En la parte inferior se verá el precio total de los sombreros solicitados.

const priceList = {
                "precioModelo1" : 200,       
                "precioModelo2" : 250,       
                "precioModelo3" : 350,
                "precioModelo4" : 300,        
                "precioModelo5" : 500
}

// let priceList = {}

const selPrice1 = document.querySelector("#price1")
const selPrice2 = document.querySelector("#price2")
const selPrice3 = document.querySelector("#price3")
const selPrice4 = document.querySelector("#price4")
const selPrice5 = document.querySelector("#price5")

function populatePriceList(object)  {
        for (let i = 1; i <= 1; i++ ) {                
                let precio = priceList.precioModelo[i];
                console.log(precio)    
                selPrice1.innerHTML = `Precio $${precio}`                 
        }
}
        

populatePriceList(priceList)










//         *********** Ejericicio 09 ***********
// De Guayerd Seguros nos piden que hagamos un cotizador de seguros de auto. Para eso debemos informar el modelo de auto y el año de fabricación. Cada modelo tendrá un costo fijo y bajará 2% por año de antigüedad. Tendrá como base un costo de $900 + el valor por cada modelo. (Poner 3 modelos como opción!).

// const selYear = document.querySelector("#year");
// const selMake = document.querySelector("#make");
// const selCost = document.querySelector("#cost");
// const ford = 600;
// const audi = 900;
// const bmw = 1200;
// const base = 900;
// const discount = 0.02;
// let date = new Date();
// let year = date.getFullYear();

// const populateYears = () => {        
//         for (let i = year; i >= 1970; i--) {
//                 selYear.innerHTML += `<option value="${i}"> ${i} </option>`
//         }
// }
// populateYears()


// const captureYear = (e) => {
//         chosenYear = parseInt(e.target.value);                 
// }
// selYear.addEventListener("change", captureYear)


// const obtainBaseCost = (e) => {
//         let chosenMake = e.target.value        
//         if (chosenMake === "ford") {
//                 baseCost = ford + base; 
//         } else if (chosenMake === "audi") {
//                 baseCost = audi + base;
//         } else if (chosenMake === "bmw") {
//                 baseCost = base + bmw;
//         }
//         console.log(`Costo base del seguro: $${baseCost}`);        
// }
// selMake.addEventListener("change", obtainBaseCost)


// function costCalculator (captureYear, obtainBaseCost) {                
//         let totalDiscount = 0;
//         let yearCounter = 0;
//         let finalCost;      
//         console.log(`Año actual: ${year}`)
//         console.log(`Año seleccionado: ${chosenYear}`)
//         if (chosenYear === year) {
//                 finalCost = baseCost;
//         } else {                
//                 for (let i = year; i > chosenYear ; i--) {
//                         yearCounter += 1;
//                         totalDiscount = discount * yearCounter;       
//                 } 
//                 finalCost = baseCost * (1 - totalDiscount)              
//         }        
//         selCost.value = `$${finalCost}` 
//         console.log(`Años de antigüedad: ${yearCounter}`)
//         console.log(`Total de descuento: ${totalDiscount}%`);
//         console.log(`Costo del seguro: $${finalCost}`)                
// }
// selCost.addEventListener("focus", costCalculator)



