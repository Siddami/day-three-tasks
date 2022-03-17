//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*let b =parseInt( prompt('Enter base'))
let h =parseInt( prompt('Enter height'))
let area = (0.5 * b * h)
console.log(area);

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*let sideA = parseInt(prompt('Enter side a'))
let sideB = parseInt(prompt('Enter side b'))
let sideC = parseInt(prompt('Enter side c'))
let perimeter= (sideA + sideB + sideC)
console.log(perimeter)

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length= parseInt(prompt('enter length'))
let width= parseInt(prompt('enter width'))
let areaR= (length * width)
let perimeterR= (2 * (length + width))
console.log(area);
console.log(perimeter);

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius= parseInt(prompt('Enter radius'))
const pi = 3.14
let areaC= (pi * radius * radius)
let circumference= (2 * pi * radius)
console.log(areaC);
console.log(circumference);*/

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
//for y-intercept
//here x will be 0
let xOne= 0
let yTwo= 0
let yOne= 2 * xOne + (-2)
console.log (yOne);
let xTwo= 2 *(yOne) + (-2)
console.log(xTwo);
let slope= Math.floor((yTwo - yOne/xTwo - xOne))
console.log (slope);

//Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1=2
let x2=6
let y1=2
let y2=10
let m=(y2-y1/x2-x1)
console.log(Math.ceil(m));

//Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let xv=0
let xv1=2
let y = (xv^2 + 6*xv + 9)
console.log(Math.floor(y));
let ysec= (xv1^2 + 6*xv1 + 9)
console.log(Math.floor(ysec));

//write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours= parseInt(prompt("Enter hours"))
let ratePerHour= parseInt(prompt("Enter rate per hour"))
let weeklyEarning= (hours * ratePerHour)
console.log(weeklyEarning);

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName= 'Siddiqat'
let length= myName.length
console.log(length);
length>7 
? console.log('your name is long')
: console.log('your name is short');

//Compare your first name length and your family name length and you should get this output.
let firstNames = 'Asabeneh'
let lastNames = 'Yetayeh'
let lOff= firstNames.length 
let lOfl= lastNames.length
lOff>lOfl
? console.log(`your firstname, ${firstNames} is longer than your family name, ${lastNames} `)
: console.log(`your firstname ${firstNames} is not longer than your family name, ${lastNames}`)

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
let diff= myAge - yourAge
console.log(`i am ${diff} older than you`)

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = prompt("Please input your Birth year")
let nowD = new Date()
let currentD= nowD.getFullYear()
console.log(currentD);
let ageNow = now.getYear() - birthYear + 1900
console.log (ageNow);
ageNow>=18
? console.log('you are old enough to drive')
: console.log(`you will be allowed to drive after ${-ageNow+18} years`)

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let numY= prompt("number of years you lived")
let nowY = new Date()
let secNow= nowY.getTime(numY);
console.log(`you lived ${secNow} seconds`);

/* Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
const today = new Date()
let yearr = today.getFullYear()
let monthh = today.getMonth()
let datee = today.getDate()
let hourr = today.getHours()
let minutee = today.getMinutes()
let YYYYMMDDHHmm = `${yearr}-${monthh}-${datee} ${hourr}:${minutee}` 
let DDMMYYYYHHmm = `${datee}-${monthh}-${yearr} ${hourr}:${minutee}`
let DDMMYYYYHHMM = `${datee}/${monthh}/${yearr} ${hourr}:${minutee}`

console.log(YYYYMMDDHHmm);
console.log(DDMMYYYYHHmm);
console.log(DDMMYYYYHHMM);