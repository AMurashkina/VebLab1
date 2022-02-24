
console.log("Задача 1 Приведение типов данных")

console.log(typeof(9));
console.log(typeof(1.2));
console.log(typeof(NaN));
console.log(typeof("Hello World"));
console.log(typeof(true));
console.log(typeof(2 != 1));
console.log("сыр" + "ы");
console.log("сыр" - "ы");
console.log("2" + "4");
console.log("2" - "4");
console.log("Сэм" + 5);
console.log("Сэм" - 5);
console.log(99 * "шары");


console.log("\nЗадача 2 Прямоугольник");

let rectangleW = 2; //ширина
let rectangleH = 3;  //высота
let rectangleP = 2*(rectangleW+rectangleH); //периметр
let rectangleA = rectangleW*rectangleH;  //площадь
console.log(rectangleW, rectangleH);
console.log(rectangleP); 
console.log(rectangleA); 
console.log(rectangleP/rectangleA); 


console.log("\nЗадача 3 Конвертация единиц измерения");

let degreeC = 25;
let degreeF = 66.2;
console.log(`${degreeC}\u00B0C соответствует ${degreeC * (9/5) + 32}\u00B0F`);
console.log(`${degreeF}\u00B0F соответствует ${(degreeF - 32) * (5/9)}\u00B0C`);


console.log("\nЗадача 4 Високосный год");

let year = prompt('№4. Введите год:', 2022);
if(year%4 != 0){
    alert("false");
}else if(year%100 == 0){
    alert("false");
}else {
    alert("true");
}


console.log("\nЗадача 5 Проверка");

let num1 = Number(prompt('№5. первое число = ', 5));
let num2 = Number(prompt('№5. второе число = ', 5));

if (num1 == 10 || num2 == 10 ||  num1 + num2 == 10){
    alert("true");
}else{
    alert("false");
}


console.log("\nЗадача 6 Считаем овец");

let sheep = prompt('Сколько овец ?', 3);
let i = 1;
let res = "1 овечка..."
while(i != sheep){
    i++;
    res = res + " " + i + " " + "овечка...";
}
console.log(res);


console.log("\nЗадача 7 Четное-нечетное");

let j = 0;

while( j <= 15){
    if( j%2 == 0){
        console.log(`"${j} четное"`);
    }else{
        console.log(`"${j} нечетное"`);
    }
    j++;
}


console.log("");
console.log("Задача 8 Елка к новому году");

let column = 1; //столбцы
let row = 0; //строки
let tree = "";

while(column <= 12){ 
    
    if(column%2 != 0){
        while(row < column){
            tree = tree + "*" ;
            row++;
        }
        row = 0;
    }else { 
        while(row < column){
            tree = tree + "#" ;
            row++;
        }
        row = 0;
    }
    
    tree = tree + "\n";
    column++;
}
console.log(tree);


console.log("");
console.log("Задача 9 Сортировка");

let n1 = prompt('№9. 1ое число =', 0);
let n2 = prompt('№9. 2ое число =', -3);
let n3 = prompt('№9. 3ее число =', 1);
let box;
/*
let arr = [n1, n2, n3];
arr.sort((a, b) => {return a - b});   //функция сортировки a-b по возрастанию b-a по убыванию
console.log(arr[0], arr[1], arr[2]);
*/
while(n1 > n2 || n2 > n3){
    if(n1 > n2){
        box = n1;
        n1 = n2;
        n2 = box;
    }else if(n2 > n3){
        box = n2;
        n2 = n3;
        n3 = box;
    }
} 
console.log(n1, n2, n3);


console.log("\nЗадача 10 Максимальное значение");

let num11 = Number(prompt('№10. 1ое число',2));
let num12 = Number(prompt('№10. 2ое число',-1));
let num13 = Number(prompt('№10. 3ее число',0));
let num14 = Number(prompt('№10. 4ое число',-5));
let num15 = Number(prompt('№10. 5ое число',-4));
let max = num11;

/*
let arr = [num11, num12, num13, num14, num15];
arr.sort((a, b) => {return a - b});
console.log(arr[4]);
*/
//console.log(Math.max(num11, num12, num13, num14, num15));

if (max < num12) max = num12;
if (max < num13) max = num13;
if (max < num14) max = num14;
if (max < num15) max = num15;

console.log(max);



