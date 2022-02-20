import React, { useState } from 'react';
import './styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageAction, removeMessageAction } from './store/messageReducer';
import Mybutton from './components/button/MyButton';
import Myinput from './components/input/MyInput';
import Chatlist from './components/ChatList';

function App() {
	const dispatch = useDispatch();
	const messages = useSelector((state) => state.messages.messages);
	const [body, setBody] = useState('');

	const addMessage = () => {
		var today = new Date();
		var time = today.getHours() + ':' + today.getMinutes();
		const message = {
			id: Date.now(),
			body,
			time: time,
		};
		dispatch(addMessageAction(message));
		setBody('');
	};

	const removeMessage = (message) => {
		dispatch(removeMessageAction(message.id));
	};

	return (
		<div className={'app'}>
			{messages.length > 0 ? (
				<Chatlist messages={messages} removeMessage={removeMessage} />
			) : (
				<div className='chat-empty'>Empty chat</div>
			)}

			<div className='message-container'>
				<Myinput
					type='text'
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<Mybutton onClick={() => addMessage()}></Mybutton>
			</div>
		</div>
	);
}

export default App;
