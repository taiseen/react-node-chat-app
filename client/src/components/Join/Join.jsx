import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Join.css'


const Join = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleClick = (e) => {
        if (name && room) {
            // this statement only use for enter button press...
            navigate(`/chat?name=${name}&room=${room}`)
        } else {
            e.preventDefault()
        }
    }

    const enterPress = (e) => {
        if (e.key === 'Enter' || e.key === 13) {
            handleClick()
        }
    }


    return (
        <div className='joinOuterContainer'>
            <div className="joinInnerContainer">
                <h1 className="heading"> Join </h1>

                <div>
                    <input
                        type="text" placeholder='Name' className='joinInput'
                        onChange={e => setName(e.target.value)} />
                </div>
                <br />
                <div>
                    <input
                        type="text" placeholder='Room' className='joinInput'
                        onChange={e => setRoom(e.target.value)}
                        onKeyPress={enterPress} />
                </div>

                <Link onClick={handleClick} to={`/chat?name=${name}&room=${room}`}>
                    <button className='button mt-20' type='submit'> Sign In </button>
                </Link>
            </div>
        </div >
    )
}

export default Join