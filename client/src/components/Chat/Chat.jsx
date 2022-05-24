import { useEffect, useState } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'

let socket;

const Chat = () => {

  const Server = 'http://localhost:5000'

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');


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
  }, [Server])


  return (
    <div>

      <p>{name}</p>
      <p>{room}</p>

    </div>
  )
}

export default Chat