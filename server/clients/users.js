// create helper function's()
// that do all operation related to user

const users = []


export const addUser = ({ id, name, room }) => {

    const userName = name.toLowerCase().trim();
    const chatRoom = room.toLowerCase().trim();

    const existingUser = users.find(user =>
        user.userName === name &&
        user.chatRoom === room
    );

    if (existingUser) {
        return { error: 'UserName is taken...' };
    } else {
        // create user Object
        const user = { id, userName, chatRoom };

        // add user Object into user[array]
        users.push(user);

        return { user };
    }
}


export const removeUser = (id) => {

    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
        // [0] ==> return this removed user {Object} according to the (id)
        // & also removed user {Object} from users[array] 
    }
}


export const getUser = (id) => users.find(user => user.id === id);


export const getUsersFromRoom = (room) => users.filter(user => user.chatRoom === room);