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

// 더 크게 합치기
// 문제 설명
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.
function solution(a, b) {
  var answer = 0;
  var num1 = `${a}${b}`;
  var num2 = `${b}${a}`;
  answer = Math.max(num1, num2);
  return answer;
}

// n의 배수
// 문제 설명
// 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num, n) {
  var answer = 0;
  answer = num % n === 0 ? 1 : 0;
  return answer;
}

// 조건 문자열
// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.
// 두 수가 n과 m이라면
// ">", "=" : n >= m
// "<", "=" : n <= m
// ">", "!" : n > m
// "<", "!" : n < m
// 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다.
// 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.
function solution(ineq, eq, n, m) {
  var answer = 0;
  if (ineq == ">" && eq == "=") {
    answer = n >= m ? 1 : 0;
  } else if (ineq == "<" && eq == "=") {
    answer = n <= m ? 1 : 0;
  } else if (ineq == ">" && eq == "!") {
    answer = n > m ? 1 : 0;
  } else {
    answer = n < m ? 1 : 0;
  }
  return answer;
}

// 홀짝에 따 다른 값  반환하기
// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
function solution(n) {
  var answer = 0;
  if (n % 2 === 0) {
    for (let i = 2; i <= n; i += 2) {
      answer += i * i;
    }
  } else {
    for (let i = 1; i <= n; i += 2) {
      answer += i;
    }
  }
  return answer;
}

// 원소들의 곱과 합
// 정수가 담긴 리스트 num_list가 주어질 때,
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
  const num1 = num_list.reduce((acc, cur) => acc * cur);
  const num2 = num_list.reduce((acc, cur) => acc + cur);
  const num3 = Math.pow(num2, 2);
  return num1 < num3 ? 1 : 0;
}

// 이어 붙인 수
// 정수가 담긴 리스트 num_list가 주어집니다.
// num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
  let num1 = "";
  let num2 = "";
  num_list.forEach((num) => {
    return num % 2 === 0 ? (num1 += num) : (num2 += num);
  });
  return Number(num1) + Number(num2);
}

// 코드 처리하기
// 문자열 code가 주어집니다.
// code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.

// mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 code[idx]의 값에 따라 다음과 같이 행동합니다.

// mode가 0일 때
// code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.
// mode가 1일 때
// code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.
// 문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.

// 단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.
// 내 풀이
function solution(code) {
  let answer = "";
  let mode = 0;
  [...code].forEach((c, idx) => {
    if (mode === 0) {
      if (c === "1") mode = 1;
      else if (idx % 2 === 0) answer += c;
    } else {
      if (c === "1") mode = 0;
      else if (idx % 2 === 1) answer += c;
    }
  });
  return answer === "" ? "EMPTY" : answer;
}
// 다른 사람 풀이
function solution(code) {
  let mode = 0;
  const answer =
    [...code].reduce((acc, cur, idx) => {
      if (mode) {
        if (cur !== "1" && idx % 2 === 1) return acc + cur;
        if (cur === "1") mode = 0;
      } else {
        if (cur !== "1" && idx % 2 === 0) return acc + cur;
        if (cur === "1") mode = 1;
      }
      return acc;
    }, "") || "EMPTY";
  return answer;
}

// 주사위 게임 2
// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.
// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
function solution(a, b, c) {
  if (a !== b && a !== c && b !== c) {
    return a + b + c;
  } else if (a === b && a === c && b === c) {
    return (
      (a + b + c) *
      (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
      (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
    );
  } else {
  }
  return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
}

// 마지막 두 원소
// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을
// 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
  var answer = num_list;
  const num1 = num_list[num_list.length - 1];
  const num2 = num_list[num_list.length - 2];
  if (num1 > num2) {
    answer.push(num1 - num2);
  } else {
    answer.push(num1 * 2);
  }
  return answer;
}
