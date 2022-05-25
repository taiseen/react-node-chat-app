import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (

    <form className="form">

        <input
            type="text"
            value={message}
            className="input"
            placeholder="Type a message..."
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
        />

        <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>

    </form>
)

export default Input;