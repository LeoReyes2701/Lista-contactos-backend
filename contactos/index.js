// console.log('hola');

// //Variables
// let nombre = 'Leopoldo'
// let esMayorDeEdad = true;
// let edad = 17;

// console.log('antes',nombre,esMayorDeEdad, edad)

// nombre= true

// console.log('despues',nombre,esMayorDeEdad,edad);

// //Const para poner una variable como constante

// const hola = 'hola';

// console.log(hola);

// //Sumas de strings
// const nombre='Leopoldo';
// const edad = 17;

// console.log(`Mi nombre es ${nombre}, tengo ${edad}.`);

// // Primitivos
// const num = Number('18');
// console.log(num + 2)
// Objetos
// const person = {
//     name: 'Leopoldo',
//     edad: 17
// }
// console.log(`Mi nombre es: ${person.name}, tengo ${person.edad}`);
//Funciones
// 1.Todas las funciones son un universo.
// 2.Todas las funciones les puedo agregar parametros.
// 3. return pa devolver.
// 4. La puedo llamar donde sea en el codigo, esto es exclusivo a funciones viejas.
// function sum (x,y){
//     console.log(x+y)
// }
// sum(8,2)
//Funcion nueva
// const num= (x,y) => x + y;
// const result4 = num(2,5);
// console.log(result4)
// const result5 = num(10,5);
// console.log(result5)
// const result6 = num(result4 , result5)
// console.log(result6)



// const createPerson=(username, password)=>{
//     return{
//         username,
//         password
//     }
// }


// const persona1= createPerson ('Leopoldo','460525')
// const persona2= createPerson ('Leo','1234')
// const persona3= createPerson ('Trica','46')
// console.log(persona1, persona2,persona3)
// let persons = [persona1, persona2,persona3]
// //Find
// const findPerson= persons.find(person=> {
//     if(person.username === 'Leo'){
//         return person
//     }
// });
// // console.log(findPerson);
// // // Crear
// // console.log ('antes de crear', persons);
// // const person4 = createPerson('juan', '3233')
// // persons= persons.concat(person4)
// // console.log ('despues de crear', persons);

// // Eliminar

// console.log ('antes de eliminar', persons);
// persons= persons.filter(person => {
//     if (person.username !== 'juan'){
//         return person;
//     }
// })
// console.log ('despues de eliminar', persons);
// // Editar
// console.log ('antes de editar', persons);
// persons= persons.map(person => {
//     if (person.username === 'Leopoldo'){
//     return {...person, password: '4567'}
//     }else{
//         return person;
//     }  ;
// });
// console.log ('despues de editar', persons);
