function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

let counterOutput = document.querySelector('.counter'); // поле для вывода количества попыток
let randomArray = [];
let tryCounter = 0; // счетчик попыток
let winCounter = undefined; // счетик верно подобранных значений
let container = document.querySelector('.main__container');

function setDifficulty(difficulty) {          // функция выбора сложности
   for (let i = 0; i < difficulty; i++) {
      randomArray[i] = getRandomInt(1, 10);
   };
   //
   let element = document.querySelector('.difficulty');
   element.innerHTML = 'Выбрана сложность = ' + difficulty + '<br>' + 'Введите ' + difficulty + ' цифр';
   alert(randomArray); // числа которые выбрал компьютер, оставил для проверки задания
   container.style.visibility ="visible";
}

function getAnswer() { // функция счета и получения ответа
   tryCounter++; // счетчтик попыток растет с каждой попыткой (удивительно)
   winCounter = 0; // обнуление счетчика побед каждую попытку
   let answer = document.getElementById('answer').value; 
   let playerAnswer = ("" + answer).split("").map(Number); // разделение массива на числа по отдельности
   for (let i = 0; i < playerAnswer.length; i++) {  // проходим массив циклом и сравниваем числа, записываем верные значения в блок ответов
      if (randomArray[i] == playerAnswer[i]) { 
         classname = '.result__' + i; 
         let output = document.querySelector(classname);
         output.innerHTML = playerAnswer[i];
         output.classList.add('ready');
         if(output.classList.contains('ready')){
            winCounter++;}
         // alert(winCounter);
      }

   }
   counterOutput.innerHTML = 'число попыток = ' + tryCounter;
   if (winCounter == randomArray.length) { // условие взлома
      counterOutput.innerHTML = 'Вы взломали терминал, вы прирожденный хакер!' + '<br>' + '<button onclick="location.reload()"> Новая попытка? </button>'
   }

   // alert(randomArray);
}
