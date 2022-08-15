let str = `Старший братец ПОНЕДЕЛЬНИК – <br>
работяга, не бездельник. <br>
Он неделю открывает <br>
всех трудиться зазывает. <br>

ВТОРНИК следует за братом <br>
у него идей богато. <br>

А потом СРЕДА-сестрица, <br>
не пристало ей лениться. <br>

Брат ЧЕТВЕРГ и так, и сяк, <br>
он мечтательный чудак. <br>

ПЯТНИЦА-сестра сумела <br>
побыстрей закончить дело. <br>

Предпоследний брат СУББОТА <br>
не выходит на работу. <br>

В гости ходит ВОСКРЕСЕНЬЕ, <br>
очень любит угощенье. <br> `;



function Translate(){
   str = str.replace("ПОНЕДЕЛЬНИК", "MONDAY");
   str = str.replace("ВТОРНИК", "TUESDAY");
   str = str.replace("СРЕДА", "WEDNESDAY");
   str = str.replace("ЧЕТВЕРГ", "THURSDAY");
   str = str.replace("ПЯТНИЦА", "FRIDAY");
   str = str.replace("СУББОТА", "SATURDAY");
   str = str.replace("ВОСКРЕСЕНЬЕ", "SUNDAY");
   document.getElementById('solution').innerHTML = str;
}