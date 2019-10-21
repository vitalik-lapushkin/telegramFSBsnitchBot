const userRepository = require('../repositories/UserRepository');

class UserService {
    createUnregistredUsers(users) {
        const userIds = users.map(user => user.id);
        const unregistredUserIds = userRepository.filterUnregistredUsers(userIds);
        userRepository.insertUsers(unregistredUserIds);
    }

    increaseRating(user) {
        userRepository.increaseRating(user.id)
    }

    decreaseRating(user) {
        userRepository.decreaseRating(user.id)
    }
}