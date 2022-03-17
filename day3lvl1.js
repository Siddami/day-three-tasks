//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Siddiqat"
let lastName= "Abdulkareem"
let country= "Nigeria"
let city= "lagos"
let age= 23
let isMarried= false
let year= 2022
//using the typeof operator below
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

//Check if type of '10' is equal to 10
console.log(typeof('10')===10);

//Check if parseInt('9.8') is equal to 10
console.log(parseInt(9.8)===10);

//Boolean value is either true or false.

//Write three JavaScript statement which provide truthy value.

let truthy1= "baby".length==="rain".length
let truthy2= 10===10
let truthy3= true
console.log(truthy1);
console.log(truthy2);
console.log(truthy3);

//Write three JavaScript statement which provide falsy value.
let falsy1= ""===" "
let falsy2= 0===null
let falsy3= false
console.log(falsy1);
console.log(falsy2);
console.log(falsy3);

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

//Find the length of python and jargon and make a falsy comparison statement.
let python=('python'.length)
let jargon=('jargon'.length)
console.log(python);
console.log(jargon);
console.log(python>jargon);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
let num1= 4 > 3 && 10 < 12
let num2= 4 > 3 && 10 > 12
let num3= 4 > 3 || 10 < 12
let num4= 4 > 3 || 10 > 12
let num5= !(4 > 3)
let num6= !(4 < 3)
let num7= !(false)
let num8= !(4 > 3 && 10 < 12)
let num9= !(4 > 3 && 10 > 12)
let num10= !(4 === '4')
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(num8);
console.log(num9);
console.log(num10);

//There is no 'on' in both dragon and python
let one="dragon"
let two="python"
let find=!(one.includes("on"))
let found=!(two.includes("on"))

console.log(found);
console.log(find);

//Use the Date object to do the following activities

//What is the year today?
let now= new Date()
console.log(now.getFullYear());
//What is the month today as a number?
console.log(now.getMonth());
//What is the date today?
console.log(now);
//What is the day today as a number?
console.log(now.getDate());
//What is the hours now?
console.log(now.getHours());
//What is the minutes now?
console.log(now.getMinutes());
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());







