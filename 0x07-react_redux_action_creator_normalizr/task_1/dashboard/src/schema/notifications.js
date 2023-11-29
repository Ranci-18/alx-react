import * as JSON_DATA from '../../../../notifications.json';
import { schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid'});

const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
})

export default function getAllNotficationsByUser(userId) {
    return JSON_DATA.filter(items => items.author.id === userId).map(items => items.context)
}
