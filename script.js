
// ==== ДАНІ (не змінювати) ====

let firstName = "tARAS";
let lastName = "shevchenko";
let birthYear = "1994";
let email = "Taras.Shevchenko@Gmail.com";
let isSubscribed = true;
let nickname;
let visits = 0;
const currentYear = 2026;

// ==== КОД НИЖЧЕ ====

console.log(typeof birthYear);

birthYear = Number(birthYear);
console.log(typeof birthYear);
console.log(birthYear);

let ageIn10Years = currentYear - birthYear;
console.log(ageIn10Years);
console.log(ageIn10Years+10);

firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
console.log(firstName);
console.log(lastName);

fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

let login = email.slice(0, email.indexOf("@"));
let domain = email.slice(email.indexOf("@") + 1).toLowerCase();
console.log(login);
console.log(domain);

let maskedEmail = login.slice(0, 2) + "***" + "@" + domain;
console.log(maskedEmail);


let isAdult = ageIn10Years >= 18;
console.log(isAdult);
console.log(typeof isAdult);

console.log(isAdult && isSubscribed);
console.log(isAdult || isSubscribed);
console.log(!isSubscribed);

let displayName = nickname || fullName;
console.log(displayName);

let daysLived = Math.round(ageIn10Years * 365.25);
console.log(daysLived);

let confirmationCode = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
console.log(confirmationCode);

console.log(visits++);
console.log(visits);
console.log(++visits);
console.log(visits);

let userCard = {
  "Користувач": fullName,
  "Показувати як": displayName,
  "Вік": (currentYear - birthYear) + "(через 10 років — " + (ageIn10Years + 10) + ")",
  "Email": maskedEmail,
  "Повнолітній": isAdult,
  "Підписка": (isAdult && isSubscribed),
  "Входів": visits,
  "Прожито днів": daysLived,
  "Код підтвердження": confirmationCode
} 
console.log(userCard);