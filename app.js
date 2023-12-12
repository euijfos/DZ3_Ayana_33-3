//первое
const tags = ['li', 'span', 'a', 'p', 'div', 'div', 'div', 'a', 'a', 'span', 'span', 'span', 'span']
const obj = {}

tags.forEach((item) => {
    if (obj[item]) {
        obj[item]++
    } else {
        obj[item] = 1
    }
})
console.log(obj);

//второе
const array = ['name', 'John', 'lastname', 'Black', 'age', '23'];
const objUser = {};

for (let i = 0; i < array.length; i += 2) {
    const key = array[i];
    const value = array[i + 1];
    objUser[key] = value;
}

console.log(objUser);

//третье
function typeOfElements(item) {
    console.log(typeof item);
}

typeOfElements('ayana')
typeOfElements(false)
typeOfElements(24)
