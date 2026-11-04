console.log('#21. JavaScript homework: читацький клуб')

const memberObj = {
  name: 'Olena',
  yearOfBirth: 1998,
  city: 'Львів',
  booksPerMonth: 3,
  favoriteGenre: 'фентезі',
}

// Завдання 1. Функція, параметри за замовчуванням, перевірка на undefined

function memberCard(name, yearOfBirth, favoriteGenre, city = 'Київ') {
  if (name && name.length) {
    name = `My name is ${name}.`;
  }
  if (yearOfBirth) {
    let age = new Date().getFullYear() - yearOfBirth;
    yearOfBirth = `I am ${age} years old.`;
  }
  if (favoriteGenre && favoriteGenre.length) {
    favoriteGenre = `I read ${favoriteGenre}.`;
  }
  if (city && city.length) {
    city = `I live in ${city}.`;
  }
  return `${name || ''} ${yearOfBirth || ''} ${favoriteGenre || ''} ${city || ''}`.trim();
}
memberCard();
console.log(memberCard(memberObj.name, memberObj.yearOfBirth, memberObj.favoriteGenre, memberObj.city));
console.log(memberCard(memberObj.name, memberObj.yearOfBirth, memberObj.favoriteGenre));
console.log(memberCard(memberObj.name, memberObj.yearOfBirth, undefined, memberObj.city));

// Завдання 2. Функція і цикл for ... in

function describeMember(memberObj) {
  let result = '';
  for (const key in memberObj) {
      result += `${key}: ${memberObj[key]}; `;
  }
  return result;
}
describeMember(memberObj);
console.log(describeMember(memberObj));