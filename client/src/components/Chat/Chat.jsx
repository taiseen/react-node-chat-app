import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import queryString from 'query-string'
import Input from '../Input/Input';
import io from 'socket.io-client'
import { useEffect, useState } from 'react';
import './Chat.css'


// share inside methods() 
// where needed... this socket variable...
let socket;


const Chat = () => {

  const Server = 'http://localhost:5000'

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(messages);

  // 1st) 🟨 this useEffect is responsible for...
  // server to client connecting & disconnecting...
  useEffect(() => {

    const { name, room } = queryString.parse(window.location.search)
    setName(name);
    setRoom(room);


    // 1st) 🟩 From client side, 
    // socket connection start from here...
    socket = io(Server)


    // 2nd) 🟩 server response according to this 'join' flag name
    // event listen | & | create this event at server side
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });


    // just print client socket id into console
    socket.on('connect', () => console.log(socket.id))


    // cleanup function's()
    // unMounting socket connection...
    // user leave this chat app...
    return () => {
      socket.disconnect();
      socket.off();
    }
  }, [Server, name, room]);


  // 2nd) 🟨 this useEffect is responsible for...
  // handling user messages...
  useEffect(() => {

    // server listening this event at backEnd 
    // by the help of .emit() method...
    socket.on('message', (message) => {

      // push message inside messages[array]
      setMessages(prev => [...prev, message])
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    })

    // receive sms from server
    socket.on('demoTesting', (data) => console.log(data))


    // run this useEffect only when this 'message' is changes...
  }, [])



  // after typing, user press ENTER KEY, for sending sms...
  // & clear the input field of that message...
  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      // message send ==> to the server...
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }


  return (
    <div className="outerContainer">
      <div className="container">

        <InfoBar room={room} />

        <Messages messages={messages} name={name} />

        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  );
}

export default Chat;