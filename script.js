// boolean - true/false 1- true 0- false
// string -"блаблаблабла"
// number - 1234567890
// undefined - (ничего) только при ошибке
// null - 0 (ничего) сами обьявляем
// Symbol - !@#$
// BigInt - 2>245
// Object - {} сылочный тип данных 


// const c = 5
// let a = 10

// let v = a + 10
// let h = c + 5

// a = 20 
// c = 12

// let a = 1
// let b = 2 
// let result = a+b
// console.log(result);

// let num = 6.33
// console.log(Math.ceil(7.3)); округляет до высшего целого
// console.log(Math.round(7.6)); округляет до юлизжайщего целого
// console.log(Math.floor(7.5)); округляет до низкого целого
// console.log(Math.round(Math.random() * 100));
// console.log(Math.pow(8 ,2));
// console.log(math.s);
// let DoMath = console.log(Math.round(Math.random() * 100));
// console.log(DoMath);
// let a = 10 

// let c= 15 
// let b=-5
// console.log(math.max(a, b, c));
// console.log(math.min(a, b, c));
// console.log(Math.sqrt(a));

// let a = "hello"
// let b = 20 
// console.log(typeof a + 10); 
// console.log(typeof b + "");

// let result = String(b)
// let resNum = Number(a)
// console.log(typeof resNum);

// let a = 5.5
// // console.log(Math.pow(Math.round(a) ,4))

// let b = Math.round(a)
// let c = Math.pow(b, 4)
// console.log(c);

//            01234
// const a = "hello"
// //         12345
// console.log(a.length);
// console.log(a[2]);
// console.log(a.length - 1);       
// console.log(a[a.lenth - 1])

// let a = 3
// let b = 7
// let h = 4
// let area = ((a*h)+(b*h))*2
// console.log(area);

// let city = "Moscow"
// console.log(${city} is beatiful)
// Условие - ответвление каких то деиствие

// + - % : * - арифметические операторы
// > < 
// = - присвоение
// === - строгое равенство (только тип данных)
// == - не строгое равенство (только значение)
// != - не равно
// >=,<=,-=,+=,/=,*=

// let a = 12

// if(a<40){
//     console.log("a<40");
// }else{
//     console.log("a>40");
// }


// let b = 84

// if(b>40){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// let c = "20"

// if(c==20){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// let d = "Barsbek"

// if(d===40){
//     console.log ("yes");
// }else{
//     console.log("no");
// }


// const a = 23

// if(a>10 || a<40){ // 1+0=1 дизюнкция   =>   логическое сложение
//     console.log("yes");
// }

// const b = 40

// if(b>20 && b<40)// 1*0=0 коньюкция   =>   логическое умножение





// const a = 9


// if(a%5===0 && a%3===0 ){
//     console.log("True");
// }else{
//     console.log("false");
// }



// const str="hello"
// const a = str.substr(2)//вырезает по указанному индексу
// const b= str.substring(1, 4)// вырезает от индекса до индекса
// const c= str.slice(1, 4)//вырезает от индекса до индекса
// const d= str.concat("dolor")// старая версия конкатинации

// console.log(str.indexOf("l"));//-1=false, true- выводит его индекс
// console.log(str.lastIndexOf ("w"));// читает справа на лево
// const a = str.indexOf("a")

// if (a>0){
//     if(str.indexOf("a" !== str.lastIndexOf("a"))){
//         console.log("повторяется");
//     }
//     console.log("a");
// } else {
//     console.log("no a");
// } 

// console.log(str.toLowerCase());//в нижний регистр
// console.log(str.ToUpperCase());//в верхний регистр

// console.log(str.includes("n"));// boolean / true or false
// console.log(str.startsWith("n"));//true false
// console.log(str.endsWith("n"));//boolean
// console.log(str.trim("n"));//удаляет пробелы по бокам
// console.log(str.repeat(10));// дублирует
// console.log(str.replace("i","m"));//
// console.log(str.replaceAll("n","a"));//заменя всех поставленных слов, в этом случае "n" на "a"

// const str1 = "Hello World"

// let a = str1.substring(0,6)
// let b = str1.slice(6)
// console.log(a.toUpperCase());
// console.log(b.toLowerCase());

// МАССИВЫ
//             0         1   2      3     4
// const arr = ["hello", "ddd", 23 , true, false]
// const arr1 =["hi"["uu","wsg"["sdsa"]]]

// console.log(arr[1]);


// const str = "hello world doge"
// const str1 = str.split(" ")
// const stre = ["hi",["uu","wsg",["sdsa"]]]

// console.log(stre[1][2][0]);


// ФУНКЦИИ

// function sayHi1 (){
//     console.log("Hello Im Barsbek");
//     console.log("im 15 years old");
//     console.log("i live in Bishkek");
// }

// // функция не работает до того пока не обьявят 

// sayHi1()//<- это объявление функции


// //            параметры
// function sayHi (a, b ){
//     console.log(a + b);
//     return a * b 

// }

// sayHi(10 , 20)
// console.log(sayHi(11, 23));

// преобразование типов данных

// const str = "100"

// console.log(Number(str) = 100);
// console.log(typeof str );

// console.log (+str+100)
// console.log(typeof + str);



// const num = 100
//  console.log(typeof String(num));
//  console.log(num.toString() + 100);

//  let a = num + ""
//  console.log(a);


// NaN = not a number



// function checks (a){
//     if (a%2 === 0){
//         console.log("Четность");
//     }else if (a%2 != 0 ){
//         console.log("Нечетность");
//     }
// }

// console.log(checks(21));





// const a = "a"

// if (typeof a === "string"){
//     console.log("Привет");
// }else if (typeof a === "number" ){
//     console.log("Пока");
// }else{
//     console.log("Неизвестно");
// }


// function checkLength(str) {
//     if (str.length >= 10 ){
//         console.log("more than 10");
//     } else if (str.length < 10) {
//         console.log("less than 10");
//     }
// }


// checkLength("hello Barbek How Are You")
// checkLength("hello")


// const aar= "besesafa"
// const fixed = aar.split("").reverse().join("")

// if (aar === fixed){
//     console.log("yes");
// }else {
//     console.log("no");
// }

// function sumArise ( a ){
//     if (a.length > 5){
//         return a[0]
//     }else {
//         return a[a.length - 1]
//     }
// }

// console.log(sumArise("he"));

// function countLetters(n){
//     return n[n.length]
// }

// console.log(countLetters(100));

// function sumPlease (a){
//     if(a >= "A" && a <= "Z"){
//         console.log("upper");
//      }
//      else if(a >= "a" && a <= "z"){
//         console.log("down");
//     }else{console.log("not");}
    
    
// }

// console.log(sumPlease("dsadsadasfd"));

// function FinalValue(exam , projects) {
//     if (exam >=90 && projects >= 10){
//         console.log("100");
//     }else  if (exam >=75 && projects >= 5){
//         console.log("90");
//     }else  if (exam >=50 && projects >= 2){
//         console.log("75");
//     }else {
//         console.log("0");
//     }
// }
// console.log(FinalValue(84, 0));



// function ageGap(n) {
//     if(n<=12){
//         console.log("kids");
//     }else  if(n<19 && n > 13){
//         console.log("teens");
//     }else  if(n<59 && n > 25){
//         console.log("middle-age");
//     }else  if( n > 60){
//         console.log("old");
//     }
// }


// console.log(ageGap(14));


// const a = "Barsbek"
// const ar = a.split("")
// // const ar2 = ar.join()
// const aar = ar.reverse()

// function reverseString(a) {
//     return a.split("").reverse().join("")
// }
// console.log(reverseString("Barsbek

// function randomizer(min, max) {
//     return Math.ceil(Math.random() * ((max - min)+min))
// }

// console.log(randomizer(1, 100));

// function name(params) {//function declaration
//     exmaple.function
// }


// let b = function name(params) {//function expression
//     exmaple.function
// }

// //arrow function
// let c = (a, b ) => {
//     exmaple.function
// }


// const a = 4 

// if (a %4 === 0){
//     true
// }else {
//     false
// }
//                       true               false
// a % 2 === 0 ? console.log("ok") : console.log("not ok");  //Тернарный оператор

// const num = [1,3,4,9,8,4,5]

// console.log(num.sort((a, b)=> a - b));


//Objects


// const User = {
//     name: "Aquaman",
//     age: 23,
//     password: "admin",
//     "say hello ":"hello",
//     friends :["", "",""],
//     admin: {
//         name: "Barsbek"
//     },
//     FlyBy: function sum(a){
//        return a + User.age
//     }
// }

// console.log(Object.keys(User)); получает массив ключей внутри объекта
// console.log(Object.values(User)); 
// Object.freeze(User)  заморозка объекта что бы никто не менял внутри объекта
// User.phone добавить объект 
// User.name добавить объект 
// delete User.age удалить один из ключей

// console.log(User.age);
// console.log(User["say hello"]);

// console.log(User.FlyBy(34));

// const n = 5

// let c = Array.from(Array(n+1).keys()).slice(1)

// console.log(c);


// const b = ['dada', 'dududu', 'dididi']


// console.log(b.push('dedede')); мутабельность
// console.log(b);

// const a = [1,2,3,4]

// const a2 = [...a  , 5, 6, 7, 8, 9, ...b] //take everything from a , сприды 

// console.log(a2);


// циклы 3 видов

// const i = 0


// while(1 <10){
//     console.log("hello");
//     i = i+1
// }

// const i = 0//счетщик
// do {
//         console.log("hello");
//         i = i+1
//     } while (i < 10)

// for(let i = 0 ; i < 10 ; i = i+1){
//     console.log("barsbek");
// }

//ЗАПОМНИ   i = i+1  ЭТО  i++     если переменная i

// const a = ["a", "b", "c"]

// for(let i = 0 ; i < 10 ; i = i+1){
//         console.log(a[i]);
//     }

// const a = ["a", "b", "c" ,"d", "p","p", "p",]

// for(let i = 0 ; i < a.length ; i = i+1){
//         a[i] = "d"
//     }
//     console.log(a);

// const a = [4, 2, -7 ,5, 4,-8, -3,]

//  let s = 0
// for(let i = 0; i < a.length ; i++ ){
//    if (a[1] >0){
//      s = s + a[1]
//    }
// }
// console.log(s); //он перебрал все положительные элементы массива а и суммировал их 



//      START
//step 1 i= 0  i++ === 1
//step 2 i = 1 i++ === 2
//step 3 i = 2 i++ === 3
//step 4 i = 3 i++ === 4

//step 10 i = 9 i++ === 10
//step 11 i = 10 i++ === 10
//       STOP
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }



// function numDelitsya() {
//     for (let i = 0; i <= 10000; i++) {
//         i % 2 === 0 ? console.log(`${i}, ${"Even"}`) : console.log(`${i}, ${"Odd"}`); 
//     }
// }

// numDelitsya()


// const User = {
//     name : "barsbek",
//     age : 14,
//     "lets go": "ok!",
//     password: 12342314
// }

// const arr = Object.values(User)


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const numbers = {
//     a : -4,
//     b : 3,
//     c : 8 ,
//     d : 10 ,
//     e : -2 
// }


// const arr = Object.keys(numbers)

// for (let i = 0; i < arr.length; i++) {
//     const value = numbers[arr[i]]
//     if(value < 0){
//         delete numbers[arr[i]]
//     }else{
//         numbers[arr[i]] *= value
//     }
// }

// console.log(numbers);

// const a = (arr) => {
//    let srt = arr.sort()
//    let res = []
//    for (let i = 0; i < srt.length; i++) {
//     if(res.includes(srt[i])){
//         //nothing
//     }else{
//         res.push(srt[i])
//     }
//    }
//    return res
// }

// console.log(a(["a",'b','c','c']));

// const task = (arr) =>{
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if(!result.includes(arr[i])){
//             result = [...result,arr[i] ]
//         }
//     }
//     return result
// }


// const task = (arr1,arr2) => {
//     let arr3 = []
//     let arr11 = arr1[0] + arr1[1]
//     let arr22 = arr2[0] + arr2[1]
//     arr3.push(arr22,arr11)
//    return arr3
// }

// console.log(task([2,5],[8,10])); 
 


// const task01 = (arr1,arr2) => {
//     let arr11 = arr1[0] + arr1[1]
//     let arr22 = arr2[0] + arr2[1]
//     return [arr11,arr22]
// }

// console.log(task01([2,5],[8,10]));


// const task02 = (arr1,arr2) => {
//     return [arr1[0]+arr2[0],arr1[1]+arr2[1]]
// }
// console.log(task02([2,5],[8,10]));


// const task03 = (arr) =>{
//     let arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//        arr1.push(arr[i]*2)
//     }
//     return arr1
// }

// console.log(task03([3,4,5,2,1]));

// const task04 = (arr) =>{
//     let arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//        arr1 = [...arr1, arr[i] * 2]
//     }
// }


// const idFind = (arr) =>{
//     let bar = []
//     for (let i = 0; i < arr.length; i++) {
//        bar = [...bar, arr[i].id]
//     }
//     return bar
// }

// console.log(idFind([{id :32},{id :74},{id :65},{id :12},{id :32}]));

// const User = {
//     name:"artur",
//     age:32
//     id :32
// }

// console.log(User.id);



// const useH1 = (arr)=>{
//     let cool = []
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i] +""
//         cool = [...cool, "<h1>"+num+"</h1>"]
//     }
//     return cool
// }
// console.log(useH1([31,42,63,82,47,12]));

// const task = (arr)=>{
//     let a = []
//     for (let i = 0; i < arr.length; i++) {
//         a[i]= `<h1> ${arr[i]} </h1>`
//     }
//     return a
// }
// console.log(task([31,42,63,82,47,12]));

// const task = (arr)=>{
//     let a = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].length %2 ===0){
//             a= [...a, arr[i]]
//         }    
//     }
//     return a 
// }

// console.log(task(["Barsbek","Akdil","Salman","Amantur","Omar"]));


// const task = (arr)=>{
//     let a = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%10===0){
//             a.push(arr[i]*2)
//         } 
//     }
//     return a
// }

// console.log(task([40,30,452,63,80,20,421]));

// a % 2 === 0 ? console.log("ok") : console.log("not ok");  //Тернарный оператор

// const task = (arr)=>{
//     let a = []
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] === false ? a=[...a,arr[i]] : 
//         console.log(arr[i]);
//     }
// }

// console.log(task([true,false,true,false,false,true,false,true]));


// const task = (arr)=>{
//     let a = []
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i]) {
//         a = [...a,arr[i]]
//        }
//     }
//     return a
// }

// console.log(task([true,false,true,false,false,true,false,true]));


// const noUnderined = (arr)=>{
//     let a = []
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i] === true){
//         a = [...a ,arr[i]]
//        }else if (arr[i] === false){
//         a = [...a,arr[i]]
//        }
//     }
//     return a 
// }


// console.log(noUnderined([true,false,true,false,undefined]));




// const noUnderined = (arr)=>{
//     let a = []
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i] !== undefined){
//         a = [...a ,arr[i]]
//        }
//     }
//     return a 
// }


// console.log(noUnderined([true,false,true,false,undefined]));



//МЕТОДЫ ПЕРЕБОРА МАССИВОВ

// const arr =[1,2,3,4]

// arr.forEach((el)=>{
//     if (el %2 ===0) {
//         console.log(el);
//     }
// })



// const arr = [1,2,3,4]
// //  в методе map 1 в кондициях всегда элементы , а вторые всегда их индексы
// // map не умеет обрезать длинну массива так что он всегда возвратит в пустые части массива undefined или что то другое
// const res = arr.map((el , idx)=>{
//     // return el  элементы
//     // return idx индексы
// })
// console.log(res);


// const arr = [1,2,3,4]
// //  перебирает массив и удаляет те элементы которые не прошли условие
// // не может изменить элементы массива нужен только для сокращения   
// const res = arr.filter((el)=>{
//    if(el %2 === 0){
//     return el
//    }
// })
// console.log(res);



//TASK 

// const arr = [1,2,3,3,4,5,6,6,7]


// const res = arr.filter((el)=> { 
//     if (arr.indexOf(el) != arr.lastIndexOf(el)){
//         return el
//     }
// })

// console.log(res);             


//       \ /
//        \
//       / \        not completed :(



// const arr = [1,2,-3,4,-5,0,4]

// const res = arr.filter((el)=> { 
//     if (el >= 0){
//         return el
//     }
// }).map((el)=>{
//     return el +10 
// })

// console.log(res);



// const user = [{id:1 ,name:"dima"},{id:2, name:"igor"},{id:3, name:"alex"}]
// const payload = {id:2, name: "vova"}

// //task is to change the objects with id:2   vova->igor

// const result = user.map((el, idx)=>{
//     if (el.id === payload.id) {
//          return {...el, name: payload.name}
//     }
// })

// console.log(result);


// const arr = [123,5,6,4,2,26,8,985,82,57,]


// const res = arr.filter((el)=>{
//     if(el % 2 != 0){
//        return [...arr, el]
//     }
//  }).map((el)=>{
//    return arr.indexOf(el)
// })
// console.log(res);

// let indexes = []

// arr.forEach((el,idx)=>{
//     if(el % 2 != 0){
//       return indexes = [...indexes, idx]
//     }
//  })


// console.log(indexes);


//NEW 

// const a = [1,2,3,4,5,6]

// const res = a.find((el)=>{
//     if(el % 2 == 0){
//         return el //метод первого вхождения
//     }
// })

// console.log(res);


// const a = [1,2,3,4,5,6]

// const res = a.reduce((acc,rec)=>{
//     //acc = 0 rec = 1    1+0 = 1
//     //acc = 1 rec = 2    2+1 = 3
//     //acc = 3 rec = 3    3+3 =6 и т.д.
//     return acc+rec
// }, 0 //можно поставить любой тип данных, сейчас acc будет равен 0
// )
// console.log(res);

// const arr = [124,4,43,55,64,22] //должно быть 214

// const res = arr.reduce((acc,rec)=>{
//     if (rec % 2 === 0 && typeof(rec)=== "number") {
//      return acc+rec
//     }else {
//         return acc
//     }
// },0)
// console.log(res);

//  const arr = ['apple','banana','orange','kiwi']

// const res = arr.filter((el)=>{
//     return el.includes("a")
// })
// console.log(res);

// const arr = ['apple','banana','orange','kiwi']

// const res = arr.reduce((acc, rec)=>{
//     return acc+rec
// },"")
// console.log(res);


// const arr  = [1,2,3,-4,5,6]

// const res = arr.filter((el)=>{
//     if(el<0){
//         return el
//     }
// })

// console.log(res);

// const arr = [true,false,true,true]

// const res = arr.reduce((acc,rec)=>{
//     return acc*rec
// },true)

// console.log(res);

// const user = [
//     {name:"alex",age:25},
//     {name:"tima",age:34},
//     {name:"igor",age:41},
//     {name:"alice",age:22}
// ]

// const res = user.filter((el)=>{
//     if (el.age > 30) {
//         return el
//     }
// })
// console.log(res);


// const user = [
//     {name:"alex",age:25},
//     {name:"tima",age:34},
//     {name:"igor",age:41},
//     {name:"alice",age:22}
// ]

// const res  = user.sort((a,b)=> a.age - b.age)
// console.log(res);


// const arr = [12,5,47,45,25,7,75,54,60,82,21]

// const res = arr.reduce((acc,rec)=>{
//     if(rec %2 ===0){
//         acc.even.push(rec)
//     }else{
//         acc.odd.push(rec)
//     }
//     return acc
// },{even:[], odd:[]})

// console.log(res);


// const points = games => games.reduce((acc,rec)=> acc += rec[0]> rec[2]? 3 : rec[0]< rec[2]?0:1,0)
// console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));


// const arr = [1,2,3,4,2,3,5]

// const res = arr.reduce((acc,rec)=>{
//   if (!acc.includes(rec)) {
//     acc.push(rec)
//   }
//   return acc
// },[])

// console.log(res);



// const arr = [{id:1 ,name:"dima"},{id:2, name:"igor"},{id:3, name:"alex"},{id:4 ,name:"misha"}]

// const res = arr.reduce((acc,rec)=>{
//     acc[rec.id]= rec.name
//     return acc
// }, {})

// console.log(res);


// const arr = [1,2,3,4,5,6,7,8,9,10]

// const res = arr.filter((el)=>{
//     if(el%2===0){
//         return el
//     }
// }).map((el)=>{
//    return el * 2
// })

// console.log(res);


// const arr= [
//     {name:"apple", price:1},
//     {name:"banana", price:2},
//     {name:"pinapple", price:3},
//     {name:"carrot", price:4}
// ]

// const res = arr.map((el)=>{
//     return {
//         label : el.name,
//         value : el.price
//     }
// })

// console.log(res);



// const foo = (arr1,arr2) =>{
//    return arr1.filter((items, index)=>{
//         return arr2.includes(items) && index === arr1.indexOf(items)
//     })
// }

// console.log(foo([1,2,3,4,5],[3,4,5,6,7])); expected : [3,4,5]


// const foo = (arr1,arr2) =>{
//     return arr1.reduce((acc, item,index)=>{
//          if( arr2.includes(item) && index === arr1.indexOf(item)){
//             return acc =[...acc,item]
//          }
//          return acc
//      }, [])
//  }
 
//  console.log(foo([1,2,3,4,5],[3,4,5,6,7])); expected : [3,4,5]
 

// const foo = (arr) =>{
//    let res = arr.reduce((acc,rec)=>{
//         acc[rec.token] = rec
//         return acc
//     }, {} )
//     return res
//  }
 
//  console.log(foo([{token :"1"},{token :"2",value:23},{token :"3",name:"andrew"},{token :"4"}])); 

//  const foo1 = (arr) =>{
//     let res = arr.reduce((acc,rec, idx)=>{
         
//          return {...acc, [index+1]:{...item}}
//      }, {} )
//      return res
//   }
  
//   console.log(foo([{token :"1"},{token :"2",value:23},{token :"3",name:"andrew"},{token :"4"}])); 


  //        ["a","b","a"]    =>     expected : {a:2,b:1}

// const foo =(arr)=> {
//     return arr.reduce((acc,rec)=>{
//        if (acc[rec]===undefined) {
//         return {...acc, [rec]:1}
//        }
//        return {...acc, [rec]: acc[rec]+1}
//     },{})
    
// }

// console.log(foo(["a","b","a"]));


// const foo = (arr)=>{
//     return arr.reduce((acc,rec)=>{
//         if (rec.length === 2) {
//              acc = [...acc,rec[0],rec[1]]

//         } else if(rec.length === 1){
//              acc = [...acc,rec[0]]
//         }
//         return acc
//     },[])
// }

// console.log(foo([['ab','abc'],["abcd"]]));


//ЧТО БЫ ТАК НЕ ПИСАТЬ 
//      ||
//      \/


// const foo= (arr) =>{
//     return arr.flat()
// }

// console.log(foo([['ab','abc'],["abcd"]]));


// const foo= (arr) =>{
//     return arr.reduce((acc,rec)=>
//         [...acc,...rec]
//     ,[])
// }

// console.log(foo([['ab','abc'],["abcd"]]));
//object.entries

// const foo= (obj) =>{
//     return Object.keys(obj).map((el)=>{
//         return [el,obj[el]]
//     })
// }

// console.log(foo({a:1,b:2}));

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// const arr = [true,false,true,false]

// const res = arr.filter((el,idx)=>{
//   return idx === arr.indexOf(el)
// })

// console.log(res);


// const foo = (key,word,arr)=>{
//   return arr.filter((el)=>{
//     return el[key].includes(word)
//     console.log(el[key]);
//   })

  
// }

// console.log(foo("title",'hello',[{title:"hello world",rating:1},{title:"not a hello",rating:5},{title:"world",rating:0}]));
//expected : 
//  [{title:"hello world",rating:1} 
//  ,{title:"not a hello",rating:5}
//  ]

// function splitString(stringToSplit, separator) {
//   var arrayOfStrings = stringToSplit.split(separator);

//   console.log('Оригинальная строка: "' + stringToSplit + '"');
//   console.log('Разделитель: "' + separator + '"');
//   console.log(
//     "Массив содержит " +
//       arrayOfStrings.length +
//       " элементов: " +
//       arrayOfStrings.join(" / "),
//   );
// }


// var monthString = "Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек";
// var comma = ",";
// splitString(monthString, comma);



// const tokenFinder = (str) =>{
//   let splitting = str.split("/")
//   return splitting.reduce((acc,rec,idx)=>{
//     return acc = [...acc,{id:idx,token:rec}]
//   },[])
//   return acc
// }

// console.log(tokenFinder("http://google.com/hello/world"));

// const foo = (str)=>{
//   return str.split("/").filter(item=>item).map((item,idx)=>({id:idx,token:item}))
// }

// console.log(foo("http://google.com/hello/world"));

// const lengthFinder = (str)=>{
//   let splitted = str.split(",")
//   return splitted.reduce((acc,rec)=>{
//    acc =[...acc,rec+ ("("+rec.length+")")]
//    return acc.join("")
//   },[])
//   return acc
// }

// console.log(lengthFinder("hello,world,abra,cadabra,re,rwewee,qwerty"));

// const foo = (str)=>{
//   return str.split(",").map(item=> `${item}(${item.length})`).join(",")
// }

// console.log(foo("hello,world,abra,cadabra,re,rwewee,qwerty"));

