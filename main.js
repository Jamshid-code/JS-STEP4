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
    let numbers = random(1,10)
    let operator = getRandomOperator();
    switch (operator) {
        case '+':
          correctAnswer = numbers + numbers;
          break;
        case '-':
          correctAnswer = numbers - numbers;
          break;
          case '%':
          correctAnswer = numbers % numbers;
          break;
        case '*':
          correctAnswer = numbers * numbers;
          break;
        case '/':
      }
    let primer = +prompt(numbers + operator + numbers + ' = ')
    let answer = (numbers + operator +  numbers)
    let word = primer == (numbers + operator +  numbers)? 'Ваш ответ верный' : 'Ваш ответ не верный - ' + primer + ' Правильный ответ ' + answer;
    console.log(numbers + operator + numbers + ' = ' + (numbers + operator + numbers) + ' Ваш ответ ' + primer + ', ' + word);
}




