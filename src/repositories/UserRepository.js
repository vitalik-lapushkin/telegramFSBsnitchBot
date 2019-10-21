const db = require('../beans/db');

const SELECT_UNREGISTRED_USER_IDS_SQL = 'select id::int from (select unnest(string_to_array($1, \',\')))'
    + 'as unregistred_users(id) where id::int not in (select id from fsb_snitch_bot.users);'
const INSERT_USERS_SQL = 'insert into fsb_snitch_bot.users (id) values $1';
const INCREASE_RATING_SQL = 'select * from fsb_snitch_bot.increase_rating($1)';
const DECREASE_RATING_SQL = 'select * from fsb_snitch_bot.decrease_rating($1)';

class UserRepository {

    filterUnregistredUsers(userIds) {
        try{
            return await db.query(SELECT_UNREGISTRED_USER_IDS_SQL, userIds.join(','));
        } catch (e) {
            throw new Error(e);
        }
    }

    insertUsers(userIds) {
        await db.query(INSERT_USERS_SQL, users.map(user => `(${user.id})`).join(', '));
    }

    increaseRating(userId) {
        return await db.query(INCREASE_RATING_SQL, userId);
    }

    decreaseRating(userId) {
        return await db.query(DECREASE_RATING_SQL, userId);
    }
}