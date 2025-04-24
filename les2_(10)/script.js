"use strict";

let number = 4.6;

// console.log(4/0);


// 11

const arr = ['a', 'b', 'c'];
const arrObj = {
    a: 'a',
    1: 'b',
    2: 'c'
}

// console.log(arr[1])
// console.log(arrObj.a)
// console.log(arrObj[1])

arrObj.b = '1234';
arrObj['d'] = '4321';


// console.log(arrObj['b'])
// console.log(arrObj['d'])

const obj = {
    Anna: 500,
    'Alice': 800
};



// 12

// const result = confirm('Are you here?');
// console.log(result);


// const answer = +prompt('Are you under 18?', '18');
// console.log(answer);
// console.log(typeof(answer));


const answers = [];

// answers[0] = prompt('What is your name?', '')
// answers[1] = prompt('What is your surname?', '')
// answers[2] = prompt('What is your age?', '')

document.write(answers);



// 13

const category = 'toys';

console.log('https://someurl.com/'+ category);
console.log(`https://someurl.com/${category}/5`);


const user = 'Ivan';



// 14



let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr);
console.log(decr);

console.log(incr++);
console.log(decr--);


console.log(++incr);
console.log(--decr);



const isChecked = true,
    isClode = true;

console.log(isChecked && isClode);


//15   GIT ____________________________________-

// открываем TERMINAL 
// git init    -
// git config --local user.name "Pavel"     (local -> global когда только устанавливаем git)
// git config --local user.email "example@gmail.com"


// git remote add origin https;//github.com/
// git push -u origin main


// git status 
// git add -A 
// git status `

// git commit -a -m"first commit"
// git push  

// https://githowto.com/


// 16 HTTP // SSH
// https://developer.mozilla.org/ru/docs/Web/HTTP/Guides/Overview

// https://docs.github.com/en/authentication/connecting-to-github-with-ssh 

// 17 



// 18 Practise
const numberOfFilms = prompt('How much films do you watched? ', "");
const personalMovieDB = {
    count: numberOfFilms,
    movie: {

    },
    actors: {

    },
    gender: [],
    privat: false
};

const lastWatchedFilm = prompt('What was the last watched film? ', ''),
    rate = prompt('You rate? (1-10) ', '');

personalMovieDB.movie[lastWatchedFilm] = rate;
console.log(personalMovieDB);


