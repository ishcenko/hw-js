
console.log('Завдання 0')
const a = 10;
const b = 20;
const c = a * b;
const d = a / c;

console.log(c);
console.log(d);


// Оголоси дві змінні, productName для назви товару
// і pricePerItem для зберігання ціни за штуку.
//При оголошенні надай змінним наступні значення:

// назва - рядок "Droid";
// ціна за штуку - число 2000.
// Оголошена змінна productName
// Значення змінної productName - це рядок "Droid"
// Оголошена змінна pricePerItem
// Значення змінної pricePerItem - це число 2000
console.log('Завдання 1')
const productName1 = 'Droid';
const pricePerItem1 = 2000;
console.log(`Hазвa товару ${productName1} ціна за 1 штуку ${pricePerItem1}`)


// Ім'я товару змінили на "Repair droid" і 
//збільшили його ціну на 1500 кредитів.
//Перевизнач значення змінних pricePerItem 
//і productName після їх оголошення.

//Змінна pricePerItem оголошена за допомогою let
// При оголошенні змінної pricePerItem присвоєно значення — число 2000
// Змінній pricePerItem присвоєно нове значення, більше за попереднє на 1500
// Змінна productName оголошена за допомогою let
// При оголошенні змінної productName присвоєно значення — рядок "Droid"
// Змінній productName присвоєно нове значення — рядок "Repair droid"
console.log('Завдання 2')
let productName2 = 'Repair droid';
let pricePerItem2 = 2000;

productName2 = 'Droid';
pricePerItem2 = 3500;
console.log(`${productName2}, ${pricePerItem2}`)


//Оголоси наступні змінні, використовуючи ключове слово
//const або let, і присвой їм відповідні значення.

//topSpeed - число 160.
//distance - число 617.54.
//login - рядок "mango935".
//isOnline - буль true.
//isAdmin - буль false.
//Оголошена змінна topSpeed
//Значення змінної topSpeed - це число 160
//Оголошена змінна distance
//Значення змінної distance - це число 617.54
//Оголошена змінна login
//Значення змінної login - це рядок "mango935"
//Оголошена змінна isOnline
//Значення змінної isOnline - це буль true
//Оголошена змінна isAdmin
//Значення змінної isAdmin - це буль false
console.log('Завдання 3')
const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false;

console.log(topSpeed);
console.log(distance);
console.log(login);
console.log(isOnline);
console.log(isAdmin);


//Доповни код, присвоївши змінній totalPrice
//вираз для підрахунку загальної суми замовлення.
//Змінна pricePerItem зберігає ціну однієї одиниці
//товару, а orderedQuantity - кількість одиниць товару
//в замовленні.

//Оголошена змінна pricePerItem
//Значення змінної pricePerItem - це число 3500
//Оголошена змінна orderedQuantity
// Значення змінної orderedQuantity - це число 4
// Оголошена змінна totalPrice
// Значення змінної totalPrice - це число 14000
// Використаний оператор *
console.log('Завдання 4')
let pricePerItem4 = 3500;
let orderedQuantity = 4;
let totalPrice = pricePerItem4 * orderedQuantity;
console.log(`Сума ${totalPrice} кредитів`)


// Оголоси змінну message і запиши в неї повідомлення про
//покупку, рядок у форматі: "You picked <назва товару>,
//price per item is < ціна товару > credits".
//Де < назва товару > і < ціна товару > — це значення
//змінних productName і pricePerItem.Використовуй
//синтаксис шаблонних рядків.

// Оголошена змінна productName
// Значення змінної productName - це рядок "Droid"
// Оголошена змінна pricePerItem
// Значення змінної price - це число 3500
// Оголошена змінна message
// Значення змінної message - це рядок "You picked Droid, price per item is 3500 credits"
console.log('Завдання 5')
let productName5 = 'Droid';
let pricePerItem5 = 3500
let message = `You picked ${productName5}, price per item is ${pricePerItem5} credits`;
console.log(message)

//Магазин з продажу ремонтних дроїдів готовий до відкриття, 
//залишилося написати скрипт для їх замовлення.Оголоси змінні 
//та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
// Оголошена змінна orderedQuantity
// Значення змінної orderedQuantity - це число 6
// Оголошена змінна pricePerDroid
// Значення змінної pricePerDroid - це число 800
// Оголошена змінна deliveryFee
// Значення змінної deliveryFee - це число 50
// Оголошена змінна totalPrice
// Значення змінної totalPrice - це число 4850
// Оголошена змінна message
// Значення змінної message - це рядок "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."
console.log('Завдання 6')
let pricePerDroid6 = 800;
let orderedQuantity6 = 6;
let delivery6 = 50;
let totalPrice6 = pricePerDroid6 * orderedQuantity6 + delivery6;
let message6 = `You ordered droids worth ${totalPrice6} credits. Delivery ${delivery6} is included in total price.`;
console.log(message6)

// Оголоси функцію sayHi, всередині якої додай console.log()
//з рядком "Hello, this is my first function!".Після
//оголошення виклич функцію sayHi.

// Очікується оголошення функції
// Функції присвоєно ім'я sayHi
// В тілі функції sayHi є console.log("Hello, this is my first function!")
// Після оголошення є виклик функції sayHi
console.log('Завдання 7')
function sayHi() {
    console.log("Hello, this is my first function!");
}
sayHi();


// Функція add повинна вміти додавати три числа і виводити
//результат у консоль.Додай функції add три
//параметри: a, b і c, які будуть отримувати значення
//аргументів під час її виклику.

// Доповни console.log() таким чином, щоб він логував рядок 
//"Addition result equals <result>", де < result > - це сума переданих чисел.

// Оголошена функція add(a, b, c)
// Виклик add(15, 27, 10) виводить у консоль "Addition result equals 52"
// Виклик add(10, 20, 30) виводить у консоль "Addition result equals 60"
// Виклик add(5, 10, 15) виводить у консоль "Addition result equals 30"
console.log('Завдання 8')
function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c} and ${a * b + c}`);
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
add(25, 65, 55)

// Доповни код функції add таким чином, щоб вона повертала результат 
//додавання значень трьох параметрів: a, b і c.

// Оголошена функція add(a, b, c)
// У функції add є оператор return
// Виклик add(15, 27, 10) повертає 52
// Виклик add(10, 20, 30) повертає 60
// Виклик add(5, 10, 15) повертає 30
// Виклик функції з випадковими, але валідними аргументами, 
//повертає правильне значення
console.log('Завдання 9')
function add9(a, b, c, d) {
    
    return a + b * c / d;
}

console.log(add9(15, 27, 10, 50));
console.log(add9(10, 20, 30, 10));
console.log(add9(5, 10, 15, 2));



function add10(a, b, c, k) {
    return a + b + c + k;
}
console.log(add10(15, 27, 10, 30));
console.log(add10(10, 20, 30, 20));
console.log(add10(5, 10, 15, 10));

// Функція makeMessage(name, price) складає і повертає повідомлення 
//про покупку.Вона оголошує два параметри, значення яких будуть 
//задаватися під час її виклику.

//name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.

// Увага
// Зверни увагу на те, що в коді відсутній виклик функції makeMessage. З цього завдання і далі ми самі будемо викликати твої функції і перевіряти те, як вони працюють. Результат наших перевірок ти побачиш у блоці Результати під редактором коду.

// Оголошена функція makeMessage(name, price)
// Виклик makeMessage('Radar', 6150) повертає "You picked Radar, price per item is 6150 credits"
// Виклик makeMessage('Scanner', 3500) повертає "You picked Scanner, price per item is 3500 credits"
// Виклик makeMessage('Reactor', 8000) повертає "You picked Reactor, price per item is 8000 credits"
// Виклик makeMessage('Engine', 4070) повертає "You picked Engine, price per item is 4070 credits"

console.log('Завдання 10')

function makeMessage (name, price) {
   const message = `You picked ${name}, price per item is ${price} credits`;
  
  return message;
};

makeMessage('Radar', 6150)
makeMessage('Scanner', 3500)
makeMessage('Reactor', 8000)
makeMessage('Engine', 4070)