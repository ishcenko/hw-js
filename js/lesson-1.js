
console.log('Завдання 0')
console.log('   ')
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
console.log('   ')
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
console.log('   ')
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
console.log('   ')
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
console.log('   ')
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
console.log('   ')
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
console.log('   ')
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
console.log('   ')
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
console.log('   ')
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
console.log('   ')
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
console.log('   ')

function makeMessage (name, price) {
   console.log(`You picked ${name}, price per item is ${price} credits`)
  
};

makeMessage('Radar', 6150)
makeMessage('Scanner', 3500)
makeMessage('Reactor', 8000)
makeMessage('Engine', 4070)

//Функція calculateTotalPrice рахує і повертає загальну суму 
//покупки.Вона приймає два параметри, значення яких будуть 
//задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - результат множення кількості товарів на ціну одного.

// Оголошена функція calculateTotalPrice (orderedQuantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик calculateTotalPrice(1, 3500) повертає 3500
// Виклик calculateTotalPrice(12, 70) повертає 840
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
console.log('Завдання 11')
console.log('   ')


function calculateTotalPrice11(orderedQuantity11, pricePerItem11) {
    console.log(orderedQuantity11 * pricePerItem11)

}
calculateTotalPrice11(5, 100);
calculateTotalPrice11(8, 60);
calculateTotalPrice11(3, 400);
calculateTotalPrice11(1, 3500);
calculateTotalPrice11(12, 70);


//Функція makeOrderMessage(orderedQuantity, pricePerDroid,
//deliveryFee) складає і повертає повідомлення про покупку
//ремонтних дроїдів.Вона оголошує три параметри, значення
//яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.

// Оголошена функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Виклик makeOrderMessage(2, 100, 50) повертає "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Виклик makeOrderMessage(4, 300, 100) повертає "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Виклик makeOrderMessage(10, 70, 200) повертає "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."
console.log('Завдання 12')
console.log('   ')
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    console.log(`You ordered droids worth ${(orderedQuantity * pricePerDroid) + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`)
}
makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200);



//Функція makeOrderMessage(orderedQuantity, pricePerDroid,
//deliveryFee) складає і повертає повідомлення про покупку
//ремонтних дроїдів.Вона оголошує три параметри, значення
//яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.

// Оголошена функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Виклик makeOrderMessage(2, 100, 50) повертає "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Виклик makeOrderMessage(4, 300, 100) повертає "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Виклик makeOrderMessage(10, 70, 200) повертає "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."
console.log('Завдання 12')
console.log('   ')
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    console.log(`You ordered droids worth ${(orderedQuantity * pricePerDroid) + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`)
}
makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200);


// Функція isAdult оголошує один параметр age (вік), 
//значення якого буде задаватися під час її виклику.
//Присвой змінній passed вираз перевірки віку користувача на повноліття.
//Людина вважається повнолітньою у віці 18 років і старше.

// Оголошена функція isAdult(age)
// У виразі перевірки використовується оператор >=
// Виклик isAdult(20) повертає true
// Виклик isAdult(14) повертає false
// Виклик isAdult(8) повертає false
// Виклик isAdult(37) повертає true

console.log('Завдання 13')
console.log('   ')

function isAdult(age) {
    console.log(age >= 18);
}
isAdult(20);
isAdult(14);
isAdult(8);
isAdult(37);

// Функція isValidPassword (password) перевіряє рівність збереженого 
//і введеного паролів і повертає результат перевірки - буль true або 
//false.Змінна SAVED_PASSWORD зберігає значення попередньо збереженого
//пароля.Введений пароль передається у параметр password.

// Присвой змінній isMatch вираз перевірки рівності введених і
// попередньо збережених паролів.Результатом виразу перевірки повинно
// бути true, якщо значення збігаються, і false - якщо ні.

// Оголошена функція isValidPassword(password)
// У виразі перевірки паролів використаний оператор ===
// Виклик isValidPassword("mangodab3st") повертає false
// Виклик isValidPassword("kiwirul3z") повертає false
// Виклик isValidPassword("jqueryismyjam") повертає true
console.log('Завдання 14') 
console.log('   ')
function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    const isMatch = SAVED_PASSWORD === password;
    console.log(isMatch)
    
}
isValidPassword("mangodab3st");
isValidPassword("kiwirul3z");
isValidPassword("jqueryismyjam");



// Додай вираз перевірки повноліття користувача, значення параметра age, 
//в умову для інструкції if.

// Якщо користувач повнолітній, повинен виконуватися блок if і у 
//змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else і записується 
//рядок "You are a minor".
// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"
console.log('Завдання 15')
console.log('   ')

function checkAge(age) {
    let ageChe;
    if (age >= 18) {
        ageChe = "Повнолітній"
        
    } else {
        ageChe = "Неповнолітній"
    }
    console.log(ageChe)
}
checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);

// Функція checkStorage(available, ordered) перевіряє можливість 
//оформлення замовлення і повертає повідомлення про результат.
//Вона оголошує два параметри, значення яких будуть задаватися 
//під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".
// Оголошена функція checkStorage(available, ordered).
// Виклик checkStorage(100, 50) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(200, 150) повертає "Order is processed, our manager will contact you."
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"
console.log('Завдання 16')
console.log('   ')
function checkStorage(available, ordered) {
    let messageS = available >= ordered ? "Order is processed, our manager will contact you." : "Not enough goods in stock!";
    console.log(messageS)
}


checkStorage(100, 50) 
checkStorage(100, 130)
checkStorage(200, 20) 
checkStorage(200, 150)
checkStorage(150, 180)


// Заміни вирази зі стандартними математичними операторами на комбінований
// оператор присвоєння з додаванням, відніманням, множенням і діленням.

// Значення змінної a дорівнює 7
// Використаний оператор +=
// Значення змінної b дорівнює 6
// Використаний оператор -=
// Значення змінної c дорівнює 45
// Використаний оператор *=
// Значення змінної d дорівнює 2
// Використаний оператор /=
console.log('Завдання 17')
console.log('   ')

let ageN = 25;
let ageA = 44;
let ageI = 55;
let ageJ = 26;
let ageL = 11;
let ageO = 47;

ageN += 7;
ageA -= 6;
ageI *= 5;
ageJ /= 4;
ageL *= 44;
ageO -= 55;

console.log(ageN);
console.log(ageA);
console.log(ageI);
console.log(ageJ);
console.log(ageL);
console.log(ageO);


// Станція з продажу ремонтних дроїдів готова до запуску, залишилося
//написати програмне забезпечення для відділу продажів.

// Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// виконує транзакцію з продажу дроїдів і повертає повідомлення про
//результат операції.Вона оголошує три параметри, значення яких будуть
//задаватися під час її виклику:

// pricePerDroid - ціна одного дроїда
// orderedQuantity - кіл-сть замовлених дроїдів
// customerCredits - сума коштів на рахунку клієнта
// Доповни її наступним функціоналом:

// Оголоси змінну totalPrice для зберігання загальної суми замовлення
// і присвой їй вираз розрахунку цієї суми.

// Додай перевірку, чи зможе клієнт оплатити замовлення:

// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта,
// запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".
// Оголошена функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// Виклик makeTransaction(3000, 5, 23000) повертає "You ordered 5 droids, you have 8000 credits left"
// Виклик makeTransaction(1000, 3, 15000) повертає "You ordered 3 droids, you have 12000 credits left"
// Виклик makeTransaction(5000, 10, 8000) повертає "Insufficient funds!"
// Виклик makeTransaction(2000, 8, 10000) повертає "Insufficient funds!"
// Виклик makeTransaction(500, 10, 5000) повертає "You ordered 10 droids, you have 0 credits left"
console.log('Завдання 18')
console.log('   ')
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message18;

    const totalPrice18 = pricePerDroid * orderedQuantity;
    if (totalPrice18 > customerCredits) {
        message18 = "Insufficient funds!";
    } else if(customerCredits -= totalPrice18) {
        message18 = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
    } else {
        message18 = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
    }
    console.log(message18)
}
makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000);
makeTransaction(500, 10, 5000);

// Функція checkPassword(password) отримує пароль користувача в 
//параметр password, перевіряє його на збіг з паролем адміністратора у 
//змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, 
//яке зберігається у змінній message.

// Якщо значення параметра password дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".
// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword(null) повертає "Canceled by user!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"
console.log('   ')
console.log('Завдання 19')

console.log('   ')
function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message19;
    if (password === 'jqueryismyjam') {
        message19 = "Welcome!";
    } else if (password === null) {
        message19 = 'Canceled by user!';
    } else {
        message19 = "Access denied, wrong password!";
    }
    console.log(message19);
    // return message19;
}

// console.log(checkPassword)
checkPassword("jqueryismyjam");
checkPassword("mangohackzor");
checkPassword(null);
checkPassword("polyhax");

// Функція checkStorage(available, ordered) перевіряє можливість оформлення
//замовлення і повертає повідомлення про результат.Вона оголошує два параметри,
// значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює
//0, у змінну message присвоюється рядок "There are no products in the order!".

// Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у
//змінну message присвоюється рядок "Your order is too large, there are not
//enough items in stock!".

// В іншому випадку у змінну message присвоюється рядок "The order is
//accepted, our manager will contact you".

// Оголошена функція checkStorage(available, ordered)

// Виклик checkStorage(100, 50) повертає "The order is accepted,
//our manager will contact you"

// Виклик checkStorage(100, 130) повертає "Your order is too large,
//there are not enough items in stock!"

// Виклик checkStorage(70, 0)повертає "There are no products in the order!"

// Виклик checkStorage(200, 20) повертає "The order is accepted, our
//manager will contact you"

// Виклик checkStorage(200, 250) повертає "Your order is too large,
//there are not enough items in stock!"

// Виклик checkStorage(150, 0) повертає "There are no products in the order!"
console.log('   ')
console.log('Завдання 20')
console.log('   ')

function checkStorage(available, ordered) {
    let message20;
    if (ordered === 0) {
        message20 = "There are no products in the order!";
    } else if (ordered > available) {
        message20 = "Your order is too large, there are not enough items in stock!";
    } else { message20 = "The order is accepted, our manager will contact you" }

    console.log(message20);
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 250);
checkStorage(200, 20);
checkStorage(70, 0);

// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у
//проміжок.Вона оголошує три параметри, значення яких будуть задаватися під 
//час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isInRange вираз перевірки входження number у 
//числовий проміжок від start до end.Тобто число повинно бути більшим 
//або дорівнювати start, і меншим або дорівнювати end.Результатом 
//виразу перевірки буде буль true або false.

// Оголошена функція isNumberInRange(start, end, number)
// У виразі перевірки використаний оператор &&
// Виклик isNumberInRange(10, 30, 17) повертає true
// Виклик isNumberInRange(10, 30, 5) повертає false
// Виклик isNumberInRange(20, 50, 24) повертає true
// Виклик isNumberInRange(20, 50, 76) повертає false
console.log('   ')
console.log('Завдання 20')
console.log('   ')
function isNumberInRange(start, end, number) {
    let isInRange = start>= number;

}

isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76);
