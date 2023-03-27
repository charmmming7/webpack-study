// ----------------------------------
// 1. 인풋/아웃풋

// 1) 원시방식
// sum(1, 2);

// 2) IIFE 방식의 모듈
// math.sum(1, 2);

// 3-1) CommonJS 모듈방식
/*
const math = require("./math.js")
math.sum(1, 2) // 3
*/

// 3-2) ES2015에서 표준 모듈 시스템 
// import * as math from "./math.js";
// import { sum } from './math.js';
// console.log(sum(1, 2));

// ----------------------------------
// 2. 로더
import './app.css';
import nyancat from './nyancat.jpg';

document.addEventListener('DOMContentLoaded', () => { 
  document.body.innerHTML = `
    <img src="${nyancat}">
  `
})

// ----------------------------------
// 3. 플러그인
console.log(process.env.NODE_ENV); // 웹팩 mode 출력. 
console.log(TWO);
console.log(String);
console.log(api.domain);