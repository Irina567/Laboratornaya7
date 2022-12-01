// Ex. 1
console.log("____Ex. 1____\nЛюбое значение" );

// Ex. 2
let value1 = 172;
console.log("____Ex. 2____\nПервая переменная: "+ value1);
let value2 = 50;
console.log("Вторая переменная: "+ value2);

// Ex. 3
console.log("____Ex. 3____\nСумма: " + (value1+value2));

// Ex. 4
let str = "Привет";
console.log("____Ex. 4____\nНижний регистр = " + str.toLowerCase());
console.log("Верхний регистр = " + str.toUpperCase());

// Ex. 5
console.log(`____Ex. 5____\nБазовые операции над ${value1} и ${value2} :`);
console.log("Сложение: "+(value1+value2));
console.log("Вычитание: " + (value1 - value2));
console.log("Умножение: "+(value1*value2));
console.log("Деление: "+(value1/value2));
console.log (`Квадрат: ${value1}^2 = ${Math.pow(value1, 2)} | ${value2}^2 = ${Math.pow(value2, 2)}`)
console.log(`Остаток от деления : ${value1%value2}`);

// Ex.6 Функция - (a*b)-(a/b)
function MyFunc1 (val1, val2)
{
    return (val1 * val2 - (val1/val2));
}
console.log("____Ex. 6____\n" + MyFunc1(value1, value2));

// Ex.7 Функция - Строка + текст
function MyFunc2 (str1)
{
    return (str1[0].toUpperCase() + str1.substring(1).toLowerCase() + ", мой друг!");
}
console.log("____Ex. 7____\n"+MyFunc2("ПРИВЕТ"));