// 1. 전역 공간에 sum이 노출
/*
function sum(a, b) {
  return a + b
}
*/

// 2. IIFE 방식의 모듈
/*
var math = math || {}; // 전역 네임스페이스. math가 있으면 할당, 없으면 빈객체 할당.

(function(){
	function sum(a, b) {
	  return a + b
	}

	math.sum = sum; // sum 함수를 외부에서 접근할 수 있도록 전역 네임스페이스인 math에 sum 함수 할당
})();
*/

// 3-1. CommonJS 모듈방식
// exports function sum(a, b) { return a + b; }

// 3-2. ES2015에서 표준 모듈 시스템
export function sum(a, b) {
  return a + b;
}
