import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
    const object1 = Map(object);
    return object1.getIn(array);
}
