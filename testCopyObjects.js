console.log(1===1);
console.log({ name: "Stas"} === { name: "Stas"});

let personFirst = {
    firstName: 'Stas',
    secondName: 'Kosyrev',
    skills: {
        websoftAdmin: true,
        javaScript: false
    }
}

let personCopy = { ...personFirst};

personFirst.skills.javaScript = true;
console.table (personFirst);
console.table (personCopy);
console.log(personFirst.secondName === personCopy.secondName);




