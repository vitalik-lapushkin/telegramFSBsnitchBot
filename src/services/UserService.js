const userRepository = require('../repositories/UserRepository');

const filterUnregistredUsers = (users) => {
    const registeredUserIds = userRepository.getRegistredUsersFrom(users).map(user => user.id);
    return users.filter(user => !registeredUserIds.includes(user.id));
}

class UserService {
    createUnregistredUsers(users) {
        const unregistredUsers = filterUnregistredUsers(users);
        userRepository.insertUsers(unregistredUsers);
    }

    increaseRating() {

    }

    decreaseRating() {
        
    }
}