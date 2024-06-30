const stas = {
    firstName: 'Stanislav',
    secondName: 'Kosyrev',
    birthDate: new Date('1991-11-23'),
    skills: {
        websoftAdministration: true,
        javaScript: false
    },
    propertie: {
        apartment: true,
        car: 'Creta'
    }
}
console.log(stas.age);
console.log(stas.skills.html);
// console.log(stas.properties.car);

// if (stas.properties) {
//     console.log(stas.properties.car);
// }

// const unknown = stas.properties && stas.properties.car;
// console.log(unknown);

// const unknown = (stas.properties) ? stas.properties.car : 1;
// console.log(unknown);

// console.log(stas.properties?.car);

const candidate = null // {
//     1: 'HR',
//     2: '40'
// }

let index = 0;

const result = candidate?.[++index];

console.log(result, index);