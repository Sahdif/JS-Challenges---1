function addition (num1, num2) {
    return num1 + num2
}

console.log(addition(3,5))



function convertHour (hour) {
   return hour * 3600
}

console.log(convertHour(2))



function perimeterRectangle (length, width) {

    return 2 * length + 2 * width

}

console.log(perimeterRectangle(6,7))

function calcTriangle (base, height) {

    return 0.5 * base * height

}

console.log(calcTriangle(10,10))

function addWord (word) {

return word + 'frontend'

}

console.log(addWord('Apple '))

function sumGreaterThan100 (num1, num2) {

    let sum = num1 + num2;

if (sum > 100) {
    return true
}

else if (sum <= 100) {
return false
}

}

console.log(sumGreaterThan100(60,40))

function boolean (bool) {
   
    return !bool
} 



console.log(boolean(false))

function isNotZero (num) {

if (num !== 0) {
    return true
}

else if (num === 0) {
    return false
}

else {
    return true
}


}

console.log(isNotZero(6))

function remainder (num1, num2) {
    return num1 % num2
}

console.log(remainder(4,3))

function isOdd (num) {
    if (num % 2 == 0) {
        return false
    }
    else {return true}
}

console.log(isOdd(9))

function booleanInteger (num) {

 return num % 2 === 0 ? 1 : -1

}

console.log(booleanInteger(9))


function loggedInAndSubscribed (string1, string2) {

    return string1 === 'LOGGED_IN' && string2 === 'SUBSCRIBED' ? true : false

}

console.log(loggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))