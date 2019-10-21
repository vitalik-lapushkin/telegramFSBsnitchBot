const db = require('../beans/db');

const SELECT_REGISTRED_USERS_SQL = 'select * from bot.users where id = ANY($1)';
const INSERT_USERS_SQL = 'insert into bot.users (id) values $1';

class UserRepository {

    getRegistredUsersFrom(users) {
        const userIds = users.map(user => user.id);
        try{
            return await db.query(SELECT_REGISTRED_USERS_SQL, userIds);
        } catch (e) {
            throw new Error(e);
        }
    }

    insertUsers(users) {
        await db.query(INSERT_USERS_SQL, users.map(user => `(${user.id})`).join(', '));
    }

    increaseRating(user) {
        
    }

    decreaseRating(user) {

    }
}