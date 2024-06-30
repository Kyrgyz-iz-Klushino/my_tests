const stas = {
    firstName: 'Stanislav',
    secondName: 'Kosyrev',
    birthDate: new Date('1991-11-23'),
    skills: {
        websoftAdministration: true,
        javaScript: false
    },
    hello () {
        console.log('hello')
    }
}

const firstCopy = structuredClone(stas)
console.log(stas);
console.log(firstCopy);
