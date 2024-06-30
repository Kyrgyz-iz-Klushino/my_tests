const stasProfile = {
    name: 'Stanislav',
    surname: 'Kosyrev',
    age: 32,
    1: 'test',
    [Symbol('ah')]: 'ah'
};

stasProfile.job = "Websoft developer";

console.table(stasProfile);
console.table(Reflect.ownKeys(stasProfile));

