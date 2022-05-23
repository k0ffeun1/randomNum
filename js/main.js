// Сейчас мы с вами реализуем игру угадай число. 
// В этой игре компьютер загадывает число от 1 до 100. 
// В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.
// Если игрок ввел число, меньше загаданного, 
// компьютер должен написать 'введите число побольше', 
// а если введено больше загаданного, то, соответственно, 
// компьютер должен написать 'введите число поменьше'.
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const result = document.getElementById('result')
let randomNum = Math.floor(Math.random() * 100) + 1
let str = ''
console.log(input.value);

function compare () {
  if(Number(input.value) > randomNum) {
    str = 'Введите число поменьше'
  } else if(Number(input.value) < randomNum) {
    str = 'Введите число побольше'
  } else if(Number(input.value) === randomNum) {
    str = 'Поздравляю, вы угадали число!'
  }
  return str
}
btn.onclick = function() {
  return result.innerHTML = compare()
}
console.log(randomNum);

