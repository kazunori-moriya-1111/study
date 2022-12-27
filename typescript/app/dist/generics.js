function copy(value, key) {
    value.name;
    value[key];
    return value;
}
console.log(copy({ name: 'abc', age: 33 }, 'age'));
