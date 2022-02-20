import React from 'react';

const Chatitem = ({ message, removeMessage }) => {
	return (
		<div className='chat-item' onClick={() => removeMessage(message)}>
			<div className='chat-item_body'>{message.body}</div>
			<div className='chat-item_time'>{message.time}</div>
		</div>
	);
};

export default Chatitem;
