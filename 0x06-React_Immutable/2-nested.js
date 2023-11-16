const { Map } = require('immutable');

function accessImmutableObject(object, array) {
    const object1 = Map(object);
    return object1.getIn(array);
}

console.log(accessImmutableObject({
    name: {
         first: "Guillaume",
         last: "Salva"
    }
}, ['name', 'first'])
);