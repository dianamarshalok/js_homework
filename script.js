console.log('#20. JavaScript homework: замовлення в інтернет-магазині')

const orderObj = {
  id: 1024,
  customer: { firstName: 'John', lastName: 'Smith', age: 15 },
  priceStr: '1099.99 грн',
  quantityStr: '3',
  deliveryDay: 3,
  tempNote: 'службова нотатка, видалити перед відправкою',
}

// Крок 1. Об'єкти
orderObj.city = 'Київ';
console.log(`${orderObj.customer.firstName} ${orderObj.customer.lastName} from ${orderObj.city}`);

// Крок 2. in / delete
console.log('tempNote' in orderObj); 
delete orderObj.tempNote;
console.log('tempNote' in orderObj);

// Крок 3. Копіювання об'єктів
const backupOrder = JSON.parse(JSON.stringify(orderObj));
backupOrder.customer.firstName = 'Ann';
console.log(orderObj.customer.firstName); 
const paidOrder = Object.assign({}, orderObj, { status: 'paid' });
console.log("status" in orderObj);

// Крок 4. Перетворення типів
let price = parseFloat(orderObj.priceStr);
let quantity = parseInt(orderObj.quantityStr);
let total = price * quantity;
console.log(price);
console.log(quantity);
console.log(total);

// Крок 5. Тернарний оператор
let discount = orderObj.customer.age < 18 ? 0.1 : orderObj.customer.age >= 60 ? 0.15 : 0;
let finalTotal = total * (1 - discount);
console.log(discount);
console.log(finalTotal);

// Крок 6. if ... else if ... else
if (finalTotal < 500) {
  console.log('Доставка 100');
} else if (finalTotal >= 500 && finalTotal < 1500) {
  console.log('Доставка 50');
} else {
  console.log('Доставка безкоштовна');
}

// Крок 7. switch / case / default
let deliveryDayName;

switch (orderObj.deliveryDay) {
  case 1:
    deliveryDayName = 'понеділок';
    break;
  case 2:
    deliveryDayName = 'вівторок';
    break;
  case 3:
    deliveryDayName = 'середа';
    break;
  case 4:
    deliveryDayName = 'четвер';
    break;
  case 5:
    deliveryDayName = 'п’ятниця';
    break;
  case 6:
    deliveryDayName = 'субота';
    break;
  case 7:
    deliveryDayName = 'неділя';
    break;
  default:
    deliveryDayName = 'невідомий день';
}

console.log(`Доставка у ${deliveryDayName}`);

// Крок 8. Цикл for, оператор кома, break / continue
let bonusSum=0;

for (let i = 1; i <= 20, bonusSum <= 50; i++) {
  if (i % 3 === 0) {
    continue;
  }
  bonusSum += i;
}

console.log(`Сума бонусів: ${bonusSum}`);
