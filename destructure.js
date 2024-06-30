const stas = {
    firstname: 'Stanislav',
    secondname: 'Kosyrev',
    birthDate: new Date('1991-11-23'),
    sex: 'male',
    skills: {
        websoftAdministration: true,
        javaScript: false
    },
    properties: {
        apartment: true,
        car: 'Creta'
    }
}


// const { firstname: firstName, secondname: secondName, sex: sex = 'не указан'} = stas; //создание переменных, где имя=ключ объекта, значение=значение ключа, имя = значение по умолчанию
// console.log(firstName, secondName, sex);

// const { properties: {apartment, car} } = stas; //деструктуризация вложенных объектов
// console.log(apartment, car);


// function userSay({firstname, properties: {car}}) {
//     console.log('Привет, меня зовут ' + firstname + '. Я езжу на ' + car + '.')
// }

// console.log(userSay(stas));


// let firstName = 'Косырев';
// let secondName = 'Станислав';

// [firstName, secondName] = [secondName, firstName];
// console.log( firstName, secondName);

const myMap = new Map();
myMap.set('firstname', 'Stanislav');
myMap.set('lastname', 'Kosyrev');
const [ [, firstName], [, lastName] ] = myMap

console.log(firstName);