import { Map } from 'immutable';

function accessImmutableObject(object, array) {
    const object1 = Map(object);
    return object1.getIn(array);
}
