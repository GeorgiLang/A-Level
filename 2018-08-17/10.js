/*Поиск элементов DOM (объектной структуры документа) с использованием библиотеки jQuery

Используя поиск по селекторам из раздела “Селекторы” справочника и jQuery-функцию css, задайте стили элементам таблицы в блоке #content. Редактировать HTML нельзя, CSS не нужен. Последовательность команд:


Таблица расположена посредине страницы, расстояния между ее ячейками нет
Все ячейки имеют ширину-высоту 10px, цвет фона #eee, границу 1px solid #000
Фон в ячейках первых шести строк –#106B63
Фон в ячейках строк 7-9 –#E7C610
Фон в ячейках строк 10-12 – #C64A08
Фон в ячейках строк 13-15 –#B43100
Фон в ячейках всех оставшихся строк –#102173
У некоторых ячеек есть класс none, задайте на jQuery стиль для этого класса: фона нет, границы нет*/
$("table").css({"margin":"150px auto","border-collapse": "collapse"});
  $("td").css( {"width":"10px","height":"10px","border":"1px solid #000"} );
    $(".none").css({"background-color":"#eee"});
  $("tr:eq(0)").css({"background-color":"#106B63"});
    $("tr:eq(1)").css({"background-color":"#106B63"});
      $("tr:eq(2)").css({"background-color":"#106B63"});
        $("tr:eq(3)").css({"background-color":"#106B63"});
          $("tr:eq(4)").css({"background-color":"#106B63"});
            $("tr:eq(5)").css({"background-color":"#106B63"});
    $("tr:eq(6)").css({"background-color":"#E7C610"});
      $("tr:eq(7)").css({"background-color":"#E7C610"});
        $("tr:eq(8)").css({"background-color":"#E7C610"});
      $("tr:eq(9)").css({"background-color":" #C64A08"});
        $("tr:eq(10)").css({"background-color":"#C64A08"});
          $("tr:eq(11)").css({"background-color":"#C64A08"});
    $("tr:eq(12)").css({"background-color":"#B43100"});
       $("tr:eq(13)").css({"background-color":"#B43100"});
         $("tr:eq(14)").css({"background-color":"#B43100"});
      $("tr:eq(15)").css({"background-color":"#102173"});
        $("tr:eq(16)").css({"background-color":"#102173"});
          $("tr:eq(17)").css({"background-color":"#102173"});
            $("tr:eq(18)").css({"background-color":"#102173"});
              $("tr:eq(19)").css({"background-color":"#102173"});