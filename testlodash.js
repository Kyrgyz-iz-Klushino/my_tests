const _ = require('lodash');

const stas = {
    firstName: 'Stanislav',
    secondName: 'Kosyrev',
    birthDate: new Date('1991-11-23'),
    skills: {
        websoftAdministration: true,
        javaScript: false
    }
}

const firstCopy = _.cloneDeep(stas);
console.log(stas);
console.log(firstCopy);
