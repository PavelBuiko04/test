"use strict";

let num = 50;

(num === 50) ? console.log('OK!') : console.log('Error');


switch (num) {
    case 49: 
        console.log('Wrong');
        break;
    case 100:
        console.log('Wrong');
        break;
    case 50:
        console.log('Right');
        break;
    default:
        console.log('Not today')
        break;
}


// 21     while / do / for 

let numm = 50;
do {
    console.log(numm);
    numm ++;
}
while (numm < 55);

numm = 50;
for (let i = 1; i < 8; i++){
    console.log(numm)
    numm++
}

// 22
for (let i  =0; i <3; i ++){
    console.log(i);
    for (let j = 0; j < 3; j ++){
        console.log(j);
    }
}


let result = '';
const length = 7;

for (let i =0; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += "\n";
}

console.log(result);



result = '';
length = +7;
for (let i = 0; i < length; i++) {

    for (let j = 0; j < length; j++){
        result += '*'
    }

    result += '\n';
}

console.log(result);

result = '';
length = +7;
for (let i = 0; i < length; i++) {
    for (let j = 14; j != i; j--){
        if ( j / 2 == 3) {
            result += '-';
            continue;
        }
        result += '*';
        
    }
    result += '\n';
}

console.log(result);









first: for (let i =0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

const arr = [3, 5, 8, 16, 20, 23, 50];
result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i]
}

console.log(result)



function thirdTask() {

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        result[i] = data[data.length - i-1];
    }
    
    return result;
}

console.log(thirdTask());


// const lines = 5;
// result = '';
// for (let i = 0; i < lines; i++) {
//     if (i == 2) {
//         result += '+ '
//     } else {
//         result += '_ ';
//     }
// }
// console.log(result);


// const lines = 3;
// result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)
    



const lines = 5;
result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++){
        result += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++){
        result += '*';
    }
    result += '\n';
}

for (let i = lines-1; i >= 0; i--) {
    for (let j = 0; j < lines - i; j++){
        result += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++){
        result += '*';
    }
    result += '\n';
}


console.log(result)




const numberOfFilms = prompt('How much films do you watched? ', "");
const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    gender: [],
    privat: false
};

const lastWatchedFilm = prompt('What was the last watched film? ', ''),
    rate = prompt('You rate? (1-10) ', '');

personalMovieDB.movie[lastWatchedFilm] = rate;
console.log(personalMovieDB);





