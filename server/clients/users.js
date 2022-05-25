// create helper function's()
// that do all operation related to user

const users = []
console.log(users)


export const addUser = ({ id, name, room }) => {

    name = name.toLowerCase().trim();
    room = room.toLowerCase().trim();

    const existingUser = users.find(user => user.name === name && user.room === room);

    if (existingUser) {
        return { error: 'Username is taken.' };
    } else {
        const user = { id, name, room };
        users.push(user);
        return { user };
    }
}


export const removeUser = (id) => {

    // const newUsers = users.filter(user => user.id !== id)
    // return newUsers;

    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0]
        // [0] ==> return this removed user {Object} according to the (id)
        // & also removed user {Object} from users[array] 
    }

}


export const getUser = (id) => users.find(user => user.id === id);


export const getUsersFromRoom = (room) => users.filter(user => user.room === room)