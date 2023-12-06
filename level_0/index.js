// 프로그래머스 레벨 0 기초 트레이닝 알고리즘 풀이

// 1번 문제..
// 대소문자 바꿔서 출력하기
// 문제 설명
// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
// 제한 사항
// 1 ≤ str의 길이 ≤ 20
// str은 알파벳으로 이루어진 문자열입니다.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  var answer = "";
  for (let i = 0; i < str.length; i++) {
    answer +=
      str[i] === str[i].toUpperCase()
        ? str[i].toLowerCase()
        : str[i].toUpperCase();
  }
  console.log(answer);
});

// 2번 문제
// 특수문자 출력하기
// 문제 설명
// 다음과 같이 출력하도록 코드를 작성해 주세요.
// 예시 ) !@#$%^&*(\'"<>?:;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  // 특수문자의 경우 \를 출력하기 위해 \\를 연달아 써야한다는것을 알게 되었다.
  console.log(`!@#$%^&*(\\'"<>?:;`);
});

// 3번 문제
// 문자열 겹쳐쓰기
// 문제 설명
// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, overwrite_string, s) {
  var answer = "";
  var str = [...my_string];
  // splice() 메서드에 대해서 다시 한번 짚고 넘어갈 수 있었다.
  str.splice(s, overwrite_string.length, overwrite_string);
  answer = str.join("");
  return answer;
}

// 문자열 섞기
// 문제 설명
// 길이가 같은 두 문자열 str1과 str2가 주어집니다.
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
function solution(str1, str2) {
  var answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += `${str1[i]}${str2[i]}`;
  }
  return answer;
}

// 문자 리스트를 문자열로 변환하기
// 문제 설명
// 문자들이 담겨있는 배열 arr가 주어집니다. arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.
function solution(arr) {
  var answer = "";
  arr.forEach((_arr) => {
    return (answer += _arr);
  });
  return answer;

  // return arr.join("") <- 다른사람 풀이. 애초에 join()을 하면 되는 것이였음
}

// 문자열 곱하기
// 문제 설명
// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
function solution(my_string, k) {
  var answer = "";
  for (let i = 0; i < k; i++) {
    answer += my_string;
  }
  // return my_string.repeat(k) <- 다른사람 풀이 repeat()라는 메서드를 새로 알았다.
  // repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.
  return answer;
}
