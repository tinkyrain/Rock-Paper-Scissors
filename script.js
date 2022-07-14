//Выбор пользователя и пк, где
//0 - камень
//1 - бумага
//2 - ножницы

let user = null;
let pc = null;

//Получени id кнопок
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('Scissors');


//Получение текста, куда будет выписываться выбор
//пользователя и компьюетера
let pc_answer = document.getElementById('pc_answer_text');
let user_answer = document.getElementById('people_answer_text');


//Ход компьютера
function pc_choice(){
  pc = Math.round(Math.random()*2);

  if(pc == 0){
    pc_answer.innerHTML = 'Компьютер выбрал камень!';
  }

  if(pc == 1){
    pc_answer.innerHTML = 'Компьютер выбрал бумагу!';
  }

  if(pc == 2){
    pc_answer.innerHTML = 'Компьютер выбрал ножницы!';
  }
}

//Функции выбора камня, бумаги и ножниц

//Функция выбора камня
function click_block_rock(){
  user = 0;
  user_answer.innerHTML = 'Вы выбрали камень!';

  pc_choice();
  win_lose();
}

//функция выбора бумаги
function click_block_paper(){
  user = 1;
  user_answer.innerHTML = 'Вы выбрали бумагу!';

  pc_choice();
  win_lose();
}


//функция выбора ножниц
function click_block_scissors(){
  user = 2;
  user_answer.innerHTML = 'Вы выбрали ножницы';

  pc_choice();
  win_lose();
}

//Подключение функций к кнопкам

rock.onclick = click_block_rock;
paper.onclick = click_block_paper;
scissors.onclick = click_block_scissors;

function win_lose(){

  //Пользователь ставит камень
  if(user == 0 && pc == 0){
    alert('Ничья');

    user_answer.innerHTML = '';
    pc_answer.innerHTML = '';
  }

  if(user == 0 && pc == 1){
    alert('Вы проиграли');

    user_answer.innerHTML = '';
    pc_answer.innerHTML = '';
  }


  if(user == 0 && pc == 2){
    alert('Вы выйграли');

    user_answer.innerHTML = '';
    pc_answer.innerHTML = '';
  }

  //пользователь ставит бумагу

  if(user == 1 && pc == 1){
    alert('Ничья');

    user_answer.innerHTML = '';
    pc_answer.innerHTML = '';
  }

  if(user == 1 && pc == 2){
    alert('Вы проиграли');

    user_answer.innerHTML = '';
    pc_answer.innerHTML = '';
  }


  if(user == 1 && pc == 0){
    alert('Вы выйграли');

    user_answer.innerHTML = '';
    pc_answer.innerHTML = '';
  }

  //если пользователь ставит ножницы

  if(user == 2 && pc == 2){
    alert('Ничья');

    user_answer.innerHTML = '';
    pc_answer.innerHTML = '';
  }

  if(user == 2 && pc == 0){
    alert('Вы проиграли');

    user_answer.innerHTML = '';
    pc_answer.innerHTML = '';
  }


  if(user == 2 && pc == 1){
    alert('Вы выйграли');

    user_answer.innerHTML = '';
    pc_answer.innerHTML = '';
  }
}
