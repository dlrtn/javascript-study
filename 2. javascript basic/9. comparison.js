// Task: Comparison
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

// 문자열의 비교는 사전순으로 첫글자부터 비교한다.
// 문자열의 길이가 다르면 길이가 짧은 문자열이 더 작은 것으로 간주된다.
// 문자열의 길이가 같으면 첫번째 글자부터 비교한다.

// null과 undefined 서로 비교는 가능하다.
// null과 undefined는 다른 값과 비교할 때 false를 반환한다.
