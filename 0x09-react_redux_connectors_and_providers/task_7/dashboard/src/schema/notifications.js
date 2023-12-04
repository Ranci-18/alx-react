import * as JSON_DATA from '../../../../notifications.json';
import { schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid'});

const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
})

export default function getAllNotficationsByUser(userId) {
    const normalizeData = normalize(JSON_DATA, [notification]);

    const userNotifications = normalizeData.entities.notfications || {};

    const filteredNotifications = Object.values(userNotifications).filter(
        notification => notification.author.id === userId
    );

    return filteredNotifications.map(notification => notification.context)
}