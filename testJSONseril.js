let personFirst = {
    firstName: 'Stas',
    secondName: 'Kosyrev',
    skills: {
        websoftAdmin: true,
        javaScript: false
    }
}

let test = JSON.stringify(personFirst);
let firstCopy = JSON.parse(test);
personFirst.skills.javaScript = 'true';
console.log(personFirst);
console.log(firstCopy);