function calculateage(name, year,actualyear){
    let age = actualyear - year;
    return name + ', Ваш возраст ' + age;
}
let name1 = prompt('Введите ваше имя')
let age1 = +prompt('Введите ваш год рождения')
let actualyear = +prompt('Введите нынешний год')
let answer = calculateage(name1, age1, actualyear)
console.log(answer);



function random(min,max){
    return Math.floor(Math.random() * ( max + 1 - min )+ min ) 
}
function getRandomOperator(){
    const operators = ['+', '-', '*', '/']; 
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

let number = +prompt('Введите количество примеров')

for(let i = 1; i <= number; i++){
    let number1 = random(1,10)
    let number2 = random(1,10)
    let operator = getRandomOperator();
    switch (operator) {
        case '+':
          correctAnswer = number1 + number2;
          break;
        case '-':
          correctAnswer = number1 - number2;
          break;
          case '%':
          correctAnswer = number1 % number2;
          break;
        case '*':
          correctAnswer = number1 * number2;
          break;
        case '/':
        correctAnswer = number1 / number2;
        break;
      }
    // let primer = +prompt(number1 + operator + number2 + ' = ')
    // let answer = (number1 + operator +  number2)
    // let word = primer == (number1 + operator +  number2)? 'Ваш ответ верный' : 'Ваш ответ не верный - ' + primer + ' Правильный ответ ' + answer;
    // console.log(number1 + operator + number2 + ' = ' + (number1 + operator + number2) + ' Ваш ответ ' + primer + ', ' + word);

    let userAnswer = +prompt(`${number1} ${operator} ${number2} = ?`);

    console.log(`Ваш ответ: ${userAnswer}`);
    if (userAnswer === correctAnswer) {
        console.log(`Правильный ответ! Правильный ответ: ${correctAnswer}`);
    } else {
        console.log(
            `Неправильно. Правильный ответ: ${correctAnswer}`
        );
    }
}





