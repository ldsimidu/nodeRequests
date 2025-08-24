const { Person } = require('./person');

//require('./modules/path');
//require('./modules/fs');
//require('./modules/http');

require('./modules/express')

const person = new Person('Helena');
console.log(person.sayMyName());