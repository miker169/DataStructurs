'use strict';

var map = new Map();

map.set('Gandalf', 'gandalf@email.com');
map.set('Tyrion', 'tyrion@email.com');
map.set('John', 'johnsnow@email.com');

console.log(map.has('Gandalf'));
console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.get('Tyrion'));

map.delete('John');
console.log(map.get('John'));
//# sourceMappingURL=es6map.js.map