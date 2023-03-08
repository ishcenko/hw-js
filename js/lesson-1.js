
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
console.log('Завдання 21')
console.log('   ')
function isNumberInRange(start, end, number) {
    let isInRange = number>=start && number<=end;
    console.log(isInRange)

}

isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76);


// Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач 
//отримати доступ до контенту.Перевірка відбувається за типом передплати.
//Отримати доступ можуть тільки користувачі з передплатою pro або vip.

// Присвой змінній canAccessContent вираз перевірки передплати. 
//Якщо значення параметра subType дорівнює рядкам "pro" або "vip",
// користувач отримає доступ.Результатом виразу перевірки буде буль true або false.

// Оголошена функція checkIfCanAccessContent(subType)
// У виразі перевірки використаний оператор ||
// Виклик checkIfCanAccessContent("pro") повертає true
// Виклик checkIfCanAccessContent("starter") повертає false
// Виклик checkIfCanAccessContent("vip") повертає true
// Виклик checkIfCanAccessContent("free") повертає false

console.log('   ')
console.log('Завдання 22')
console.log('   ')

function checkIfCanAccessContent22(subType) {
    const checkIfCanAccessContent22 = subType === 'pro' || subType === 'vip';
console.log(checkIfCanAccessContent22)
}

checkIfCanAccessContent22("pro");
checkIfCanAccessContent22("starter");
checkIfCanAccessContent22("vip");
checkIfCanAccessContent22("free");




// Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить 
//число у проміжок.Тобто число повинно бути меншим або дорівнювати start і 
//більшим або дорівнювати end.Результатом виразу перевірки буде буль 
//true або false.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, невходження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, 
//використовуючи оператор!.

// Оголошена функція isNumberNotInRange(start, end, number)
// У виразі використаний оператор !
// Виклик isNumberNotInRange(10, 30, 17) повертає false
// Виклик isNumberNotInRange(10, 30, 5) повертає true
// Виклик isNumberNotInRange(20, 50, 24) повертає false
// Виклик isNumberNotInRange(20, 50, 76) повертає true
console.log('   ')
console.log('Завдання 23')
console.log('   ')

function isNumberNotInRange23(start, end, number) {
    const isInRange23 = number >= start && number <= end;
    const isNotInRange23 = !isInRange23;
    console.log(isNotInRange23)
}



isNumberNotInRange23(10, 30, 17);
isNumberNotInRange23(10, 30, 5);
isNumberNotInRange23(20, 50, 24);
isNumberNotInRange23(20, 50, 76);


// Функція getDiscount(totalSpent) визначає значення знижки, залежно від
//загальної суми витрачених грошей(параметр totalSpent) в магазині за
//весь час(партнерська програма).Знижка записується у змінну discount
//і повертається з функції як результат її роботи.

// Використовуючи розгалуження і логічні оператори, доповни код функції.

// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10%
//(золотий партнер)

// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5%
//(срібний партнер)

// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2%
//(бронзовий партнер)

// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)

// Значення знижок кожного рівня зберігаються в однойменних константах
//BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

// Оголошена функція getDiscount(totalSpent)
// Виклик getDiscount(137000) повертає 0.1
// Виклик getDiscount(46900) повертає 0.05
// Виклик getDiscount(8250) повертає 0.02
// Виклик getDiscount(1300) повертає 0
// Виклик getDiscount(5000) повертає 0.02
// Виклик getDiscount(20000) повертає 0.05
// Виклик getDiscount(50000) повертає 0.1

console.log('   ')
console.log('Завдання 24')
console.log('   ')
function getDiscount24(totalSpent) {
    const GOLD_DISCOUNT = 0.1;
    const SILVER_DISCOUNT = 0.05;
    const BRONZE_DISCOUNT = 0.02;
    const BASE_DISCOUNT = 0;
    let discount
    if (totalSpent >= 50000) {
        discount = GOLD_DISCOUNT
    } else if (totalSpent >= 20000 && totalSpent < 50000) {
        discount = SILVER_DISCOUNT
    } else if (totalSpent >= 5000 && totalSpent <= 20000) {
        discount = BRONZE_DISCOUNT
    } else if (totalSpent < 5000) {
        discount = BASE_DISCOUNT
    }
console.log(discount)
}


getDiscount24(137000);
getDiscount24(46900);
getDiscount24(8250);
getDiscount24(1300);
getDiscount24(5000);
getDiscount24(20000);
getDiscount24(50000);


// Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else 
//тернарним оператором.

// Оголошена функція checkStorage(available, ordered).
// Використаний тернарний оператор.
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 150) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"


console.log('   ')
console.log('Завдання 25')
console.log('   ')

function checkStorage25(available, ordered) {
    let message25 = available >= ordered ? "The order is accepted, our manager will contact you" : "Not enough goods in stock!"
console.log(message25)
}
checkStorage25(100, 50) 
checkStorage25(100, 130)
checkStorage25(200, 20) 
checkStorage25(200, 150)
checkStorage25(150, 180)

// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі 
//збереженим паролем адміністратора(константа ADMIN_PASSWORD) і повертає рядок з 
//повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, що:

// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".
// Оголошена функція checkPassword(password)
// Використаний тернарний оператор
// Виклик checkPassword("jqueryismyjam") повертає "Access is allowed"
// Виклик checkPassword("angul4r1sl1f3") повертає "Access denied, wrong password!"
// Виклик checkPassword("r3actsux") повертає "Access denied, wrong password!"

console.log('   ')
console.log('Завдання 26')
console.log('   ')

function checkPassword26(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message26 = ADMIN_PASSWORD === password ? "Access is allowed" : "Access denied, wrong password!";
    console.log(message26)
}
checkPassword26("jqueryismyjam");
checkPassword26("angul4r1sl1f3");
checkPassword26("r3actsux");








// Функція getSubscriptionPrice(type) отримує рядок з типом передплати
//користувача(параметр type), перевіряє її на збіг з трьома можливими 
//типами щомісячної передплати та повертає ціну, що зберігається у 
//змінній price.

// Якщо значення параметра type - це рядок:

// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.
// Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// Після рефакторингу інструкція if..else була замінена на switch.
// Доповни код інструкції switch, щоб функція працювала правильно.

// Оголошена функція getSubscriptionPrice(type)
// Виклик getSubscriptionPrice("professional") повертає число 20
// Виклик getSubscriptionPrice("organization") повертає число 50
// Виклик getSubscriptionPrice("starter") повертає число 0
console.log('   ')
console.log('Завдання 27')
console.log('   ')

function getSubscriptionPrice27(type) {
    let price27;
    switch (type) {
        case "starter":
            price27 = 0;
            break;
        
        case "professional":
            price27 = 50;
            break;
        
        case "organization":
            price27 = 20;
            break;
        
        
    }
    console.log(price27);
}
getSubscriptionPrice27("starter");
getSubscriptionPrice27("professional");
getSubscriptionPrice27("organization");


// Функція checkPassword(password) отримує пароль в параметр password,
//перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD
// і повертає повідомлення про результат порівняння, яке зберігається у
// змінній message.

// Якщо значення параметра password:

// дорівнює null, значить користувач скасував операцію і в message
//записується рядок "Canceled by user!".

// збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється
//рядок "Welcome!".

// не задовольняє жодну з попередніх умов, у змінну message записується рядок
//"Access denied, wrong password!".

// Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не 
//забудь про блок default (аналог else).

// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword(null) повертає "Canceled by user!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"
console.log('   ')
console.log('Завдання 28')
console.log('   ')
function checkPassword28(password) {
    const ADMIN_PASSWORD28 = 'mangohackzor';
    let message28;
    switch (password) {
        case null:
            message28 = "Canceled by user!";
            break;
        
        case ADMIN_PASSWORD28:
            message28 = "Welcome";
            break;
        
        default:
            message28 = "Access denied, wrong password!";
    }
        console.log(message28)
}

checkPassword28("mangohackzor");
checkPassword28(null);
checkPassword28("polyhax");
checkPassword28("jqueryismyjam");

// Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат, що зберігається у змінній message. Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>, необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country"

// Оголошена функція getShippingCost(country)
// В тілі функції використана інструкція switch
// Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
// Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"
// Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits"
// Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits"
// Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits"
// Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country"

console.log('   ')
console.log('Завдання 29')
console.log('   ')

function getShippingCost29(country) {
    let message29;
    switch (country) {
        case "Australia":
            message29 = `Shipping to ${country} will cost 170 credits`;
            break;
        case 'China':
            message29 = `Shipping to ${country} will cost 100 credits`;
            break;
        case "Chile":
            message29 = `Shipping to ${country} will cost 250 credits`;
            break;
        case "Jamaica":
            message29 = `Shipping to ${country} will cost 120 credits`;
            break;
        default:
            message29 = `Sorry, there is no delivery to your ${country}`;

    }
console.log(message29)
}

getShippingCost29("Australia");
getShippingCost29("Germany");
getShippingCost29("China");
getShippingCost29("Chile");
getShippingCost29("Jamaica");
getShippingCost29("Sweden");


// Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина. Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

// Оголошена функція getNameLength(name)
// Виклик функції getNameLength("Poly") повертає "Name Poly is 4 characters long"
// Виклик функції getNameLength("Harambe") повертає "Name Harambe is 6 characters long"
// Виклик функції getNameLength("Billy") повертає "Name Billy is 5 characters long"
// Виклик функції getNameLength("Joe") повертає "Name Joe is 3 characters long"
console.log('   ')
console.log('Завдання 30')
console.log('   ')
function getNameLength30(name) {
    let message30 = `Name ${name} is ${name.length} characters long`
    console.log(message30);

}

getNameLength30("Poly");
getNameLength30("Harambe");
getNameLength30("Billy");
getNameLength30("Joe");



// Доповни код, присвоївши оголошеним змінним вирази звертання до 
//відповідних елементів або властивостей рядка у змінній course.

// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.
// Оголошена змінна courseTopic
// Значення змінної courseTopic - це рядок "JavaScript essentials"
// Оголошена змінна courseTopicLength
// Значення змінної courseTopicLength - це число 21
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "J"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "s"
console.log('   ')
console.log('Завдання 31')
console.log('   ')
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line
console.log(courseTopic);
console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);


// Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

// Оголошена функція getSubstring(string, length)
// Виклик функції getSubstring("Hello world", 3) повертає "Hel"
// Виклик функції getSubstring("Hello world", 6) повертає "Hello"
// Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
// Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
// Виклик функції getSubstring("Hello world", 0) повертає ""

console.log("    ");
console.log('Завдання 32')
console.log('   ')
function getSubstring(string, length) {
    
}









// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.
// Оголошена функція checkForSpam(message).
// Виклик функції checkForSpam("Latest technology news") повертає false
// Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false
// Виклик функції checkForSpam("Get best sale offers now!") повертає true
// Виклик функції checkForSpam("Amazing SalE, only tonight!") повертає true
// Виклик функції checkForSpam("Trust me, this is not a spam message") повертає true
// Виклик функції checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true
// Виклик функції checkForSpam("[SPAM] How to earn fast money?") повертає true

console.log('   ')
console.log('Завдання 36')
console.log('   ')