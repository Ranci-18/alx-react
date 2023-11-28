import * as JSON_DATA from '../../../../notifications.json';

export default function getAllNotficationsByUser(userId) {
    return JSON_DATA.filter(items => items.author.id === userId).map(items => items.context)
}
