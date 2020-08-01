/*
  Как это использовать7
  
  1) Скопируйте весь скрипт.
  2) Измените значения параметров (имена игроков, кол-во кролей, сообщение)
  3) Перейдите https://catwar.su/rabbit
  4) Откройте консоль разработчика в любом ПК браузере (Ctrl+Shift+C и выбрать вкладку Console)
  5) Вставьте скрипт с настроенными параметрами в консоль.
  6) Нажмите Enter и не закрывайте вкладку, пока в консоли не появится надпись <Готово, все отправлено!>
*/


//Параметры

const PLAYERS = [];  //Имена игроков, коим выдать кроли. Пример: ["Хмурь", "Переливчатенький", "Насмешливолапа", "Забавляющая Ярость"]
const RABBITS_COUNT = 0; //Кол-во кролей 1-му игроку
const MESSAGE = ""; //Комментарий


//Сам код

async function getIdByName (name)
{
	return parseInt (await $.post ("https://catwar.su/ajax/top_cat", {name : name}).promise ());
}

function sendRabbits (id, value, text)
{
	$.post ("https://catwar.su/rabbit", {rabbit : value, cat : id, comment : text});
}

for (let i = 0; i < PLAYERS.length; i++)
{
	sendRabbits (await getIdByName (PLAYERS [i]), RABBITS_COUNT, MESSAGE)
}

console.log ("Готово, все отправлено!");