import renderForm from "./modules/renderForm";
import searchCode from "./modules/searchCode";

renderForm();
searchCode();


// import students from "./modules/students";
// import { message } from "laravel-mix/src/Log";
// import pvz from "./modules/pvz";


// const $1 = document.querySelectorAll.bind(document);



// students.forEach(e => {
//     console.log(e.name);
//     let li = document.createElement('li');
//     li.innerHTML = e.name;
//     if (e != ''){
//       $1('ul')[0].appendChild(li);
//     }
//   })

// const syHi =()=>{
//     console.log('Hi');
// }

// syHi();

//---------------------- Template literals-----------//



// const name = "jonas";
// const lname = "jonaitis";

// const kiekis = 12;
// const kaina = 14;

// console.log('Labas, mano vardas'+name+', o pavarde'+lname);
// console.log(`Mano vardas ${name},pavarde ${lname}`);
// console.log(`Suma yra:${kiekis*kaina}`);

//_______________ Object destructing_______________//



// //____ Array

// let [kiekis, pavadinimas, kaina] = [12, 'kompiuteris', 123.46];

// kiekis = 14;

// console.log('kiekis:', kiekis);
// console.log('kaina:', kaina);

// //____ Object

// const student = {
//   id: 5,
//   firstName: 'Karolis',
//   lname: 'Petraitis',
//   average: 8
// }

// const {id, firstName:fn, lname:ln} = student;
// console.log(fn)


//____for of, for in


// const items = [1,true, 'Ieva'];

// for(const element in items){
//   console.log(items[element])
// }



// const studentai = [
//   {
//     id:1,
//     firstName:'Jonas',
//     lname: 'Jonaitis',
//     school: 'BIT'

//   },
//   {
//     id:2,
//     firstName:'Petras',
//     lname: 'Petraitis',
//     school: 'BIT'

//   },
//   {
//     id:3,
//     firstName:'Vardenis',
//     lname: 'Pavardenis',
//     school: 'BIT'

//   }
// ]

// for(let student of studentai){
//     for(let studentData in student){
//       console.log(student[studentData])
//     }
// }


// const students= [
//   {
//       id:1,
//       firstName:'Jonas',
//       lname:'Jonaitis',
//       shool:'BIT',
//       subjects:{
//           js:10,
//           react:8,
//           vue:5
//       }
//   },
//   {
//       id:2,
//       firstName:'Petras',
//       lname:'Petraitis',
//       shool:'BIT',
//       subjects:{
//           js:6,
//           react:5,
//           vue:2
//       }
//   },
//   {
//       id:3,
//       firstName:'Vardenis',
//       lname:'Pavardenis',
//       shool:'BIT',
//       subjects:{
//           js:10,
//           react:10,
//           vue:7
//       }
//   }
// ]
// for(let student of students){
//     for(let studentData in student){
//      if(studentData=='subjects'){
//        console.log('Mokomieji dalykai:')
//        for(let subject in student[studentData]){
//         console.log(`${subject}: ${student[studentData][subject]}`)
//        }
//      }else{
//        console.log(student[studentData])
//      }
//     }
//   }



//Spread operator

// function sum(first, second){
//   console.log(first+second)
// }
// sum(12,14)

// function sum(...numbers){
//     let total = numbers.reduce((x,y)=>x+y);
//   console.log(total)
// }
// sum(12,45,78,56,12,78)

// includes
// scopes (galiojimo sritis): Globalus, funkcijos, bloko {}



// let data = ['Tomas', 'Karolis', 'Ieva'];

// if(data.includes('Tomas')){
//   console.log('kontaktas surastas');
// }else{
//   console.log('Kontaktas nerastas');
// }

// (function(){ // sefl invoking function

// })();

// console.log('_____Pardavimai_____')

// const pardavimai = [

//   { preke: 'PS4 Pro',
//     vnt: 3, 
//     originaliKaina: 399.99
//   },

//   { preke: 'Xbox One X',
//     vnt: 1,
//     originaliKaina: 499.99, 
//     nuolaida: 0.2 
//   },

//   { preke: 'Nintendo Switch', 
//     vnt: 4, 
//     originaliKaina: 299.99 
//   },

//   { preke: 'PS2 Console', 
//     vnt: 1, 
//     originaliKaina: 299.99, 
//     nuolaida: 0.8 
//   },

//   { preke: 'Nintendo 64', 
//     vnt: 2, 
//     originaliKaina: 199.99, 
//     nuolaida: 0.65 
//   }

//   ];
//    for(let pardavimas of pardavimai){
//      for(let pardavimasData in pardavimas){
//        console.log(pardavimas[pardavimasData])
//      }
//     }


    // ____________________________Callback

    // const Demo = ()=>{

      // function count(a,b, callback){
      //     callback()
      //     return a*b;
      // }
      // const syHello =  function (){console.log('Labas')}
      // console.log(count(8,9,syHello));

      // const message = ()=>{
      //   console.log('Zinute atsiranda po 3 sek')
      // }
      // setTimeout( message, 3000)

  

//  }
  // export default Demo


 
  